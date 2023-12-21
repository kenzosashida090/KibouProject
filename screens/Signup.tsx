import {
  Button,
  Icon,
  Input,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import React, { FC, useState } from "react";
import { default as theme } from "../constants/theme.json";
import { StyleSheet, View } from "react-native";
interface SignupProps {
  navigation: any;
}
const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;

const Signup: FC<SignupProps> = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };
  const EmailIcon = (props: any) => (
    <Icon {...props} fill="#fff" name="email" />
  );
  const LockIcon = (props: any) => <Icon {...props} fill="#fff" name="lock" />;
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  return (
    <>
      <TopNavigation
        style={{
          backgroundColor: theme["color-primary-300"],
          paddingTop: 30,
        }}
        accessoryLeft={BackAction}
      />

      <Layout style={styles.container2}>
        <Text category="h1">SIGN UP</Text>
        <Layout style={styles.container}>
          <Layout style={styles.inputContainer}>
            <Input
              accessoryLeft={EmailIcon}
              placeholder="Email"
              placeholderTextColor={"white"}
              style={styles.inputStyle}
              textStyle={{ color: "white" }}
            />
            <Input
              accessoryLeft={EmailIcon}
              placeholder="Confirm Email"
              placeholderTextColor={"white"}
              style={styles.inputStyle}
              textStyle={{ color: "white" }}
            />
            <Input
              accessoryLeft={LockIcon}
              placeholder="Password"
              placeholderTextColor={"white"}
              style={styles.inputStyle}
              textStyle={{ color: "white" }}
            />
            <Input
              accessoryLeft={LockIcon}
              placeholder="Confirm Password"
              placeholderTextColor={"white"}
              style={styles.inputStyle}
              textStyle={{ color: "white" }}
            />
            <Button
              onPress={() => console.log("registrarse")}
              style={styles.buttonStyle}
            >
              SUBMIT
            </Button>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: theme["color-primary-300"],
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  container2: {
    flex: 1,
    backgroundColor: theme["color-primary-300"],
    alignItems: "center",
    justifyContent: "center",
  },

  inputContainer: {
    flex: 1,

    marginHorizontal: 20,
    backgroundColor: theme["color-primary-300"],
  },
  inputStyle: {
    marginVertical: 6,
    borderRadius: 50,
    color: "#fff",
    textAlign: "center",
  },
  iconColor: {
    color: "white",
  },
  buttonStyle: {
    borderRadius: 20,
    marginVertical: 10,
  },
  errorContainer: {
    borderRadius: 10,
  },
  errorButton: {
    borderRadius: 20,
    marginVertical: 10,
    color: "#fff",
  },

  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
export default Signup;
