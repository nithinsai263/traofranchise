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

export default function AddVehicle() {
  const [vehicleType, setVehicleType] = useState("");
  const [brand, setBrand] = useState("");
  const [regd, setRegd] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [regdDoc, setRegdDoc] = useState("");
  const [vehiclePhotos, setVehiclePhotos] = useState("");

  return (
    <SafeAreaView style={styles.page5container}>
      <View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "#838383" }}>Vehicle Type : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setVehicleType(val)}
            value={vehicleType}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "#838383" }}>Brand : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setBrand(val)}
            value={brand}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "#838383" }}>Regd. No : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setRegd(val)}
            value={regd}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "#838383" }}>Owner Name : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setOwnerName(val)}
            value={ownerName}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "#838383" }}>Regd. Doc : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setRegdDoc(val)}
            value={regdDoc}
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={{ color: "#838383" }}>Vehicle Photos : </Text>
          <TextInput
            style={styles.input}
            onChangeText={(val) => setVehiclePhotos(val)}
            value={vehiclePhotos}
          ></TextInput>
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: "#098D73",
                paddingHorizontal: 25,
                paddingVertical: 5,
                marginTop: 75,
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
      </View>
      <View style={{ paddingTop: 30 }}>
        <Text style={{ fontSize: 20 }}>Vehicle List</Text>
        <View
          style={{
            marginHorizontal: 15,
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={styles.texthead}>
            <Text style={styles.textHeading}>Vehicle Type</Text>
            <Text style={styles.text}>TCsf</Text>
          </View>
          <View style={styles.texthead}>
            <Text style={styles.textHeading}>Brand</Text>
            <Text style={styles.text}>ThjJJ</Text>
          </View>
          <View style={styles.texthead}>
            <Text style={styles.textHeading}>Regd. No.</Text>
            <Text style={styles.text}>HHH</Text>
          </View>
          <View style={styles.texthead}>
            <Text style={styles.textHeading}>Owner Name</Text>
            <Text style={styles.text}>12th June</Text>
          </View>
          <View style={styles.texthead}>
            <Text style={styles.textHeading}>Regd. Doc.</Text>
            <Text style={styles.text}>sdjhdjh</Text>
          </View>
          <View style={styles.texthead}>
            <Text style={styles.textHeading}>Vehicle Photos</Text>
            <Text style={styles.text}>sdjhdjh</Text>
          </View>
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
  texthead: {
    maxWidth: 50,
  },
  text: {
    paddingTop: 20,
  },
  textHeading: {
    maxHeight: 50,
    minHeight: 50,
  },
});
