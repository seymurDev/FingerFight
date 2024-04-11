
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Intro from '../screens/İntro'
import Home from '../screens/Home';
const Stack = createNativeStackNavigator();
const rootNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Intro" component={Intro}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default rootNav
