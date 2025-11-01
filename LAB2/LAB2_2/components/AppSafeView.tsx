import { StyleSheet, Text, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useAppTheme } from "@/zustand/useAppTheme";

interface AppSafeView {
  children?: ReactNode;
  style?: ViewStyle;
}

const AppSafeView = ({ children, style }: AppSafeView) => {
  const theme = useAppTheme();
  return (
    <SafeAreaProvider>
      <SafeAreaView  style={styles.appSafeArea}>
        <View
          style={[style, styles.appView, { backgroundColor: theme.bgColor }]}
        >
          {children}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default AppSafeView;

const styles = StyleSheet.create({
  appSafeArea: {
    flex: 1,
  },

  appView: {
    flex: 1,
  },
});
