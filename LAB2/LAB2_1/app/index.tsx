import { StyleSheet, ScrollView } from "react-native";
import Banner from "@/components/Banner";
import { DATA } from "../Data/Data";
import Card from "@/components/Card";
import AppSafeView from "@/components/AppSafeView";

export default function Index() {

  return (
    <AppSafeView style={styles.container}>
      <Banner />
      <ScrollView showsVerticalScrollIndicator={false}>
        {DATA.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            perpic={item.perpic}
            text={item.text}
            pic={item.pic}
            like={item.like}
            com={item.review}
            share={item.share}
          />
        ))}
      </ScrollView>
    </AppSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
