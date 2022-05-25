import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, ToastAndroid ,Platform} from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import BackButton from "../components/BackButton";
import { theme } from "../core/theme";
import { auth,db } from "../../firebase";
// import firebase from "firebase/app";
// import "firebase/database";
import { emailValidator } from "../helpers/emailValidator";
import { phoneValidator } from "../helpers/phoneValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { nameValidator } from "../helpers/nameValidator";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [phone, setPhone] = useState({ value: "", error: "" });

  const onSignUpPressed = async () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const phoneError = phoneValidator(phone.value);
    if (emailError || passwordError || nameError || phoneError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setPhone({ ...phone, error: phoneError });
      return;
    } else {
      auth
        .createUserWithEmailAndPassword(email.value, password.value)
        .then(async (userCredentials) => {
          const user = userCredentials.user;
          console.log(user.email);
          db.ref('users/' + user.uid).set({
            username: name.value,
            email: email.value,
            phone_number : phone.value,
          }).catch((error) => {alert(error.message)
            console.log(error.message,error)
          });;
          try {
            await AsyncStorage.setItem('userUid', user.uid)
          } catch (err) {
            console.log(err)
          }
          ToastAndroid.show("User Created!", ToastAndroid.SHORT);
          navigation.reset({
            index: 0,
            routes: [{ name: "StartScreen" }],
          });
        })
        .catch((error) => {alert(error.message)
          console.log(error.message,error)
        });
        
    }
  };

  // function writeUserData(userId, name, email, imageUrl) {
  //   set(ref(db, "users/" + userId), {
  //     username: name,
  //     email: email,
  //     profile_picture: imageUrl,
  //   });
  // }

  // const handleSignup = () => {
  //   auth
  //     .createUserWithEmailAndPassword(email.value, password.value)
  //     .then((userCredentials) => {
  //       const user = userCredentials.user;
  //       console.log(user.email);
  //     })
  //     .catch((error) => alert(error.message));
  // };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: "" })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="next"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <TextInput
        label="Phone Number"
        returnKeyType="done"
        value={phone.value}
        onChangeText={(text) => setPhone({ value: text, error: "" })}
        error={!!phone.error}
        errorText={phone.error}
        textContentType="number"
        keyboardType="phone-pad"
       
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace("LoginScreen")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});
