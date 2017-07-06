const React = require("react-native");

const { StyleSheet, Dimensions, Platform } = React;

const deviceHeight = Dimensions.get("window").height;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: deviceHeight / 8,
    marginBottom: 150
  },
  logo: {
    position: "absolute",
    left: Platform.OS === "android" ? 105 : 115,
    top: Platform.OS === "android" ? 35 : 60,
    width: 150,
    height: 150,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 3,
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  },

};
