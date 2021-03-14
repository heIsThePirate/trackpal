import React from "react";
import { StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const ResolveAuthScreen = () => {
  const { tryLocalSignIn } = React.useContext(AuthContext);

  React.useEffect(() => {
    tryLocalSignIn();
  }, []);

  return null;
};

export default ResolveAuthScreen;

const styles = StyleSheet.create({});
