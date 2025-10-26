import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { ReactNode } from 'react';
import AppText from './AppText';
import { ms } from "react-native-size-matters";
type IconType = "AntDesign" | "FontAwesome"

interface AppButton {
  icon: {
        name: string;
        type: IconType;
  };
  iconImage: ReactNode;
  text: string;
  style?: stylelike | stylelike[];
  Handle: () => void;
}

const AppButton = ({ iconImage, text, style, Handle }: AppButton) => {
  return (
    <Pressable
      onPress={Handle}
      style={styles.actionBtn}
      hitSlop={8}
    >
      {iconImage}
      <AppText variant="bold" style={[styles.actionText, style]}>{text}</AppText>
    </Pressable>
  )
}

export default AppButton

const styles = StyleSheet.create({
  actionBtn: {
    flex: 1,
    alignItems: "center",
    gap: 6,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 6,
  },

  actionText: {
    fontSize: ms(14),
  },
})