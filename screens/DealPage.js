import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default function DealPage({ route, navigation }) {
  const { dealUrl, title } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, []);

  return <WebView style={styles.container} source={{ uri: dealUrl }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fafafa",
    justifyContent: "center",
  },
});
