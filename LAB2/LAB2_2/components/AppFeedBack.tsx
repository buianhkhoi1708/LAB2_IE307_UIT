import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import React from "react";
import AppText from "./AppText";
import { useAppTheme } from "@/zustand/useAppTheme";

interface AppFeedBack {
  onPress: () => void;
  onChangeText: (value: string) => void;
  text: string;
}

const AppFeedBack = ({ onPress, onChangeText, text }: AppFeedBack) => {
  const theme = useAppTheme();
  return (
    <View style={styles.container}>
      <AppText
        variant="medium"
        style={[{ color: theme.primary_text }, styles.text]}
      >
        Feedback
      </AppText>
      <TextInput
        editable
        multiline
        numberOfLines={5}
        maxLength={200}
        onChangeText={onChangeText}
        value={text}
        style={[
          styles.text_input,
          { borderColor: theme.primary_text, color: theme.primary_text },
        ]}
        keyboardType={"default"}
        placeholder="Your feedback here.."
        disableKeyboardShortcuts={true}
      />
      <Button
        title="Send Feedback"
        color={theme.buttonColor}
        onPress={onPress}
      />
    </View>
  );
};

export default AppFeedBack;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  text_input: {
    height: 100,
    padding: 5,
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    alignItems: "center",
  },
  text: {
    fontSize: 26,
  },
});
