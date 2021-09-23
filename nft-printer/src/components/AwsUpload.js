import React, { useRef } from "react";
import S3 from "react-aws-s3";

const AwsUpload = () => {
  const fileInput = useRef();

  const handleClick = (event) => {
    event.preventDefault();
    let file = fileInput.current.files[0];
    let newFileName = fileInput.current.files[0].name;
    console.log(file);
    console.log(newFileName);
    const config = {
      bucketName: process.env.REACT_APP_AWS_BUCKET_NAME,
      dirName: process.env.REACT_APP_AWS_DIR_NAME,
      region: process.env.REACT_APP_AWS_REGION,
      accessKeyId: process.env.REACT_APP_AWS_ACCESS_ID,
      secretAccessKey: process.env.REACT_APP_AWS_ACCESS_KEY,
    };
    console.log(config);
    // // Function to house upload to S3 bucket.
    const ReactS3Client = new S3(config);
    ReactS3Client.uploadFile(file, newFileName).then((data) => {
      console.log(data);
      if (data.status === 204) {
        console.log("Upload succesful");
      } else {
        console.log("Upload failed");
      }
    });
  };

  return (
    <>
      <form className="upload-steps" onSubmit={handleClick}>
        <label>
          Upload file:
          <input type="file" ref={fileInput} />
        </label>
        <br />
        <button type="submit">Upload</button>
      </form>
    </>
  );
};

export default AwsUpload;
