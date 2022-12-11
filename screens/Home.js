import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ActivityIndicator,
  FlatList,
} from "react-native";
import ProductCard from "../components/ProductCard";

export default function Home({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  // Fetch products data from json file
  // and set the data to `data`
  const getProducts = () => {
    try {
      const localData = require("../api.json");
      setData(localData.data);
    } catch (e) {
      // Catch error in case file doesn't exist or isn't valid JSON
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.bannerId}
          renderItem={({ item }) => (
            <ProductCard product={item} navigation={navigation} />
          )}
        />
      )}
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
