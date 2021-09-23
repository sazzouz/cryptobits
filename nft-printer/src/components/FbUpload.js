import { firebaseApp, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import getRandomString from "../utils/randomString";
import CircularProgress from "@mui/material/CircularProgress";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CssBaseline from "@mui/material/CssBaseline";
import { Paper } from "@mui/material";

const FbUpload = () => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  const onChange = (e) => {
    setLoading(true);
    const file = e.target.files[0];
    const dir = "testing/";
    const storageRef = ref(storage, dir + uuidv4());
    // Create file metadata including the content type
    /** @type {any} */
    const metadata = {
      contentType: file.type,
    };
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;

          default:
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setUrl(downloadURL.toString());
          setLoading(false);
        });
      }
    );
  };
  return (
    <>
      <Paper sx={{ px: 0, py: 0 }}>
        <img src="http://loremflickr.com/300/200" />
      </Paper>
      {loading ? (
        <Button variant="contained" component="span" disabled>
          Uploading
          <CircularProgress size={14} sx={{ ml: 1 }} />
        </Button>
      ) : (
        <div>
          <input
            accept="image/*"
            type="file"
            style={{ display: "none" }}
            onChange={onChange}
            hidden
            id="raised-button-file"
          />
          <label htmlFor="raised-button-file">
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </div>
      )}
      <p>{url}</p>
    </>
  );
};

export default FbUpload;
