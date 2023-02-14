import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const Booking = ({ navigation }) => {
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
          source={require("../../Image/Vector1.png")}
          style={{
            height: "120%",
            width: "34%",
            resizeMode: "contain",
            alignSelf: "flex-end",
            position: "absolute",
            right: -13,
            top: -10,
          }}
        />

        <Text
          style={{
            fontWeight: "900",
            fontSize: 16,
            color: "#000",
            marginLeft: 40,
            marginTop: 30,
          }}
        >
          Services
        </Text>
      </View>
      <View>
        <View style={styles.Img1}>
          <Image
            source={require("../../Image/Vector4.png")}
            style={{ marginLeft: 30, marginBottom: 10 }}
          />
          <Image
            source={require("../../Image/Vector2.png")}
            style={{ marginLeft: 50 }}
          />
        </View>
        <Text onPress={() => navigation.navigate("Basic")} style={styles.h3}>
          Basic{" "}
          <Text style={{ fontWeight: "normal", textAlign: "center" }}>
            {" "}
            {"\n"}Aslam
          </Text>
        </Text>
      </View>
      <View>
        <Text style={styles.h2}>
          RS. 1600{" "}
          <Text style={{ fontWeight: "normal" }}> {"\n"}Appointments</Text>
        </Text>
      </View>
      <View style={styles.h5}>
        <Text style={styles.p1}>10:00 AM to 12:00 PM</Text>
        <Text style={styles.p1}>12:00 PM to 02:00 PM</Text>
      </View>
      <View style={styles.h5}>
        <Text style={styles.p1}>2:00 PM to 04:00 PM</Text>
        <Text style={styles.p1}>4:00 PM to 06:00 PM</Text>
      </View>
      <View style={styles.h5}>
        <Text style={styles.p1}>6:00 PM to 08:00 PM</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Booking")}
        style={styles.buttonStyle}
        activeOpacity={0.5}
      >
        <Text
          onPress={() => navigation.navigate("Booking")}
          style={styles.buttonTextStyle}
        >
          Book Appointment
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Booking;

const styles = StyleSheet.create({
  Img1: {
    height: 150,
    width: 150,
    marginLeft: 107,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: "center",
    backgroundColor: "#4BC500",
  },
  h2: {
    fontWeight: "900",
    fontSize: 18,
    color: "#000",
    marginLeft: 30,
    marginTop: 20,
  },
  h5: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 15,
  },
  p1: {
    backgroundColor: "#c4c4c4",
    borderRadius: 7,
    fontSize: 12,
  },

  h3: {
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#fff",
    marginLeft: 6,
    height: 60,
    width: 140,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    textAlign: "center",
    fontWeight: "700",
    color: "#000",
    alignSelf: "center",
  },
  buttonStyle: {
    backgroundColor: "#4BC500",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 50,
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 120,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: "900",
  },
});
