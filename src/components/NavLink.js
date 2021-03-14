import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { withNavigation } from "react-navigation";
import Spacer from "./Spacer";

const NavLink = ({ navigation, route, navText }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate(route)}>
        <Spacer>
          <Text style={styles.link}>{navText}</Text>
        </Spacer>
      </TouchableOpacity>
    </>
  );
};

export default withNavigation(NavLink);

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});
