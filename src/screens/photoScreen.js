import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import UploadForm from "../helpers/uploadForm";
import ImageGrid from "../helpers/ImageGrid";
import Modal from "../helpers/Modal";
import BackButton from "../components/BackButton";

export default function Image({ navigation }) {
  const back = () => {
    navigation.navigate("Dashboard");
  };
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <SafeAreaView>
      <BackButton goBack={back} />
       <View style={styles.container}>
        <UploadForm />
        {/*<ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}*/}
      </View> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
     margin: "auto",
  },
});
