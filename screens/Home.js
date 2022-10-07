import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { TextInput } from "react-native-paper";
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
      <Text style={styles.text}> Welcome to QUIZ APP</Text>
      <TextInput
        label="write name to continue"
        style={styles.input}
      />
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
  text: {
    fontSize: 30,
    marginBottom: 60,
    textAlign: "center",
    fontWeight: "semibold",
  },
  button: {
    width: "50%",
    alignSelf: "center",
    backgroundColor: "#0077b6",
    padding: 20,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 24,
    color: "white",
    fontWeight: "600",
  },
  input: {
    width: "50%",
    backgroundColor: "white",
    alignSelf: "center",
    marginBottom: 10,
  },
});
