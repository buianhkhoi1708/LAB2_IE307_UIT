import { ComponentProps, ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { AppColor } from '@/styles/Color';
import { AppFonts } from '@/styles/Font';
import {s} from 'react-native-size-matters'

type AppTextVariant = 'bold' | 'medium' | 'light';

interface AppTextProps {
  children: ReactNode;
  style?: TextStyle | TextStyle[];
  variant?: AppTextVariant;
}


const AppText = ({children, style, variant, ...rest} : AppTextProps) => {
  return (
      <Text style = {[styles[variant], style]}>{children}</Text>
  )
}

export default AppText

const styles = StyleSheet.create({
  	bold: {
		fontSize: s(20),
		fontWeight: "bold",
		color: AppColor.primary_text,
		fontFamily: AppFonts.RobotoBold,
	},
	medium: {
		fontSize: s(18),
		color: AppColor.primary_text,
		fontFamily: AppFonts.RobotoMedium,
	},
	light: {
		fontSize: s(16),
		color: AppColor.primary_text,
		fontFamily: AppFonts.RobotoLight,
	},
})