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

import { RadioButton } from "react-native-paper";

const windowHeight = Dimensions.get("window").height;

export default function AllOrders() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const [gst, setGst] = useState("");
  const [isSelected, setSelection] = useState(false);
  const [checked, setChecked] = useState("first");

  return (
    <SafeAreaView style={styles.page5container}>
      <View
        style={{
          alignItems: "center",
          marginTop: 25,
          marginBottom: 25,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            maxWidth: 200,
          }}
        >
          Franchise / Shop Registration
        </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text>TraO Mart</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text>Own Shop</Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Name : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setName(val)}
            value={name}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>GST No : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setgst(val)}
            value={gst}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Email : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setEmail(val)}
            value={email}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>City : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setCity(val)}
            value={city}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Password : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setPass(val)}
            value={pass}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>C. Password : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setCpass(val)}
            value={cpass}
          ></TextInput>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Agree the Terms and Policy</Text>
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
              Register Now
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
  checkboxContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});
