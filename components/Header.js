import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Color from "../constants/color";

const Header = (props) => {
  return (
    <View style={styles.header}>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Color.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
  },
});
