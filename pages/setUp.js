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

export default function Setup() {
  const [agencyName, setAgencyName] = useState("");
  const [phone, setPhone] = useState("");
  const [regNo, setRegNo] = useState("");
  const [landPhone, setLandPhone] = useState("");
  const [email, setEmail] = useState("");
  const [regDoc, setRegDoc] = useState("");
  const [pan, setPan] = useState("");
  const [panDoc, setPanDoc] = useState("");
  const [gstNo, setGst] = useState("");
  const [gstDoc, setGstDoc] = useState("");
  const [shopNo, setShopNo] = useState("");
  const [house, setHouse] = useState("");
  const [location, setLocation] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [minWC, setminWC] = useState("");
  const [aboveMW, setAboveMW] = useState("");
  const [minDC, setMinDC] = useState("");
  const [aboveDC, setAboveDC] = useState("");
  const [maxW, setMaxW] = useState("");
  const [acceptPay, setAcceptPay] = useState("");
  return (
    <SafeAreaView style={styles.page5container}>
      <ScrollView>
        <View>
          <View style={styles.inputContainer}>
            <Text style={{ color: "black" }}>Agency ID : </Text>
            <TextInput style={styles.input}></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Text style={{ color: "black" }}>Agency Name : </Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setAgencyName(val)}
              value={agencyName}
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
        <Text
          style={{
            color: "#098D73",
            fontSize: 16,
            fontWeight: "bold",
            marginTop: 45,
          }}
        >
          Delivery Fee to Boys
        </Text>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Min. Weight-Charges : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setminWC(val)}
            value={minWC}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>
            Above Min. Weight/KG - Charges :{" "}
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setAboveMW(val)}
            value={aboveMW}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Min. Distance-Charges : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setMinDC(val)}
            value={minDC}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>
            Above Min. Distance/KM - Charges :{" "}
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setAboveDC(val)}
            value={aboveDC}
          ></TextInput>
        </View>

        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>Maximum Weight : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setMaxW(val)}
            value={maxW}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "black" }}>We Accept Pay on Delivery : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setAcceptPay(val)}
            value={acceptPay}
          ></TextInput>
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
