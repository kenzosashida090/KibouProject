import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Text,
} from "@ui-kitten/components";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import * as eva from "@eva-design/eva";
import Welcome from "./screens/Welcome";
import { default as theme } from "./constants/theme.json";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";

const { Navigator, Screen } = createStackNavigator();
function App() {
  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="Welcome" component={Welcome} />
          <Screen name="Login" component={Login} />
        </Navigator>
      </NavigationContainer>
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
