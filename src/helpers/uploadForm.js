import React, { useState } from "react";
import ProgressBar from "../helpers/ProgressBar";
import { View, StyleSheet, SafeAreaView,Text,TextInput } from "react-native";

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
    <SafeAreaView>
    <View style={styles.form}>
       <View style={styles.label}>
        <TextInput style={styles.labelInput} type="file" onChange={handleChange} />
        <Text>+</Text>
      </View>
      {/*<View style={styles.output}>
        {error && <View style={styles.error}>{error}</View>}
        {file && <View>{file.name}</View>}
        {file && <ProgressBar styles={styles.progressBar} file={file} setFile={setFile} />}
      </View> */}
    </View>
    </SafeAreaView>
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
    width: 30,
    height: 30,
    border: "1px solid #efb6b2",
    borderRadius: "50%",
    margin: "10px auto",
    lineHeight: "30px",
    color: "#efb6b2",
    fontWeight: "bold",
    fontSize: "24px",
  },
  labelInput: {
    
  },
  form: {
    margin: "auto",
    textAlign: "center",
  },
  progressBar: {
    height: "5px",
    background: "#efb6b2",
    marginTop: "20px",
  },
});


export default UploadForm;