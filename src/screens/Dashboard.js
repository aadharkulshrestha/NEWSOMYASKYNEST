import React, { useState, useEffect } from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { auth, db } from "../../firebase";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, Image, ImageBackground, TextInput } from "react-native";

export default function Dashboard({ navigation }) {
  const [name, setName] = useState("");

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userUid')
      if(value !== null) {
        console.log(value);
        var userNameRef = db.ref(
          "users/" + value + "/username"
        );
        userNameRef.on("value", (snapshot) => {
          const data = snapshot.val();
          setName(data);
          console.log(data);
        });
      }
    } catch(e) {
      console.log(e);
    }
  }

  const removeItemValue = async () => {
    try {
        await AsyncStorage.removeItem('userUid');
        return true;
    }
    catch(exception) {
        return false;
    }
}
  
  
  useEffect( () => {
    getData();
    // var userNameRef = db.ref(
    //   "users/" + "72RlnEq8iwRriujzqyx0zS07COF2" + "/username"
    // );
    // userNameRef.on("value", (snapshot) => {
    //   const data = snapshot.val();
    //   setName(data);
    //   console.log(data);
    // });
  }, []);

  

  return (
    <ImageBackground
      source={require("../assets/dashBack.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={{ paddingHorizontal: 40, marginTop: 85 }}>
        <Text
          style={{
            fontSize: 40,
            color: "#522289",
          }}
        >
          Hello
        </Text>

        <Text
          style={{
            fontSize: 25,
            paddingVertical: 15,
            paddingRight: 80,
            lineHeight: 22,
            color: "black",
          }}
        >
          {name}
        </Text>
      </View>
      <Button
        mode="outlined"
        onPress={() => {
          auth
            .signOut()
            .then(() => {
              removeItemValue();
              navigation.reset({
                index: 0,
                routes: [{ name: "StartScreen" }],
              });
            })
            .catch((error) => alert(error.message));
        }}
      >
        Logout
      </Button>
      {/* <Button
        mode="outlined"
        onPress={() => {
          console.log(name)
        }}
      >
        console
      </Button> */}
    </ImageBackground>
    // <Background>
    //   <Logo />
    //   <Header>Let’s start</Header>
    //   <Paragraph>
    //     Your amazing app starts here. Open you favorite code editor and start
    //     editing this project.
    //   </Paragraph>
    // <Button
    //   mode="outlined"
    //   onPress={() => {
    //     auth.signOut()
    //     .then(() => {
    //       navigation.reset({
    //       index: 0,
    //       routes: [{ name: 'StartScreen' }],
    //     })
    //     })
    //     .catch((error) => alert(error.message));

    //   }}
    // >
    //   Logout
    // </Button>
    // </Background>
  );
}
