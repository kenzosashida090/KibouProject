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
import { legacy_createStore as createStore } from "redux";
import { StyleSheet } from "react-native";
import { signIn } from "../auth/singin";
import ErrorCard from "../components/ErrorCard";
import { theme } from "../constants/theme";
import { useAtom } from "jotai";
import { atomWithStore } from "jotai-redux";

interface LoginProps {
  navigation: any;
}
type tForm = {
  email: string;
  password: string;
};
type TInitialState = { token: string };
const initialState: TInitialState = { token: "" };

type TActionType = {
  type: "login" | "";
  payload: any;
};

const reducer = (state = initialState, action: TActionType) => {
  switch (action.type) {
    case "login":
      return { ...state, token: action.payload };
    default:
      return state;
  }
};
const store = createStore<TInitialState, TActionType, {}, {}>(reducer);
const storeAtom = atomWithStore(store);

const Login: FC<LoginProps> = ({ navigation }) => {
  const [state, dispatch] = useAtom(storeAtom);
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
  const onSubmit = async () => {
    if (password === "" || email === "") {
      setDisabled(true);
    }
    setSubmit({ email, password });
    navigation.navigate("Home");

    const data = await signIn(email, password);
    // console.log(data?.session?.access_token);
    dispatch({ type: "login", payload: data?.session?.access_token });
    console.log("estadooo", state);
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
          <ErrorCard
            setDisabled={setDisabled}
            disabled={disabled}
            message="Error Verifique que los datos sean correctos."
          />
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
