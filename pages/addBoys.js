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

export default function Page() {
  const [boyName, setBoyName] = useState("");
  const [phone, setPhone] = useState("");
  const [enterOTP, setEnterOTP] = useState("");
  const [alterPhone, setAlterPhone] = useState("");
  const [email, setEmail] = useState("");
  const [idProof, setIDProof] = useState("");
  const [pan, setPan] = useState("");
  const [house, setHouse] = useState("");
  const [location, setLocation] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  return (
    <SafeAreaView style={styles.page5container}>
      <ScrollView>
        <View>
          <View style={styles.inputContainer}>
            <Text style={{ color: "black" }}>Boy ID : </Text>
            <TextInput style={styles.input}></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Text style={{ color: "black" }}>Boy Name : </Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setBoyName(val)}
              value={boyName}
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Text style={{ color: "black" }}>Phone : </Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setPhone(val)}
              value={phone}
            ></TextInput>
            <Text style={{ color: "#FF0000", marginLeft: 20 }}>Send OTP</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={{ color: "black" }}>Enter OTP : </Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setEnterOTP(val)}
              value={enterOTP}
            ></TextInput>
            <Text style={{ color: "#FF0000", marginLeft: 20 }}>Validate</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={{ color: "black" }}>Alter Phone : </Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setAlterPhone(val)}
              value={alterPhone}
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
            <Text style={{ color: "black" }}>ID Proof No : </Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setIDProof(val)}
              value={idProof}
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Text style={{ color: "black" }}>ID Proof Doc : </Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setBoyName(val)}
              value={boyName}
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Text style={{ color: "black" }}>Pan No : </Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setPan(val)}
              value={pan}
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Text style={{ color: "black" }}>Pan Doc : </Text>
            <TextInput style={styles.input}></TextInput>
          </View>
        </View>
        <Text
          style={{
            color: "#098D73",
            fontSize: 16,
            fontWeight: "bold",
            marginTop: 45,
          }}
        >
          Address
        </Text>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>House No : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setHouse(val)}
            value={house}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Location Map : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setLocation(val)}
            value={location}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Street : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setStreet(val)}
            value={street}
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
          <Text style={{ color: "black" }}>State : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setState(val)}
            value={state}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Boy Photos : </Text>
          <TextInput style={styles.input}></TextInput>
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
              <Text
                style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
              >
                UPDATEE
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
