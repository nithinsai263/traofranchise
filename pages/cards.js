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

export default function AllOrders() {
  const [userId, setUserId] = useState("");
  const [phone, setPhone] = useState("");
  const [card, setcard] = useState("");

  return (
    <SafeAreaView style={styles.page5container}>
      <View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>UserID : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setUserId(val)}
            value={userId}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Phone : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setPhone(val)}
            value={phone}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Card Number : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setcard(val)}
            value={card}
          ></TextInput>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "#098D73",
              paddingHorizontal: 25,
              paddingVertical: 5,
              marginTop: 55,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
              UPDATEE
            </Text>
          </View>
        </TouchableOpacity>
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
  inputContainer: {
    marginBottom: 10,
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
    paddingBottom: 0,
    color: "black",
    minWidth: 200,
  },
});
