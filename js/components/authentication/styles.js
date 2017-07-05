const React = require("react-native");

const { StyleSheet } = React;

export default {
  container: {
    flex: 1,
    backgroundColor: '#349ce2', // light blue
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
  },
  buttonContainer: {
    backgroundColor: 'white',
    paddingVertical: 15,
    marginTop: 30,
  },
  buttonText: {
    textAlign: 'center',
    color: '#349ce2',
    fontWeight: '900',
  },
};
