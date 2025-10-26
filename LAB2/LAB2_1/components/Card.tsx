{/* LAB1_1 - Bùi Anh Khôi_23520759 */}
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { AppColor } from "@/styles/Color";
import {s, vs, ms} from "react-native-size-matters";
import AppText from "./AppText";
import AppDisplayStat from "./AppDisplayBar";
import AppActionBut from "./AppActionBar";
import AppCardHeader from "./AppCardHeader";


export type CardProps = {
  name: string;
  perpic: ImageSourcePropType; 
  text: string;
  pic: ImageSourcePropType;   
  like: number;
  com: number;
  share: number;
};

const Card = ({
  name,
  perpic,
  text,
  pic,
  like,
  com,
  share,
}: CardProps) => {

    const [Count, setCount] =  useState(like)
    const [status, setStatus] = useState(false)
    const [CountCom, setCountCom] = useState(com)
    const [CountShare, setCountShare] = useState(share)

    const OnLike = () => {
        if (status === false) {
            setCount((prev) => (prev+1));
            setStatus(true);
        } else if (status === true){
            setCount((prev) => (prev-1));
            setStatus(false);
        }
    }

    const OnCom = () =>{
        setCountCom((prev) => (prev + 1))
    }

    
    const OnShare = () =>{
        setCountShare((prev) => (prev + 1))
    }



  return (
    <View style={styles.container}>

      {/* Avatar và tên người dùng */}
      <AppCardHeader pic={perpic}  name = {name}/>

      {/* Nội dung người dùng đăng */}
      <AppText variant = "medium" style={styles.text}>{text}</AppText>

      {/* Ảnh người dùng đăng */}
      <Image source={pic} style={styles.mainImage} resizeMode="cover" />

      {/* Hiển thị số lượng like, comment, share của bài đăng */}
      <AppDisplayStat Count = {Count} CountCom = {CountCom} CountShare={CountShare}/>

      {/* Các nút bấm like, comment, share */}
      <AppActionBut OnLike={OnLike} OnCom={OnCom} OnShare={OnShare} styleLike={{color: status? '#00C0FF' : 'black'}}/>
    </View>
  );
};
export default Card;


const styles = StyleSheet.create
({
  container: {
    width: "100%",
    borderRadius: 12,
    backgroundColor: AppColor.bgColor,
    padding: 20,
    gap: 12,
    elevation: 2,
    marginTop: 12,
    borderColor: AppColor.borderColor,
    borderWidth: 1.5,
  },

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
  text: {
    fontSize: ms(14),
    color: AppColor.primary_text,
    lineHeight: 20,
    fontWeight: '500'
  },

  mainImage: {
    width: "100%",
    aspectRatio: 16 / 9,
    borderRadius: 5,
    overflow: "hidden",
    height: 190,
  },
});
