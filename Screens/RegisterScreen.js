import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,
  } from "react-native";
  import AsyncStorage from "react-native";
  import React, { useState, useEffect } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import '../Backend/config'
  import {app} from '../Backend/config'
  import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


  const RegisterScreen = ({ navigation }) => {
    const [fullName, setFullName] = useState('')
    const [email, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    //const [errortext, setErrortext] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onHandleSubmit = () => {
      if (!fullName) {
        alert('Please fill Name');
        return;
      }
      if (!email) {
        alert('Please fill Email');
        return;
      }
      if (!password) {
        alert('Please fill Password');
        return;
      }
      if (password != confirmPassword) {
        alert("Passwords don't match")
        return;
      }

      const auth = getAuth(app);

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          
          const user = userCredential.user;

          updateProfile(user, {
            displayName: fullName
          }).then(() => {
            console.log('Updated Display Name to ' + displayName + '\n');
            navigation.navigate('LoginScreen');
          }).catch((error) => {
            console.log(error.errorMessage);
          });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorMessage);
        
        });
        

      
    }

    return (
      // <View style={styles.mainBody}>
      //   {/* <Loader loading={loading} /> */}
      //   <ScrollView
      //     keyboardShouldPersistTaps="handled"
      //     contentContainerStyle={{
      //       flex: 1,
      //       justifyContent: 'center',
      //       alignContent: 'center',
      //     }}>
      //     <View>
      //       <KeyboardAvoidingView enabled>
      //         <View style={{alignItems: 'center'}}>
      //           <Image
      //             source={require('../Image/aboutreact.png')}
      //             style={{
      //               width: '50%',
      //               height: 100,
      //               resizeMode: 'contain',
      //               margin: 30,
      //             }}
      //           />
      //         </View>
      //         <View style={styles.SectionStyle}>
      //           <TextInput
      //             style={styles.inputStyle}
  
      //             placeholder="Enter Email" //dummy@abc.com
      //             placeholderTextColor="#8b9cb5"
      //             autoCapitalize="none"
      //             keyboardType="email-address"
      //             returnKeyType="next"
      //             onSubmitEditing={() =>
      //               passwordInputRef.current &&
      //               passwordInputRef.current.focus()
      //             }
      //             underlineColorAndroid="#f000"
      //             blurOnSubmit={false}
      //           />
      //         </View>
      //         <View style={styles.SectionStyle}>
      //           <TextInput
      //             style={styles.inputStyle}
      //             onChangeText={(UserPassword) =>
      //               setUserPassword(UserPassword)
      //             }
      //             placeholder="Enter Password" //12345
      //             placeholderTextColor="#8b9cb5"
      //             keyboardType="default"
      //             // ref={passwordInputRef}
      //             onSubmitEditing={Keyboard.dismiss}
      //             blurOnSubmit={false}
      //             secureTextEntry={true}
      //             underlineColorAndroid="#f000"
      //             returnKeyType="next"
      //           />
      //         </View>
      //         {errortext != '' ? (
      //           <Text style={styles.errorTextStyle}>
      //             {errortext}
      //           </Text>
      //         ) : null}
      //         <TouchableOpacity
      //           style={styles.buttonStyle}
      //           activeOpacity={0.5}
      //           onPress={onHandleSubmit}>
      //           <Text style={styles.buttonTextStyle}>LOGIN</Text>
      //         </TouchableOpacity>
      //         <Text
      //           style={styles.registerTextStyle}
      //           onPress={() => navigation.navigate('Splash')}>
      //           New Here ? Register
      //         </Text>
      //       </KeyboardAvoidingView>
      //     </View>
      //   </ScrollView>
      // </View>
      // <View style={[styles.container, {
      //   // Try setting `flexDirection` to `"row"`.
      //   flexDirection: "column"
      // }]}>
      //   <View style={{ flex: 1, backgroundColor: "#fff", display: 'flex', flexDirection: 'row' }}>
      //     <Image source={require('../Image/appLogo.png')}
      //       style={styles.logoImg} />
      //     <Image style={styles.img} source={require('../Image/Vector.png')} />
      //   </View>
      //   {/* <View style={{ flex: 4, backgroundColor: "green" }} /> */}
      //   <View style={{ flex: 3, borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: '#C4C4C4' }}>
      //     {/* <KeyboardAvoidingView enabled> */}
  
      //     <Text style={{ textAlign: 'center', fontWeight: '900', fontFamily: 'Roboto', fontSize: 18, color: '#000', marginTop: '5%' }}>
  
      //       Welcome Back!
      //     </Text>
      //     <Text style={{ textAlign: 'center', fontWeight: '300', fontSize: 16, fontFamily: 'Roboto', color: '#000', marginTop: '3%' }}>
      //       Please enter your credientials
      //     </Text>
      //     <Image source={require('../Image/inputImg.png')}
      //       style={{ height: '20%', width: '20%', position: 'relative', left: '40%', top: '5%' }} />
      //     {/* </KeyboardAvoidingView> */}
      //     <View style={{ marginTop: '10%' }}>
      //       <View style={styles.SectionStyle}>
      //         <TextInput
      //           style={styles.inputStyle}
  
      //           placeholder="Enter Email" //dummy@abc.com
      //           placeholderTextColor="#8b9cb5"
      //           autoCapitalize="none"
      //           keyboardType="email-address"
      //           returnKeyType="next"
      //           onSubmitEditing={() =>
      //             passwordInputRef.current &&
      //             passwordInputRef.current.focus()
      //           }
      //           underlineColorAndroid="#f000"
      //           blurOnSubmit={false}
      //         />
      //       </View>
      //       <View style={styles.SectionStyle}>
      //         <TextInput
      //           style={styles.inputStyle}
      //           onChangeText={(UserPassword) =>
      //             setUserPassword(UserPassword)
      //           }
      //           placeholder="Enter Password" //12345
      //           placeholderTextColor="#8b9cb5"
      //           keyboardType="default"
      //           // ref={passwordInputRef}
      //           onSubmitEditing={Keyboard.dismiss}
      //           blurOnSubmit={false}
      //           secureTextEntry={true}
      //           underlineColorAndroid="#f000"
      //           returnKeyType="next"
      //         />
      //       </View>
      //     </View>
      //     <TouchableOpacity
      //       style={styles.buttonStyle}
      //       activeOpacity={0.5}
      //       onPress={onHandleSubmit}>
      //       <Text style={styles.buttonTextStyle}>LOGIN</Text>
      //     </TouchableOpacity>
      //     <Text
      //       style={styles.registerTextStyle}
      //       onPress={() => navigation.navigate('Splash')}>
      //       Create a new account <Text style ={{color:'#4BC500'}}> Sign Up</Text>
      //     </Text>
  
      //   </View>
  
  
      // </View>
      <SafeAreaView style={{ backgroundColor: "#fff" }}>
        <View style={{ height: '30%', width: '100%', backgroundColor: '#fff' }}>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Image source={require('../Image/appLogo.png')}
            style={styles.logoImg} />
          <Image style={styles.img} source={require('../Image/Vector.png')} />
  
          </View>
  
        </View>
        <View style={{ height: '70%', width: '100%', backgroundColor: '#C4C4C4', borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
          <KeyboardAvoidingView enabled>
          <Text style={{ textAlign: 'center', fontWeight: '900', fontFamily: 'Roboto', fontSize: 18, color: '#000', marginTop: '5%' }}>
  
         Register with Us!
       </Text>
       <Text style={{ textAlign: 'center', fontWeight: '300', fontSize: 16, fontFamily: 'Roboto', color: '#000', marginTop: '3%' }}>
       Your Information is safe with us.
       </Text>
      
  <View style = {{marginTop:'3%'}}>
  <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
  
                placeholder="Enter your name" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="ascii-capable"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                onChangeText = {(fullName) => setFullName(fullName)}
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
               <TextInput
                style={styles.inputStyle}
                // onChangeText={(UserPassword) =>
                  // setUserPassword(UserPassword)
                // }
                placeholder="Enter Email" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="email-address"
                // ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
                onChangeText = {(email) => setUserEmail(email)}
              />
            </View>
            <View style={styles.SectionStyle}>
               <TextInput
                style={styles.inputStyle}
                // onChangeText={(UserPassword) =>
                  // set/UserPassword(UserPassword)
                // }
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                // ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
                onChangeText = {(password) => setPassword(password)}
              />
            </View><View style={styles.SectionStyle}>
               <TextInput
                style={styles.inputStyle}
                // onChangeText={(UserPassword) =>
                  // setUserPassword(UserPassword)
                // }
                placeholder="Confirm Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                // ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
                onChangeText = {(confirmPassword) => setConfirmPassword(confirmPassword)}
              />
            </View>
            <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={onHandleSubmit}>
            <Text style={styles.buttonTextStyle}>Sign Up</Text>
          </TouchableOpacity>
          <Text
            style={styles.registerTextStyle}
            onPress={() => navigation.navigate('LoginScreen')}>
            Have Already Account <Text style ={{color:'#4BC500',fontSize:18,fontWeight:'900'}}> Sign in</Text>
          </Text>
  
  </View>
            
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    );
  };
  export default RegisterScreen;
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
  
    },
    logoImg: {
      height: '120%',
      width: '40%',
      marginTop: '20%',
      marginLeft: '7%'
    },
    img: {
      height: '180%',
      width: '40%',
      marginLeft: '15%',
      // marginTop:'1%'
  
    },
    inputBox: {
      backgroundColor: '#000'
  
  
    },
    mainBody: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#307ecc',
      alignContent: 'center',
    },
    SectionStyle: {
      flexDirection: 'row',
      height: 45,
      marginTop: 15,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
    },
    buttonStyle: {
      backgroundColor: '#4BC500',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: '#7DE24E',
      height:45,
      alignItems: 'center',
      borderRadius: 10,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 15,
      marginBottom: 25,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 18,
      fontFamily: 'Roboto',
      fontWeight: '900'
    },
    inputStyle: {
      flex: 1,
      color: '#000',
      backgroundColor: 'white',
      paddingLeft: 15,
      paddingRight: 15,
      borderWidth: 1,
      borderRadius: 15,
      borderColor: '#dadae8',
    },
    registerTextStyle: {
      color:'#000',
      textAlign: 'center',
      fontWeight: '900',
      fontFamily:'Roboto',
      fontSize: 16,
      alignSelf: 'center',
      padding: 5,
    },
    errorTextStyle: {
      color: 'red',
      textAlign: 'center',
      fontSize: 14,
    },
  });
  