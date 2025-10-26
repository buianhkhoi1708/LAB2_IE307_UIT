import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AppColor } from "@/styles/Color";
import { ms} from "react-native-size-matters"

const Banner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Social Media Feed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    backgroundColor: AppColor.primary,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: ms(30),
    fontWeight: "bold",
    color: "white",
  },
});

export default Banner;
