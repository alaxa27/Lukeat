const React = require("react-native");

const { StyleSheet } = React;

export default {
  container: {
    flex: 1,
    //backgroundColor: '#349ce2', // light blue
  },
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  view: {
    flex: 1,
    marginHorizontal: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  input: {
    height: 50,
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 15,
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: 'white',
    paddingVertical: 15,
    marginTop: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: "#6FAF98",
    fontWeight: 'bold',
    fontSize: 16,
  },
};
