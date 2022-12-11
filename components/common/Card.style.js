import { StyleSheet } from "react-native";

const stylesCard = StyleSheet.create({
  root: {
    // Layout props
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "stretch",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    padding: 15,
    borderRadius: 8,
    // Shadow: iOS only
    shadowOffset: {
      width: 6.0,
      height: 9.0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 11.0,
    // Shadow: android
    elevation: 10,
  },
  cardTitle: {
    fontSize: 18.0,
    fontWeight: "700",
  },
});

export const backgroundColor = "#fff";

export default stylesCard;
