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

export default function OfflineSales() {
  const [userId, setUserId] = useState("");
  const [card, setCard] = useState("");
  const [item, setItem] = useState("");
  const [weight, setWeight] = useState("");

  return (
    <SafeAreaView style={styles.page5container}>
      <View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>UserID or Phone : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setUserId(val)}
            value={userId}
          ></TextInput>
          <TouchableOpacity>
            <Text style={{ paddingLeft: 15, color: "#FF0000" }}>Validate</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Trao Card : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setCard(val)}
            value={card}
          ></TextInput>
          <TouchableOpacity>
            <Text style={{ paddingLeft: 15, color: "#FF0000" }}>Validate</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Item ID : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setItem(val)}
            value={item}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Weight : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setWeight(val)}
            value={weight}
          ></TextInput>
          <Text style={{ paddingLeft: 15 }}>Units</Text>
        </View>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text style={styles.text}>Name :</Text>
        <Text style={styles.text}>Your Price :</Text>
        <Text style={styles.text}>Selling Price :</Text>
        <Text style={styles.text}>Card Discount :</Text>
        <Text style={styles.text}>Stock :</Text>
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
  text: {
    color: "black",
    marginTop: 10,
    marginBottom: 5,
    fontSize: 16,
  },
});
