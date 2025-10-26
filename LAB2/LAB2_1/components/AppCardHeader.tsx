import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native';
import React from 'react';
import {ms} from "react-native-size-matters";
import AppText from './AppText';

interface AppCardHeader {
  pic: ImageSourcePropType;
  name: string;
}

const AppCardHeader = ({pic, name} : AppCardHeader) => {
  return (
   <View style={styles.headerRow}>
        <Image source={pic} style={styles.avatar} />
        <AppText variant="bold" style = {styles.name}>{name}</AppText>
    </View>
  )
}

export default AppCardHeader

const styles = StyleSheet.create({
   headerRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
    },
  
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 60,
    },
  
    name: {
      fontSize: ms(16),
    },
})