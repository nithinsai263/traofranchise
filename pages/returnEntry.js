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
} from "react-native";
const windowHeight = Dimensions.get("window").height;

export default function ReturnEntry() {
  const [orderID, setOrderID] = useState("");
  const [userID, setUserID] = useState("");
  const [itemID, setItemID] = useState("");

  return (
    <SafeAreaView style={styles.page5container}>
      <View style={{ alignItems: "center" }}>
        <View style={styles.inputContainer}>
          <Text style={{ color: "#838383" }}>OrderID : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setOrderID(val)}
            value={orderID}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "#838383" }}>UserID : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setUserID(val)}
            value={userID}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "#838383" }}>ItemID : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setItemID(val)}
            value={itemID}
          ></TextInput>
        </View>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: "#098D73",
              paddingHorizontal: 25,
              paddingVertical: 5,
              marginTop: 75,
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
