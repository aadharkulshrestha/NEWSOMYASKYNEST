import React, { useState } from "react";
import ProgressBar from "../helpers/ProgressBar";
import { View, StyleSheet, SafeAreaView } from "react-native";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png or jpg)");
    }
  };

  return (
    <form style={styles.form}>
      <label style={styles.label}>
        <input style={styles.labelInput} type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div style={styles.output}>
        {error && <div style={styles.error}>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar styles={styles.progressBar} file={file} setFile={setFile} />}
      </div>
    </form>
  );
};



const styles = StyleSheet.create({
  output: {
    height: "60px",
    fontSize: "0.8rem",
  },
  error: {
    color: "#ff4a4a",
  },
  label: {
    display: "block",
    width: "30px",
    height: "30px",
    border: "1px solid #efb6b2",
    borderRadius: "50%",
    margin: "10px auto",
    lineHeight: "30px",
    color: "#efb6b2",
    fontWeight: "bold",
    fontSize: "24px",
  },
  labelInput: {
    height: "0",
    width: "0",
    opacity: "0",
  },
  form: {
    margin: "30px auto 10px",
    textAlign: "center",
  },
  progressBar: {
    height: "5px",
    background: "#efb6b2",
    marginTop: "20px",
  },
});


export default UploadForm;