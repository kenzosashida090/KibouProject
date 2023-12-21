import {
  Avatar,
  Button,
  Card,
  Icon,
  Input,
  Layout,
  Modal,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import React, { FC, useState } from "react";
import { default as theme } from "../constants/theme.json";
import { Alert, SafeAreaView, StyleSheet, View } from "react-native";

interface LoginProps {
  navigation: any;
}
type tForm = {
  email: string;
  password: string;
};
const Login: FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [submit, setSubmit] = useState<tForm>({ email: "", password: "" });
  const [disabled, setDisabled] = useState<boolean>(false);
  const BackIcon = (props: any) => <Icon {...props} name="arrow-back" />;
  const UserIcon = (props: any) => (
    <Icon {...props} fill="#fff" name="person" />
  );
  const LockIcon = (props: any) => <Icon {...props} fill="#fff" name="lock" />;
  const navigateBack = () => {
    navigation.goBack();
  };

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );
  const onSubmit = () => {
    if (password === "" || email === "") {
      setDisabled(true);
    }
    setSubmit({ email, password });
    console.log(submit);
  };
  return (
    <>
      <TopNavigation
        style={{
          backgroundColor: theme["color-primary-300"],
          paddingTop: 30,
        }}
        alignment="center"
        accessoryLeft={BackAction}
      />
      <Layout style={styles.container2}>
        {disabled ? (
          <Layout style={styles.errorContainer}>
            <Modal
              style={styles.errorContainer}
              visible={disabled}
              backdropStyle={styles.backdrop}
            >
              <Card
                disabled={true}
                status="warning"
                style={styles.errorContainer}
              >
                <Text category="h1">Error</Text>
                <Text category="s1">Correo o contaseña invalida</Text>
                <Button
                  status="danger"
                  style={styles.errorButton}
                  onPress={() => setDisabled(false)}
                >
                  Continuar
                </Button>
              </Card>
            </Modal>
          </Layout>
        ) : null}
        <Text category="h1">Login</Text>

        <Layout style={styles.container}>
          <Layout style={styles.inputContainer}>
            <Input
              style={styles.inputStyle}
              textStyle={{ color: "white" }}
              accessoryLeft={UserIcon}
              placeholderTextColor={"white"}
              placeholder="Usuario"
              value={email}
              onChangeText={(nextValue) => setEmail(nextValue)}
            />
            <Input
              style={styles.inputStyle}
              textStyle={{ color: "white" }}
              accessoryLeft={LockIcon}
              placeholderTextColor={"white"}
              placeholder="Contrasena"
              value={password}
              onChangeText={(nextValue) => setPassword(nextValue)}
            />
            <Button onPress={onSubmit} style={styles.buttonStyle}>
              Ingresar
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
    marginBottom: 200,
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
export default Login;
