import React, { useState, useCallback } from "react";
import {
  Text,
  View,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
// Card common styling
import stylesCard, { backgroundColor } from "./common/Card.style";
// Card styles
const styles = StyleSheet.create({
  section0: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  section01: {
    flexDirection: "row",
  },
  cardImg0: {
    width: 25,
    height: 25,
    alignSelf: "center",
    marginRight: 10.0,
  },
  cardImg1: {
    width: 40,
    height: 40,
  },
  cardDesc: {
    fontSize: 14.0,
    fontWeight: "500",
    color: "#808080",
    paddingRight: 5.0,
  },
  section1: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10.0,
    justifyContent: "space-evenly",
  },
  sectionT: {
    flexDirection: "column",
    flex: 1.0,
  },
  stext3: {
    fontWeight: "600",
    fontSize: 16.0,
    textAlign: "center",
  },
  stext4: {
    fontWeight: "200",
    textAlign: "center",
  },
  button1: {
    backgroundColor: "#0c36b3",
    alignSelf: "center",
    padding: 13,
    borderRadius: 10,
    margin: 10,
    marginBottom: 5,
  },
  button1Text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
});

const DealCard = ({ navigation, deal }) => {
  const [textShown, setTextShown] = useState(false); // to Show remaining text
  const [showMore, setShowMore] = useState(false); // to display Show more button or not
  const toggleNumberOfLines = () => {
    // toggle the show text or hide it
    setTextShown(!textShown);
  };

  const onTextLayout = useCallback((e) => {
    setShowMore(e.nativeEvent.lines.length >= 2); // Check the text is more than 2 lines or not
  }, []);

  // Metric component - to show deal metrics on card
  const Metric = (props) => {
    return (
      <View style={[styles.sectionT, { flex: 0.41 }]}>
        <Text style={styles.stext3}>{props.metricName}</Text>
        <Text style={styles.stext4}>{props.metricValue}</Text>
      </View>
    );
  };

  return (
    <Pressable style={[stylesCard.root, { backgroundColor }]}>
      {/* Card header */}
      <View style={[styles.section0, { marginBottom: 15.0 }]}>
        <View style={styles.section01}>
          {deal.logoUrl && (
            <Image style={styles.cardImg0} source={{ uri: deal.logoUrl }} />
          )}
          <Text
            style={[stylesCard.cardTitle, { flex: 0.8, alignSelf: "center" }]}
          >
            {deal.name}
          </Text>
        </View>
        {deal.largeImageUrl && (
          <Image style={styles.cardImg1} source={{ uri: deal.largeImageUrl }} />
        )}
      </View>
      {/* Description text */}
      <Text
        onTextLayout={showMore ? undefined : onTextLayout}
        numberOfLines={textShown ? undefined : 2}
        style={[styles.section0, styles.cardDesc]}
      >
        {deal.desc}
      </Text>
      {/* Show more button */}
      {showMore ? (
        <TouchableOpacity
          onPress={toggleNumberOfLines}
          style={{ marginTop: 5, marginBottm: 5, alignSelf: "flex-start" }}
        >
          <Text style={{ color: "#0c36b3", fontSize: 16.0 }}>
            {textShown ? "hide" : "Show more"}
          </Text>
        </TouchableOpacity>
      ) : null}
      {/* Metric text */}
      <View style={styles.section1}>
        <Metric metricName={deal.metricName} metricValue={deal.metricValue} />
        {deal.metricName2 && (
          <View
            style={{
              borderRightColor: "#e0e0e0",
              borderRadius: 9,
              borderRightWidth: 1.5,
              alignSelf: "stretch",
            }}
          />
        )}
        {deal.metricName2 && (
          <Metric
            metricName={deal.metricName2}
            metricValue={deal.metricValue2}
          />
        )}
      </View>
      {/* Bottom button */}
      <TouchableOpacity
        style={styles.button1}
        onPress={() => {
          navigation.navigate("DealPage", {
            dealUrl: deal.dealUrl,
            title: deal.name,
          });
        }}
      >
        <Text style={styles.button1Text}>{deal.name}</Text>
      </TouchableOpacity>
    </Pressable>
  );
};

export default DealCard;
