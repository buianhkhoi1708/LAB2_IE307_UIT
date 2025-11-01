import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppText from "./AppText";
import { useAppTheme } from "@/zustand/useAppTheme";

const AppLogo = () => {
  const theme = useAppTheme();
  return (
    <View style={styles.container}>
      <View style={[styles.logo_con, { backgroundColor: theme.logoBg }]}>
        <Image source={require("../assets/images/logo.png")} />
      </View>
      <AppText variant="bold" style={styles.text}>
        React Native App
      </AppText>
    </View>
  );
};

export default AppLogo;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 14,
    marginTop: 20,
  },
  logo_con: {
    width: 120,
    height: 120,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  text: {
    fontSize: 18,
  },
});
