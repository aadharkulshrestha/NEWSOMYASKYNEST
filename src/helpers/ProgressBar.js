import React, { useEffect } from "react";
import useStorage from "../../firebase";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { motion } from "framer-motion";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      style={styles.progressBar}
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    height: "5px",
    background: "#efb6b2",
    marginTop: "20px",
  },
});

export default ProgressBar;
