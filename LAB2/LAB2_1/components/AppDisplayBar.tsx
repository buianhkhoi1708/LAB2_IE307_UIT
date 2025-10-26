import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import AppText from './AppText';
import { AppColor } from '@/styles/Color';
import {ms} from "react-native-size-matters"
import AppDisplay from './AppDisplay';

interface AppDisplayStat {
    Count: number;
    CountCom: number;
    CountShare: number;
}

const AppDisplayStat = ({Count, CountCom, CountShare}) => {
  return (
      <View style={styles.statsRow}>
        <AppDisplay num = {Count} text = "Likes"/>
        <AppDisplay num = {CountCom} text = "Comments"/>
        <AppDisplay num = {CountShare} text = "Shares"/>
      </View>
  )
}

export default AppDisplayStat

const styles = StyleSheet.create({

      statsRow: {
        paddingLeft: 4,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        gap:60,
      },
})