import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import AppText from './AppText';
import { AppColor } from '@/styles/Color';
import {ms} from "react-native-size-matters"

interface AppDisplay {
    num: number;
    text: string;
}

const AppDisplay = ({num, text} : AppDisplay) => {
  return (
        <View style={styles.statItem}>
              <AppText style={styles.statNum}>{num}</AppText>
              <AppText style={styles.statLabel}>{text}</AppText>
        </View>
  )
}

export default AppDisplay

const styles = StyleSheet.create({
    statItem: {
        flex: 1,
        flexDirection: 'row',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      statNum: {
        fontSize: ms(12),
         color: AppColor.secondary_text,
      },
    
      statLabel: {
        fontSize: ms(12),
        color: AppColor.secondary_text,
      },
})