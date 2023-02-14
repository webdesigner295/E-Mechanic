import { Button, Image, useWindowDimensions, View, Text } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";


const HomeMap = (props) => {

  const cars = [
    {
      id: '0',
      latitude: 28.450627,
      longitude: -16.263045,
      heading: 47,
    },
    {
      id: '1',
      latitude: 28.456312,
      longitude: -16.252929,
    },
    {
      id: '2',
      latitude: 28.456208,
      longitude: -16.259098,
    },
    {
      id: '3',
      latitude: 28.454812,
      longitude:-16.258658,
    },
  ];


  return (
    <SafeAreaView>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        region={props.originPlace}>
        {cars.map((car) => (
          <Marker
            key={car.id}
            coordinate={{latitude: car.latitude, longitude: car.longitude}}
            
          >
            <Text>Shop# {car.id}</Text>
            <Image
              style={{
                width: 30,
                height: 30,
                resizeMode: 'contain',
              }}
              source={require('../Image/Vector8.png')}
            />
          </Marker>
        ))}
      </MapView>
    </SafeAreaView>
  );
};

export default HomeMap;