import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import ProTip from "./ProTip";
import logo from "./logo.svg";
import "./App.css";
import AwsUpload from "./components/AwsUpload";
import Demo from "./components/Cropper";
import FbUpload from "./components/FbUpload";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import Selector from "./components/Selector";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

function App() {
  return (
    <>
      {/* <h1>AWS</h1>
      <hr />
      <div>
        <Upload />
        <br />
        <Demo />
      </div>
      <h1>Firebase</h1>
      <hr /> */}

      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Paper variant="outlined" square>
                <Typography
                  variant="body2"
                  component="p"
                  gutterBottom
                  sx={{
                    textAlign: "center",
                    height: 60,
                    lineHeight: "60px",
                  }}
                >
                  Card
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            NFT printing by{" "}
            <a href="https://cryptobits.shop" target="_blank">
              cryptobits
            </a>
          </Typography>
          <ProTip />
          <Selector />
        </Box>
        <div>
          <FbUpload />
        </div>
        <Copyright />
      </Container>
    </>
  );
}

export default App;
