import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  cardContainer: {
    width: "98%",
    height: 20,
    alignSelf: "center",
  },
  card: {
    alignSelf: "center",
    width: "98%",
    height: 40,
    backgroundColor: "#f2f2f2",
    borderRadius: 7,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  text: {
    alignSelf: "center",
    fontSize: 20,
    marginTop: 5,
    color: "white",
    fontWeight: "200",
  },
});

export default styles;
