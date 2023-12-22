import {
  Button,
  Icon,
  IconElement,
  Input,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import React, { FC, useState } from "react";

import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { reducer } from "../store/reducres";
import { useAtom } from "jotai";
import { signUpUser } from "../auth/signup";
import { theme } from "../constants/theme";

interface SignupProps {
  navigation: any;
}
const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;

const Signup: FC<SignupProps> = ({ navigation }) => {
  const navigateBack = () => {
    navigation.goBack();
  };
  const navigateHome = () => {
    navigation.navigate("Home");
  };
  const EmailIcon = (props: any) => (
    <Icon {...props} fill="#fff" name="email" />
  );
  const UserIcon = (props: any) => (
    <Icon {...props} fill="#fff" name="person" />
  );
  const LockIcon = (props: any) => <Icon {...props} fill="#fff" name="lock" />;
  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [confirmEmail, setConfirmEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isequal, setisEqual] = useState<boolean>(true);
  const [isEqualPass, setEqualPass] = useState<boolean>(true);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureTextEntryConfirm, setSecureTextEntryConfirm] = useState(true);
  const toggleSecureEntry = (): void => {
    setSecureTextEntry(!secureTextEntry);
  };
  const toggleSecureEntryConfirm = (): void => {
    setSecureTextEntryConfirm(!secureTextEntryConfirm);
  };
  const CaptionMessage = (text: string): React.ReactElement => (
    <View style={styles.captionContainer}>
      <Text status="danger" style={styles.captionText}>
        {text}
      </Text>
    </View>
  );

  const renderIcon = (props: any): React.ReactElement => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );
  const renderIconConfitm = (props: any): React.ReactElement => (
    <TouchableWithoutFeedback onPress={toggleSecureEntryConfirm}>
      <Icon {...props} name={secureTextEntryConfirm ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );
  const submitRegister = () => {
    if (email !== confirmEmail) {
      setisEqual(false);
      console.log("es falso");
    } else if (password !== confirmPassword) {
      setEqualPass(false);
    } else if (!email.includes("@")) {
      setisEqual(false);
    } else {
      setEqualPass(true);
      setisEqual(true);
      setEmail("");
      setConfirmEmail("");
      setName("");
      setConfirmPassword("");
      setPassword("");
      signUpUser(email, password, name);
      navigateHome();
    }
  };
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
              accessoryLeft={UserIcon}
              placeholder={"Nombre Completo"}
              value={name}
              style={styles.inputStyle}
              onChangeText={(nextValue) => setName(nextValue)}
            />
            <Input
              value={email}
              accessoryLeft={EmailIcon}
              placeholder="Email"
              placeholderTextColor={"white"}
              style={styles.inputStyle}
              textStyle={{ color: "white" }}
              onChangeText={(nextValue) => setEmail(nextValue)}
            />
            <Input
              value={confirmEmail}
              accessoryLeft={EmailIcon}
              placeholder="Confirm Email"
              placeholderTextColor={"white"}
              style={styles.inputStyle}
              textStyle={{ color: "white" }}
              onChangeText={(nextValue) => setConfirmEmail(nextValue)}
              caption={
                isequal
                  ? ""
                  : CaptionMessage("Verifica que el correo sea valido.")
              }
            />
            <Input
              accessoryLeft={LockIcon}
              value={password}
              placeholder="Password"
              placeholderTextColor={"white"}
              style={styles.inputStyle}
              textStyle={{ color: "white" }}
              secureTextEntry={secureTextEntry}
              accessoryRight={renderIcon}
              onChangeText={(nextValue) => setPassword(nextValue)}
            />
            <Input
              accessoryLeft={LockIcon}
              placeholder="Confirm Password"
              placeholderTextColor={"white"}
              style={styles.inputStyle}
              textStyle={{ color: "white" }}
              value={confirmPassword}
              accessoryRight={renderIconConfitm}
              secureTextEntry={secureTextEntryConfirm}
              caption={
                isEqualPass
                  ? ""
                  : CaptionMessage("Los contraseña debe ser la misma.")
              }
              onChangeText={(nextValue) => setConfirmPassword(nextValue)}
            />
            <Button onPress={submitRegister} style={styles.buttonStyle}>
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

  captionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: "400",
  },
});
export default Signup;
