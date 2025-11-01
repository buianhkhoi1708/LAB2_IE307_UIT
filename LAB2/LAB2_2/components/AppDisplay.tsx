import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import AppText from "./AppText";

interface AppDisplayProps {
  feedback: string[];
}

const AppDisplay = ({ feedback }: AppDisplayProps) => {
  const Item = ({ title }: { title: string }) => (
    <View>
      <AppText variant="medium">Q: {title}</AppText>
    </View>
  );

  return (
    <View style={styles.container}>
      <AppText variant="bold">Frequently Asked Questions</AppText>

      <FlatList
        data={feedback}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={true}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default AppDisplay;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },

  list: {
    maxHeight: 300,
  },
});
