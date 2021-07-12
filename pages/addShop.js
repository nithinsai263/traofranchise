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

export default function AddShop() {
  const [shopName, setShopName] = useState("");
  const [phone, setPhone] = useState("");
  const [landPhone, setLandPhone] = useState("");
  const [email, setEmail] = useState("");
  const [shopSize, setShopSize] = useState("");
  const [regNo, setRegNo] = useState("");
  const [regDoc, setRegDoc] = useState("");
  const [gstNo, setGst] = useState("");
  const [gstDoc, setGstDoc] = useState("");
  const [pan, setPan] = useState("");
  const [address, setAdress] = useState("");
  const [shopNo, setShopNo] = useState("");
  const [house, setHouse] = useState("");
  const [location, setLocation] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [checked, setChecked] = React.useState("first");

  return (
    <SafeAreaView style={styles.page5container}>
      <ScrollView>
        <View>
          <View style={styles.inputContainer}>
            <Text style={{ color: "black" }}>Store ID : </Text>
            <TextInput style={styles.input}></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Text style={{ color: "black" }}>Shop Name : </Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setShopName(val)}
              value={shopName}
            ></TextInput>
          </View>
          <Text
            style={{
              color: "#098D73",
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 45,
              marginBottom: 20,
            }}
          >
            My Business
          </Text>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton
                value="first"
                status={checked === "first" ? "checked" : "unchecked"}
                onPress={() => setChecked("first")}
              />
              <Text style={{ paddingLeft: 10 }}>
                I will run TRAO MART Franchise
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <RadioButton
                value="second"
                status={checked === "second" ? "checked" : "unchecked"}
                onPress={() => setChecked("second")}
              />
              <Text style={{ paddingLeft: 10 }}>
                I want to sell my own products
              </Text>
            </View>
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
            <Text style={{ color: "black" }}>Land Phone : </Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setLandPhone(val)}
              value={landPhone}
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
            <Text style={{ color: "black" }}>Shop size(Sqft) : </Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setShopSize(val)}
              value={shopSize}
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Text style={{ color: "black" }}>Registration No : </Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setRegNo(val)}
              value={regNo}
            ></TextInput>
          </View>

          <View style={styles.inputContainer}>
            <Text style={{ color: "black" }}>Registration Doc : </Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setRegDoc(val)}
              value={regDoc}
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Text style={{ color: "black" }}>GST No : </Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setGst(val)}
              value={gstNo}
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Text style={{ color: "black" }}>GST Doc : </Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setGstDoc(val)}
              value={gstDoc}
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

        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Address : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setAdress(val)}
            value={address}
          ></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Shop No : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setShopNo(val)}
            value={shopNo}
          ></TextInput>
        </View>
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
          <Text style={{ color: "black" }}>Shop Photos : </Text>
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
