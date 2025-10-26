import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AppColor } from "@/styles/Color";

export type AppSafeViewProps = {
  children?: ReactNode;
  style?: ViewStyle;
};

const AppSafeView = ({ children, style }: AppSafeViewProps) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={[styles.childrenView, style]}>{children}</View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AppSafeView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColor.bgColor,
  },

  childrenView: {
    flex: 1,
  },
});
