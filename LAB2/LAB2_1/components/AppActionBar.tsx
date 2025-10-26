import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react';
import { AppColor } from '@/styles/Color';
import AppButton from './AppButton';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

interface AppActionBut {
    styleLike: LikeStyle | likeStyle[]
    OnLike: () => void;
    OnCom: () => void;
    OnShare: () => void;
}


const AppActionBut = ({OnLike, OnShare, OnCom,styleLike} : AppActionBut) => {
  return (
    <View style={styles.actionsRow}>
        <AppButton Handle={OnLike} text = "Like" style = {styleLike} iconImage={(<AntDesign name="like" size={24} color="black" style = {styleLike} />)}/>
        <AppButton Handle={OnCom} text = "Comment" iconImage={(<AntDesign name="comment" size={24} color="black" />)}/>
        <AppButton Handle={OnShare} text = "Share" iconImage={(<FontAwesome name="share" size={24} color="black" />)}/>
    </View>
  );
}

export default AppActionBut;

const styles = StyleSheet.create({
    actionsRow: {
        flexDirection: "row",
        borderTopWidth: 2,
        borderTopColor: AppColor.borderColor,
        paddingTop: 8,
        gap: 60,
        marginRight: 5,
      }, 

})