import { StyleSheet } from 'react-native'
import React from 'react'
import Splash from './Screens/Splash'
import Login from './Screens/Login';
import Register from './Screens/Register';
import Search from './Screens/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { Antdesign } from 'react-native-vector-icons/AntDesign'
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='splash' component={Splash} />
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='register' component={Register} />
        <Stack.Screen name='search' component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})