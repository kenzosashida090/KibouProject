import React, { FC } from "react";

import { Pressable, StyleSheet } from "react-native";
import {
  ApplicationProvider,
  Button,
  Layout,
  Text,
  Icon,
} from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";
import { default as theme } from "../constants/theme.json";

interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = ({}) => {
  const GitIcon = (props: any) => <Icon {...props} name="github" />;
  const GmailIcon = (props: any) => <Icon {...props} name="google" />;
  return (
    <Layout style={styles.container}>
      <Text category="h1">Bienvenido</Text>
      <Text category="s1">Para continuar registrate o inicia sesion!!</Text>
      <Layout style={styles.buttonContainer}>
        <Layout style={styles.button}>
          <Button style={styles.buttonStyle}>Login</Button>
        </Layout>
        <Layout style={styles.button}>
          <Button style={styles.buttonStyle}>Sign Up</Button>
        </Layout>
      </Layout>
      <Layout style={styles.iconsContainer}>
        <Button style={styles.buttonStyle} accessoryLeft={GitIcon}></Button>
        <Button style={styles.buttonStyle} accessoryLeft={GmailIcon}></Button>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: theme["color-primary-100"],
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: theme["color-primary-100"],
    flexDirection: "row",
    marginHorizontal: 3,
    alignItems: "center",

    marginVertical: 25,
  },
  button: {
    backgroundColor: theme["color-primary-100"],
    marginTop: 10,
    marginHorizontal: 10,
    flex: 1,
  },
  buttonStyle: {
    borderRadius: 28,
    marginHorizontal: 6,
  },
  stl: {
    opacity: 0.75,
    backgroundColor: "blue",
  },
  iconsContainer: {
    backgroundColor: theme["color-primary-100"],
    flexDirection: "row",
    marginHorizontal: 5,
  },
});
export default Welcome;
