import React, {useState, useEffect} from 'react';
import {View, TextInput, SafeAreaView, KeyboardAvoidingView} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';


import { StyleSheet } from 'react-native';


import PlaceRow from "./PlaceRow";

const homePlace = {
  description: 'Home',
  geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
};

const apiKey = 'AIzaSyCVrtikq0I4TrHr7-qPiDLKK_4AQpOiRxE';

const DestinationSearch = (props) => {
  


  const checkNavigation = () => {
    return;

    if (originPlace) {
      navigation.navigate('SearchResults', {
        originPlace
      })
    }
  }

  useEffect(() => {
    checkNavigation();
  }, [props.originPlace]);

  
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behaviour='padding'>

        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            const newPoint = {
              longitude: details.geometry.location.lng,
              latitude: details.geometry.location.lat,
              latitudeDelta: 0.0222,
              longitudeDelta: 0.0121,
            };

            props.setOriginPlace(newPoint);
            console.log(newPoint);
          }}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: apiKey,
            language: 'en',
          }}
          renderRow={(data) => <PlaceRow data={data} />}
          renderDescription={(data) => data.description || data.vicinity}
          predefinedPlaces={[homePlace]}
        />


        {/* Circle near Origin input */}
        <View style={styles.circle} />

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 10,
      height: '100%',
    },
    textInput: {
      padding: 10,
      backgroundColor: '#eee',
      marginVertical: 5,
      marginLeft: 20,
    },
  
    separator: {
      backgroundColor: '#efefef',
      height: 1,
    },
    listView: {
      position: 'absolute',
      top :60,
    },
    autocompleteContainer: {
      position: 'absolute',
      top: 0,
      left: 10,
      right: 10,
    },
  
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },
    iconContainer: {
      backgroundColor: '#a2a2a2',
      padding: 5,
      borderRadius: 50,
      marginRight: 15,
    },
    locationText: {
  
    },
  
    circle: {
      width: 5,
      height: 5,
      backgroundColor: 'black',
      position: 'absolute',
      top: 20,
      left: 15,
      borderRadius: 5,
    }
  });

export default DestinationSearch;