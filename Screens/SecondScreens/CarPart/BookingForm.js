import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const BookingForm = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <FontAwesome5
          onPress={() => navigation.navigate("Home")}
          name={"long-arrow-alt-left"}
          size={30}
          style={{ marginLeft: 20, marginTop: 30, color: "#000" }}
        />
        <Image
          // source={require("../../Image/Vector1.png")}
          source={require("../../../Image/Vector1.png")}
          style={{
            // height: "100%",
            // width: "30%",
            position: "absolute",
            // left: "80%",
            right: "0%",
          }}
        />
      </View>
      <View style={styles.o_from}>
        <Text style={{ fontSize: 20 }}>Enter You Your Details...</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Name</Text>
        <TextInput
          style={styles.inputStyles}
          placeholder="Enter Your Name"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Address</Text>
        <TextInput
          style={styles.inputStyles}
          placeholder="Enter Your Address"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your City</Text>
        <TextInput
          style={styles.inputStyles}
          placeholder="Enter Your City"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Postel(Optional)</Text>
        <TextInput
          style={styles.inputStyles}
          placeholder="Enter Postel Code"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("ConfirmOrder")}
        style={styles.buttonStyle}
        activeOpacity={0.5}
      >
        <Text
          onPress={() => navigation.navigate("ConfirmOrder")}
          style={styles.buttonTextStyle}
        >
          Confirm Order
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default BookingForm;

const styles = StyleSheet.create({
  o_from: {
    // alignItems: "center",
    alignSelf: "center",
    marginTop: "20%",
  },
  inputContainer: {
    // marginTop: 5,
  },
  labels: {
    fontSize: 14,
    // marginTop: 5,
    marginBottom: 5,
    lineHeight: 25,
    paddingHorizontal: 38,
    paddingTop: 18,
    fontWeight: "bold",
    // color: "#4BC500",
  },
  inputStyles: {
    borderWidth: 1,
    borderColor: "#4BC500",
    paddingHorizontal: 17,
    // marginLeft: 30,
    alignSelf: "center",
    // marginBottom: 3,

    width: "80%",
    paddingVertical: 7,
    borderRadius: 15,
    fontSize: 16,
  },
  buttonStyle: {
    backgroundColor: "#4BC500",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 60,
    alignItems: "center",
    borderRadius: 10,
    // marginLeft: 0,
    // marginRight: 0,
    marginTop: "30%",
    // marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: "900",
  },
});
