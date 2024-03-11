import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 20,
    justifyContent: "center",
    borderRadius: 10,
    margin: 20,
  },

  header: {
    flexDirection: "row",
  },

  social: {
    flexDirection: row,
    justifyContent: "space-evenly",
    padding: 10,
  },

  socialBtn: {
    padding: 10,
    backgroundColor: "#eee",
    borderRadius: "50%",
  }
    ? avatar
    : {
        height: 70,
        width: 70,
        borderRadius: "50%",
      },

  name: {
    fontSize: 24,
    fontWeight: bold,
    marginBottom: 5,
  },

  texts: {
    flex: 1,
    paddingLeft: 15,
  },
});
