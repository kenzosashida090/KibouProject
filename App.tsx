import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import * as eva from "@eva-design/eva";
import Welcome from "./screens/Welcome";

import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import { theme } from "./constants/theme";

const { Navigator, Screen } = createStackNavigator();
function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="dark" />
        <NavigationContainer>
          <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Welcome" component={Welcome} />
            <Screen name="Login" component={Login} />
            <Screen name="Signup" component={Signup} />
            <Screen name="Home" component={Home} />
          </Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}
export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
      <App />
    </ApplicationProvider>
  </>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});
