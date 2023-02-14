import React from "react";
import { View, Dimensions, Text} from "react-native";
import { useState } from "react";

import HomeMap from './HomeMap';
import HomeSearch from './HomeSearch';
import DestinationSearch from "./DestinationSearch";

const MapScreen = () => {
  const [originPlace, setOriginPlace] = useState(null);  
  

  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomeMap originPlace={originPlace}/>
      </View>

      <DestinationSearch originPlace={originPlace} setOriginPlace={setOriginPlace}/>

    </View>
  );
};

export default MapScreen;