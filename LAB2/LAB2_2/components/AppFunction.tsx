import { StyleSheet, Switch, Text, View } from "react-native";
import React, { useState } from "react";
import AppText from "./AppText";
import { useThemeStore } from "@/zustand/useThemeStore";
import { useAppTheme } from "@/zustand/useAppTheme";

interface AppFunction {
  FunctName: string;
  onToggle: (value: boolean) => void;
  value: boolean;
}

const AppFunction = ({ FunctName, onToggle, value }: AppFunction) => {
  return (
    <View style={styles.container}>
      <AppText variant="medium" style={styles.text}>
        {FunctName}
      </AppText>
      <Switch
        trackColor={{ false: "#767577", true: "#59ea38ff" }}
        thumbColor={value ? "#ffffffff" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onToggle}
        value={value}
      />
    </View>
  );
};

export default AppFunction;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    marginBottom: 8,
  },
  text: {
    fontSize: 17,
    color: "grey",
  },
});
