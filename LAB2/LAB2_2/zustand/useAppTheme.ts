import { useThemeStore } from "./useThemeStore";
import { AppLightColor, AppDarkColor } from "@/styles/color";

export type AppTheme = typeof AppLightColor; // hoặc union Light/Dark

export function useAppTheme(): AppTheme {
  const isDark = useThemeStore(s => s.isDark);
  return isDark ? AppDarkColor : AppLightColor;
}