import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import FontAwesome5 from "react-native-vector-icons/fontawesome5";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const ConfirmOrder = () => {
  return (
    <SafeAreaView>
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

        <View style={styles.c_b}>
          <FontAwesome5
            onPress={() => navigation.navigate("Home")}
            name={"check"}
            size={130}
            style={{
              // marginLeft: 60,
              alignSelf: "center",
              marginTop: 40,
              color: "#4BC500",
              border: 1,
              display: "flex",
            }}
          />
        </View>
        <Text style={styles.h1}>Order Succesfully</Text>
        <Text style={styles.p}>
          We will contact on your email when shipping is arrived on your door
          step,
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default ConfirmOrder;
const styles = StyleSheet.create({
  c_b: {
    border: 1,
    borderWidth: 1,
    width: "50%",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 100,
    borderStyle: "dotted",
    marginTop: "35%",
  },
  h1: {
    fontSize: 36,
    fontWeight: "900",
    fontFamily: "Roboto",
    textAlign: "center",
    marginLeft: "13%",
    marginTop: "5%",
    lineHeight: 40,
    width: "70%",
  },
  p: {
    textAlign: "center",
    width: "70%",
    marginLeft: "14%",
    lineHeight: 20,
    color: "darkgrey",
    marginTop: "5%",
  },
});
