import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
  ImageBackground,
  TextInput,
  Dimensions,
  ScrollView,
  Pressable,
  StatusBar,
  Image,
  Switch,
  TouchableOpacity,
  Modal,
  CheckBox,
} from "react-native";
const windowHeight = Dimensions.get("window").height;

export default function ManageBoys() {
  return (
    <SafeAreaView style={styles.page5container}>
      <View
        style={{
          marginHorizontal: 15,
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text></Text>
          <Text style={styles.container}>PIC</Text>
          <Text style={styles.container}>PIC</Text>
        </View>
        <View>
          <Text>Name</Text>
          <Text style={styles.text}>ThjJJ</Text>
          <Text style={styles.text}>ThjJJ</Text>
        </View>
        <View>
          <Text>Boy ID</Text>
          <Text style={styles.text}>HHH</Text>
          <Text style={styles.text}>HHH</Text>
        </View>
        <View>
          <Text>Vehicle</Text>
          <Text style={styles.text}>12th June</Text>
          <Text style={styles.text}>12th June</Text>
        </View>
        <View>
          <Text></Text>
          <Image style={styles.image} source={require("./assets/tick.png")} />
          <Image style={styles.image2} source={require("./assets/close.png")} />
        </View>
        <View>
          <Text></Text>
          <Text style={styles.container}>ON/OFF</Text>
          <Text style={styles.container}>ON/OFF</Text>
        </View>
        <View>
          <Text></Text>
          <Text style={styles.container}>Call</Text>
          <Text style={styles.container}>Call</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page5container: {
    flexDirection: "column",
    flex: 1,
    marginTop:
      Platform.OS === "android"
        ? StatusBar.currentHeight
        : StatusBar.currentHeight,
    overflow: "hidden",
    margin: 10,
  },
  container: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginTop: 15,
    borderWidth: 0.7,
    borderColor: "#000",
  },
  image: {
    height: 15,
    width: 15,
    marginTop: 20,
    marginBottom: 5,
  },
  image2: {
    height: 15,
    width: 15,
    marginTop: 25,
    marginBottom: 5,
  },
  text: {
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 15,
  },
});
