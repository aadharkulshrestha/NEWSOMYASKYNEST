import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Text } from "react-native-paper";
import BackButton from "../components/BackButton";

export default function Owners({ navigation }) {
  const back = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <SafeAreaView>
      <BackButton goBack={back} />

      <Text style={styles.SText}>Somya Sky Nest</Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={styles.HText}>Flat No.</Text>
        <Text style={styles.HText}>Owner's Name</Text>
        <Text style={styles.HText}>Contact No.</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={styles.DText}>G-1</Text>
        <Text style={styles.DText}>Owner's Name</Text>
        <Text style={styles.DText}>Contact No.</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={styles.DText}>G-2</Text>
        <Text style={styles.DText}>Owner's Name</Text>
        <Text style={styles.DText}>Contact No.</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={styles.DText}>G-3</Text>
        <Text style={styles.DText}>Owner's Name</Text>
        <Text style={styles.DText}>Contact No.</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={styles.DText}>F-1</Text>
        <Text style={styles.DText}>Owner's Name</Text>
        <Text style={styles.DText}>Contact No.</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={styles.DText}>F-2</Text>
        <Text style={styles.DText}>Sajal Kumar</Text>
        <Text style={styles.DText}>8386099195</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={styles.DText}>F-3</Text>
        <Text style={styles.DText}>Owner's Name</Text>
        <Text style={styles.DText}>Contact No.</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={styles.DText}>S-1</Text>
        <Text style={styles.DText}>Owner's Name</Text>
        <Text style={styles.DText}>Contact No.</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={styles.DText}>S-2</Text>
        <Text style={styles.DText}>Owner's Name</Text>
        <Text style={styles.DText}>Contact No.</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={styles.DText}>S-3</Text>
        <Text style={styles.DText}>Owner's Name</Text>
        <Text style={styles.DText}>Contact No.</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Text style={styles.DText}>T-1</Text>
        <Text style={styles.DText}>Owner's Name</Text>
        <Text style={styles.DText}>Contact No.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  DText: {
    textAlign: "center",
    fontSize: 21,
    marginTop: 10,
    marginLeft: 20,
    color: "black",
    fontStyle: "bold",
  },
  HText: {
    textAlign: "center",
    fontSize: 22,
    marginTop: 80,
    marginLeft: 12,
    color: "black",
  },
  SText: {
    textAlign: "center",
    fontSize: 40,
    marginTop: 70,
    color: "black",
  },
});
