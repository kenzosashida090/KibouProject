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
function App() {
  return (
    <View style={styles.container}>
      <Welcome />
      <StatusBar style="auto" />
    </View>
  );
}
export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
      <App />
    </ApplicationProvider>
  </>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme["color-primary-700"],
    alignItems: "center",
    justifyContent: "center",
  },
});
