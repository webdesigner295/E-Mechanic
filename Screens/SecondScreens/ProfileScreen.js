import { getAuth, updateProfile } from 'firebase/auth';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import {MaterialIcons} from 'react-native-vector-icons';
import * as ImagePicker from 'expo-image-picker';
import React, { useEffect, useState} from 'react';
import {ref, getStorage} from 'firebase/storage';
import { async } from '@firebase/util';
import { uploadImage } from '../../util';

const ProfileScreen = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const changeImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
    });
  
    if (!result.canceled) {
     uploadImage(result.assets[0].uri, 'user-pfp', user.uid).then((value) => {
      updateProfile(user, {photoURL: value.url});
      console.log('Updated PFP!');
     })
     .catch((reason) => {
        console.error(reason);
     });

    }
  }

  

  return (
    <View style={styles.container}>
        <View style={styles.header}></View>
        {
          user.photoURL ?  <Image source={{uri: user.photoURL}} style={styles.avatar}/> :
          <MaterialIcons name='person' color='white' size={100} style={styles.avatar}/>
        }
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.info}>UX Designer / Mobile developer</Text>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
            
            <TouchableOpacity style={styles.buttonContainer} onPress={changeImage}>
              <Text>Change Image</Text>  
            </TouchableOpacity>              
          </View>
      </View>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#4BC500',
    height:200,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: '#4BC500'
  },
});
