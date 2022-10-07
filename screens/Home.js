import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import React from "react";
import Title from "../components/title";
import Customer from "../images/Customer.png";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.imageContainer}>
        <Image source={Customer} style={styles.image} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Quiz")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingVertical: 20,
    height: "100%",
    backgroundColor: "pink",
  },
  image: {
    height: 300,
    width: 300,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  button: {
    width: "100%",
    backgroundColor: "#0077b6",
    padding: 20,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    fontWeight: "600",
  },
});
