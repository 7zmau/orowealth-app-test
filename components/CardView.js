import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

const CardView = (props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={() => {}}></Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    width: "80%", // TODO: needs change
    height: "30%", // TODO: needs change
    backgroundColor: "#fff",
    shadowOffset: {
      width: 6.0,
      height: 9.0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10.0,
  },
  text: {
    fontSize: 16,
  },
  pressable: {
    width: "100%",
    height: "100%",
  },
});

export default CardView;
