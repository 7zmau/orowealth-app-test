import React from "react";
import { Text, View, Pressable, Image, StyleSheet } from "react-native";
// Card common styling
import stylesCard, { backgroundColor } from "./common/Card.style";
// Product Card styles
const styles = StyleSheet.create({
  cardSub: {
    fontSize: 13.0,
    fontStyle: "normal",
    fontWeight: "200",
    lineHeight: 15.0,
  },
  section0: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    paddingBottom: 20.0,
  },
  section1: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10.0,
    justifyContent: "space-evenly",
  },
  section01: {
    flexDirection: "column",
    marginLeft: 15.0,
    flex: 1,
  },
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

const ProductCard = ({ navigation, product }) => {
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

  return (
    <Pressable
      onPress={() => {
        if ("deals" in product)
          navigation.navigate("Deals", {
            deals: product.deals,
            title: product.name,
          });
      }}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#fafafa" : backgroundColor,
        },
        stylesCard.root,
      ]}
    >
      {/* Card's top section */}
      <View style={styles.section0}>
        <Image
          style={{ width: 45, height: 45, alignSelf: "center" }}
          source={{
            uri: product.bannerIconUrl,
          }}
        />
        <View style={styles.section01}>
          <Text style={[stylesCard.cardTitle, { marginBottom: 10.0 }]}>
            {product.name}
          </Text>
          <Text style={styles.cardSub}>{product.subtext}</Text>
        </View>
      </View>
      {/* Horizontal rule */}
      <View
        style={{
          borderBottomColor: "#e0e0e0",
          borderRadius: 9,
          borderBottomWidth: StyleSheet.hairlineWidth,
          alignSelf: "stretch",
        }}
      />
      {/* Bottom section */}
      <View style={styles.section1}>
        <Metric
          metricSymbol={product.metric1Symbol}
          metric={product.metric1}
          metricSubtext={product.metric1Subtext}
        />
        <Metric
          metricSymbol={product.metric2Symbol}
          metric={product.metric2}
          metricSubtext={product.metric2Subtext}
        />
      </View>
    </Pressable>
  );
};

export default ProductCard;
