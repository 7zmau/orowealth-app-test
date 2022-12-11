import { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import DealCard from "../components/DealCard";

export default function Deal({ route, navigation }) {
  const { deals, title } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: "Deals - " + title,
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={deals}
        keyExtractor={(item) => item.dealId}
        renderItem={({ item }) => (
          <DealCard deal={item} navigation={navigation} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fafafa",
    justifyContent: "center",
  },
});
