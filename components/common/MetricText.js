import { View, Text, StyleSheet } from "react-native";

const Metric = (props) => {
  return (
    <View style={styles.section11}>
      <Text style={styles.symText}>{props.metricSymbol}</Text>
      <View style={styles.sectionT}>
        <Text style={styles.stext3}>{props.metric}</Text>
        <Text style={styles.stext4}>{props.metricSubtext}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section11: {
    flex: 0.41,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  symText: {
    color: "green",
    alignSelf: "flex-start",
    fontSize: 16.0,
    fontWeight: "500",
    paddingTop: 8.0,
    paddingRight: 8.0,
    textAlign: "right",
  },
  sectionT: {
    flexDirection: "column",
    flex: 1.0,
  },
  stext3: {
    fontWeight: "600",
    fontSize: 16.0,
  },
  stext4: {
    fontWeight: "200",
  },
});

export default Metric;
