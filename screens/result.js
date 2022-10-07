import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import results from "../images/results.png";
const Result = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.subheading}> Result</Text>
      </View>
      <View style={styles.image1Container}>
        <Image source={results} style={styles.image} />
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Home")} >
          <Text style={styles.buttonText}> Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  subheading: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 30,
  },
  image: {
    height: 300,
    width: 300,
    marginBottom:30
  },
  image1Container: {
    justifyContent: "center",
    alignItems: "center",
  },
  container:{
    paddingTop: 40,
    paddingVertical: 20,
    height:'100%',
    backgroundColor:'#FFDDD2'
  },
  button: {
    width:'30%',
    backgroundColor: "green",
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 10,
    alignSelf:'center'
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
  },
  
});
