import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IconButton, Menu } from "react-native-paper";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Toast from "react-native-tiny-toast";

export default function Dashboard({ navigation }) {
  const [name, setName] = useState("");
  const [visible, setVisible] = React.useState(false);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("userUid");
      if (value !== null) {
        console.log(value);
        var userNameRef = db.ref("users/" + value + "/username");
        userNameRef.on("value", (snapshot) => {
          const data = snapshot.val();
          setName(data);
          console.log(data);
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const removeItemValue = async () => {
    try {
      await AsyncStorage.removeItem("userUid");
      return true;
    } catch (exception) {
      return false;
    }
  };

  useEffect(() => {
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

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <SafeAreaView>
      <ImageBackground
        source={require("../assets/dashBack.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ paddingHorizontal: 40, marginTop: 30 }}>
          <Menu
            style={{ marginLeft: 190, marginTop: 40 }}
            visible={visible}
            onDismiss={closeMenu}
            anchor={
              <IconButton
                icon="dots-vertical"
                color="black"
                size={22}
                style={{ marginLeft: 260 }}
                onPress={openMenu}
              />
            }
          >
            <Menu.Item
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
                Toast.show("User Logged OUT!");
                closeMenu();
              }}
              title="Log Out"
            />
          </Menu>
        </View>
        <View style={{ paddingHorizontal: 40, marginTop: 15 }}>
          <Text
            style={{
              fontSize: 45,
              color: "#522289",
            }}
          >
            Hello !
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

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity style={styles.container} onPress={() => {}}>
            <View style={{ top: -40 }}></View>
            <Text style={styles.btnText}>hello</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.container}
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: "Owners" }],
              });
            }}
          >
            <View style={{ top: -40 }}></View>
            <Text style={styles.btnText}>Owner's Detail</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={styles.container}
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: "Image" }],
              });
            }}
          >
            <View style={{ top: -40 }}></View>
            <Text style={styles.btnText}>Images</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container} onPress={() => {}}>
            <View style={{ top: -40 }}></View>
            <Text style={styles.btnText}>hello</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity style={styles.container} onPress={() => {}}>
            <View style={{ top: -40 }}></View>
            <Text style={styles.btnText}>Comming Soon!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container} onPress={() => {}}>
            <View style={{ top: -40 }}></View>
            <Text style={styles.btnText}>Comming Soon!</Text>
          </TouchableOpacity>
        </View>

        {/* <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scrollViewCategories}
        >
          <TouchableOpacity style={styles.container} onPress={() => {}}>
            <View style={{ top: -40 }}></View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container} onPress={() => {}}>
            <View style={{ top: -40 }}></View>
          </TouchableOpacity>
        </ScrollView>
        {/* <Button
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
      </Button> */}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 160,
    width: 150,
    backgroundColor: "white",
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 20,
    borderWidth: 2,
  },
  scrollViewCategories: {
    paddingLeft: 1,
  },
  btnText: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 65,
    color: "black",
  },
});
