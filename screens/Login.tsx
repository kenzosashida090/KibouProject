import { Layout, Text } from "@ui-kitten/components";
import React, { FC } from "react";

import { StyleSheet, View } from "react-native";

interface LoginProps {}

const Login: FC<LoginProps> = ({}) => {
  return (
    <Layout style={styles.container}>
      <Text category="h1">Login Screen</Text>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Login;
