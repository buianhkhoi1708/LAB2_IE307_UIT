import { ComponentProps, ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppFonts } from "@/styles/fonts";
import { useAppTheme } from "@/zustand/useAppTheme";

type AppTextVariant = "bold" | "medium" | "light";

interface AppTextProps {
  children: ReactNode;
  style?: TextStyle | TextStyle[];
  variant?: AppTextVariant;
}

const AppText = ({ children, style, variant, ...rest }: AppTextProps) => {
  const theme = useAppTheme();
  return (
    <Text style={[styles[variant], style, { color: theme.primary_text }]}>
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  bold: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: AppFonts.RobotoBold,
  },
  medium: {
    fontSize: 18,
    fontFamily: AppFonts.RobotoMedium,
  },
  light: {
    fontSize: 16,
    fontFamily: AppFonts.RobotoLight,
  },
});
