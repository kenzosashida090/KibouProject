import React, { FC } from "react";

import { Pressable, StyleSheet } from "react-native";
import {
  ApplicationProvider,
  Button,
  Layout,
  Text,
  Icon,
  Divider,
} from "@ui-kitten/components";
import { default as theme } from "../constants/theme.json";

type WelcomeProps = {
  navigation: any;
};

const Welcome: FC<WelcomeProps> = ({ navigation }) => {
  const navigationLogin = () => {
    navigation.navigate("Login");
  };
  const navigationSignup = () => {
    navigation.navigate("Signup");
  };
  const GithubIcon = (props: any) => <Icon {...props} name="github" />;
  const GmailIcon = (props: any) => <Icon {...props} name="google" />;
  const TwitterIcon = (props: any) => <Icon {...props} name="twitter" />;
  return (
    <Layout style={styles.container}>
      <Text category="h1">Bienvenido</Text>
      <Text category="s1">Para continuar registrate o inicia sesion!!</Text>
      <Layout style={styles.buttonContainer}>
        <Layout style={styles.button}>
          <Button onPress={navigationLogin} style={styles.buttonStyle}>
            Login
          </Button>
        </Layout>
        <Layout style={styles.button}>
          <Button onPress={navigationSignup} style={styles.buttonStyle}>
            Sign Up
          </Button>
        </Layout>
      </Layout>
      <Divider style={{ alignContent: "center", backgroundColor: "#fff" }} />
      <Text category="s1">Iniciar sesion con:</Text>

      <Layout style={styles.iconsContainer}>
        <Button style={styles.buttonLogin} accessoryLeft={GithubIcon} />
        <Button style={styles.buttonLogin} accessoryLeft={GmailIcon} />
        <Button style={styles.buttonLogin} accessoryLeft={TwitterIcon} />
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme["color-primary-300"],
  },
  buttonContainer: {
    flexDirection: "row",
    marginHorizontal: 3,
    alignItems: "center",
    backgroundColor: theme["color-primary-300"],
    marginVertical: 25,
  },
  button: {
    backgroundColor: theme["color-primary-300"],
    marginTop: 10,
    marginHorizontal: 10,
    flex: 1,
  },
  buttonStyle: {
    borderRadius: 28,
    marginHorizontal: 1,
  },
  stl: {
    opacity: 0.75,
    backgroundColor: "blue",
  },
  iconsContainer: {
    backgroundColor: theme["color-primary-300"],
    flexDirection: "row",
    marginHorizontal: 5,
    marginVertical: 10,
  },
  buttonLogin: {
    marginVertical: 8,
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 8,
  },
});
export default Welcome;
