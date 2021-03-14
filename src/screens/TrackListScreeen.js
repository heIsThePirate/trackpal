import React from "react";
import { StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";

const TrackListScreeen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Track List Screen</Text>
      <Button
        onPress={() => navigation.navigate("TrackDetail")}
        title="Go to track detail"
      />
    </SafeAreaView>
  );
};

export default TrackListScreeen;

const styles = StyleSheet.create({});
