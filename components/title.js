import { StyleSheet, Text, View } from "react-native";
import React from "react";
const Title = () => {
  return (
    <View>
      <Text style={styles.Heading}>QuizeeZ..</Text>
    </View>
  );
};
export default Title;
const styles = StyleSheet.create({
  Heading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
