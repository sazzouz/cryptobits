// import React, { CSSProperties, useState } from "react";

// import Select from "react-select";
// import {
//   ColourOption,
//   colourOptions,
//   FlavourOption,
//   GroupedOption,
//   groupedOptions,
// } from "../data";

// const groupStyles = {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "space-between",
// };
// const groupBadgeStyles: CSSProperties = {
//   backgroundColor: "#EBECF0",
//   borderRadius: "2em",
//   color: "#172B4D",
//   display: "inline-block",
//   fontSize: 12,
//   fontWeight: "normal",
//   lineHeight: "1",
//   minWidth: 1,
//   padding: "0.16666666666667em 0.5em",
//   textAlign: "center",
// };

// const formatGroupLabel = (data: GroupedOption) => (
//   <div style={groupStyles}>
//     <span>{data.label}</span>
//     <span style={groupBadgeStyles}>{data.options.length}</span>
//   </div>
// );

// const Selector = () => {
//   const [value, setValue] = useState({
//     value: "volkswagen",
//     label: "Volkswagen",
//   });
//   const handleChange = (option) => {
//     setValue(option);
//     console.log(value);
//   };
//   return (
//     <>
//       <Select<ColourOption | FlavourOption, false, GroupedOption>
//         options={groupedOptions}
//         onChange={handleChange}
//         formatGroupLabel={formatGroupLabel}
//       />
//     </>
//   );
// };

// export default Selector;

import React, { Component } from "react";

import Select, { ActionMeta, OnChangeValue, StylesConfig } from "react-select";
import { ColourOption, colourOptions } from "../data";

interface State {
  readonly value: readonly ColourOption[];
}

const styles: StylesConfig<ColourOption, true> = {
  multiValue: (base, state) => {
    return state.data.isFixed ? { ...base, backgroundColor: "gray" } : base;
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed
      ? { ...base, fontWeight: "bold", color: "white", paddingRight: 6 }
      : base;
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: "none" } : base;
  },
};

const orderOptions = (values: readonly ColourOption[]) => {
  return values
    .filter((v) => v.isFixed)
    .concat(values.filter((v) => !v.isFixed));
};

export default class FixedOptions extends Component<{}, State> {
  state = {
    value: orderOptions([colourOptions[0], colourOptions[1], colourOptions[3]]),
  };

  constructor(props: {}) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(
    value: OnChangeValue<ColourOption, true>,
    actionMeta: ActionMeta<ColourOption>
  ) {
    console.log(value);
    switch (actionMeta.action) {
      case "remove-value":
      case "pop-value":
        if (actionMeta.removedValue.isFixed) {
          return;
        }
        break;
      case "clear":
        value = colourOptions.filter((v) => v.isFixed);
        break;
    }

    value = orderOptions(value);
    this.setState({ value: value });
  }

  render() {
    return (
      <Select
        value={this.state.value}
        isMulti
        styles={styles}
        isClearable={this.state.value.some((v) => !v.isFixed)}
        name="colors"
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={this.onChange}
        options={colourOptions}
      />
    );
  }
}
