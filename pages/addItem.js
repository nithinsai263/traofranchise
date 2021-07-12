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

export default function AddItem() {
  const [category, setCategory] = useState("");
  const [subCat, setSubCat] = useState("");
  const [id, setId] = useState("");
  const [brand, setBrand] = useState("");
  const [discount, setDiscount] = useState("");
  const [tax, setTax] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  return (
    <SafeAreaView style={styles.page5container}>
      <View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Category : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setCategory(val)}
            value={category}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Sub Category : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setSubCat(val)}
            value={subCat}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>ID : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setId(val)}
            value={id}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Brand : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setBrand(val)}
            value={brand}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Discount% : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setDiscount(val)}
            value={discount}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Tax% : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setTax(val)}
            value={tax}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Stock : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setStock(val)}
            value={stock}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Description : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setDescription(val)}
            value={description}
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
