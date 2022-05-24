import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import {auth} from "../../firebase";

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() => {
          auth.signOut()
          .then(() => {
            navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
          })
          .catch((error) => alert(error.message));
          
        }}
      >
        Logout
      </Button>
    </Background>
  )
}
