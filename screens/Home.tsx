import React, { FC, useState } from "react";

import { SafeAreaView, StyleSheet, View } from "react-native";

import {
  Text,
  BottomNavigation,
  BottomNavigationTab,
  Icon,
  IconElement,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import { theme } from "../constants/theme";

interface HomeProps {}

const PersonIcon = (props: any): IconElement => (
  <Icon {...props} name="person-outline" />
);

const BellIcon = (props: any): IconElement => (
  <Icon {...props} name="bell-outline" />
);

const EmailIcon = (props: any): IconElement => (
  <Icon {...props} name="email-outline" />
);
const MenuIcon = (props: any): IconElement => (
  <Icon {...props} name="more-vertical" />
);

const InfoIcon = (props: any): IconElement => <Icon {...props} name="info" />;

const LogoutIcon = (props: any): IconElement => (
  <Icon {...props} name="log-out" />
);

const Home: FC<HomeProps> = ({}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = (): void => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = (): React.ReactElement => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  return (
    <>
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        onBackdropPress={toggleMenu}
      >
        <MenuItem accessoryRight={InfoIcon} title="About" />
        <MenuItem accessoryRight={LogoutIcon} title="Logout" />
      </OverflowMenu>
      <View style={styles.container}>
        <Text category="h2">HOME</Text>
      </View>

      <BottomNavigation
        selectedIndex={selectedIndex}
        onSelect={(index) => setSelectedIndex(index)}
      >
        <BottomNavigationTab icon={PersonIcon} title="USERS" />
        <BottomNavigationTab icon={BellIcon} title="NOTIFICATIONS" />

        <BottomNavigationTab icon={EmailIcon} title={"Transaction"} />
      </BottomNavigation>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme["color-primary-300"],
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    marginHorizontal: 16,
  },
});
export default Home;
