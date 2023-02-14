import {
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { initFirebase } from "../Backend/config";
import { getAuth } from "firebase/auth";

const SplashScreen = ({ navigation }) => {
  initFirebase();

  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    console.log("signed in: " + user.email);
  } else {
    console.log("No User Signed In!");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require("../Image/appLogo.png")}
          style={{
            width: "85%",
            height: "30%",
            margin: 30,
            marginLeft: "8%",
            resizeMode: "cover",
          }}
        />
        <Text
          style={{
            paddingBottom: "5%",
            fontStyle: "italic",
            textAlign: "center",
            fontSize: 18,
            fontWeight: "300",
            color: "#000",
            fontFamily: "Roboto",
          }}
        >
          we are where you are
        </Text>
        <Text style={styles.h1}>
          Find, Book and Call for {"\n"} Emergency Situations
        </Text>
        <Text style={styles.p1}>
          You can book various services for your Vehicle Bike {"\n"}{" "}
          electronically through mobile. And also you can get a {"\n"} mechanic
          on road in emergency situations e.g., Puncture, Accident.
        </Text>
        <TouchableOpacity style={styles.buttonStyle} activeOpacity={0.5}>
          <Text
            onPress={() => {
              if (user) {
                navigation.navigate("Home");
              } else {
                navigation.navigate("RegisterScreen");
              }
            }}
            style={styles.buttonTextStyle}
          >
            Get Started
          </Text>
        </TouchableOpacity>
        <Text></Text>
      </View>

      {/* <View style={styles.container}>
      <Image
        source={require('../Image/appLogo.png')}
        style={{width: '70%', height:'30%', margin: 30,position:"absolute",top:'1%'}}
      />
      <Text style = {{paddingBottom:'5%', fontStyle:'italic'}}>
      we are where you are
      </Text>
      <Text style ={styles.h1} >
      Find, Book and Call for {'\n'} Emergency Situations
      </Text>
      <Text style = {styles.p1}>
      You can book various services for
your Vehicle / Bike {'\n'} electronically through mobile. And also you can get a {'\n'} mechanic on road in emergency situations e.g.,
Puncture, Accident.
      </Text>
    
      
      
    </View> */}
    </SafeAreaView>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    // height: '100%'
  },
  h1: {
    // marginBottom:'10%',
    // paddingBottom:'10%',
    marginBottom: "15%",
    fontWeight: "900",
    fontSize: 24,
    fontFamily: "Roboto",
    textAlign: "center",
    color: "black",
  },
  p1: {
    textAlign: "center",
    paddingBottom: "1%",
    fontSize: 12,
    color: "#000",
    fontFamily: "Roboto",
  },
  buttonStyle: {
    backgroundColor: "#4BC500",
    borderWidth: 0,
    color: "#FFFFFF",
    borderColor: "#7DE24E",
    height: 50,
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 100,
    // marginBottom: 0,
    cursor: "pointer",
  },
  buttonTextStyle: {
    color: "#FFFFFF",
    paddingVertical: 10,
    fontSize: 18,
  },
});
