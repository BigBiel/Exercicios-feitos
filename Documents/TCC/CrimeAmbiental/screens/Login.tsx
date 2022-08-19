import React from 'react'

import LoginScreen, { SocialButton } from "react-native-login-screen";

<LoginScreen
  logoImageSource={require("./assets/logo-example.png")}
  onLoginPress={() => {}}
  onSignupPress={() => {}}
  onEmailChange={(email: string) => {}}
  onPasswordChange={(password: string) => {}}
>
  <SocialButton text="Continue with Google" onPress={() => {}} />
  <SocialButton
    text="Continue with Facebook"
    imageSource={require("./assets/social/facebook.png")}
    onPress={() => {}}
  />
  <SocialButton
    text="Continue with Twitter"
    imageSource={require("./assets/social/twitter.png")}
    onPress={() => {}}
  />
</LoginScreen>;