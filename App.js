// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './Screens/SplashScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import HomeScreen from './Screens/HomeScreen';
import BottamBar from './Screens/BottamBar';
import Bikes from './Screens/Bikes';
import Emechanic from './Screens/Emechanic';
// import CarouselItem from './Screens/Emechanic';
import Basic from './Screens/SecondScreens/Basic';
import MidRange from './Screens/SecondScreens/MidRange';
import Booking from './Screens/SecondScreens/Booking';
import BikeBooking from './Screens/SecondScreens/Bikes_Booking';
import BikeBooking1 from './Screens/SecondScreens/Bike_Booking_1';
import ProfileScreen from './Screens/SecondScreens/ProfileScreen';
const Stack = createNativeStackNavigator();



function App() {
  return (
    <NavigationContainer>
      {/* <BottamBar /> */}
      
       <Stack.Navigator>
        <Stack.Screen name='Splash' component={SplashScreen} options={{headerShown: false}} />
        <Stack.Screen name="LoginScreen" component = {LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name='RegisterScreen' component={RegisterScreen} options = {{headerShown:false}}/>
        <Stack.Screen name='Home' component={HomeScreen} options = {{headerShown:false}}/> 
        <Stack.Screen name='Bikes' component={Bikes} options = {{headerShown:false}} />
        <Stack.Screen name='Emechanic' component={Emechanic} options = {{headerShown:false}} />
        <Stack.Screen name='Basic' component={Basic} options = {{headerShown:false}} />
        <Stack.Screen name='MidRange' component={MidRange} options = {{headerShown:false}} />
        <Stack.Screen name='Booking' component={Booking} options = {{headerShown:false}} />
        <Stack.Screen name='BikeBooking' component={BikeBooking} options = {{headerShown:false}} />
        <Stack.Screen name='BikeBooking1' component={BikeBooking1} options = {{headerShown:false}} />
        <Stack.Screen name='ProfileScreen' component={ProfileScreen} options = {{headerShown:false}} />

     </Stack.Navigator> 
    </NavigationContainer>
  );
}

export default App;
