import AppFunction from "@/components/AppFunction";
import AppLogo from "@/components/AppLogo";
import AppSafeView from "@/components/AppSafeView";
import { Keyboard, Text, View } from "react-native";
import { useThemeStore } from "@/zustand/useThemeStore";
import { useAppTheme } from "@/zustand/useAppTheme";
import AppFeedBack from "@/components/AppFeedBack";
import { useState } from "react";
import { Alert } from "react-native";
import AppDisplay from "@/components/AppDisplay";

export default function Index() {
  const isDark = useThemeStore((state) => state.isDark);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const theme = useAppTheme();

  const [text, onChangeText] = useState("");
  const [feedback, SendFeedBack] = useState<string[]>([]);
  const [notification, setNotification] = useState(false);

  const notify = () =>
    Alert.alert("Thank for your feedback!", "", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const HandleSubmit = () => {
    if (text == "") {
      Keyboard.dismiss();
      return;
    }
    if (notification) 
      notify();
    SendFeedBack((prev) => [...prev, text]);
    onChangeText("");
    Keyboard.dismiss();
  };

  return (
    <AppSafeView>
      <AppLogo />
      <AppFunction FunctName="Darkmode" onToggle={toggleTheme} value={isDark} />
      <AppFunction
        FunctName="Notifications"
        onToggle={setNotification}
        value={notification}
      />
      <AppFeedBack
        onPress={HandleSubmit}
        onChangeText={onChangeText}
        text={text}
      />
      <AppDisplay feedback={feedback} />
    </AppSafeView>
  );
}
