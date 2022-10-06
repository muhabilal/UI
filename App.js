import { StyleSheet } from 'react-native'
import React from 'react'
import Splash from './Screens/Splash'
import Login from './Screens/Login';
import Register from './Screens/Register';
import Search from './Screens/Search';
import Items from './Screens/Items';
import Favorites from './Screens/Favorites';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { Antdesign } from 'react-native-vector-icons/AntDesign'
import OrderHistory from './Screens/OrderHistory';
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='splash' component={Splash} />
        <Stack.Screen name='login' component={Login} />
        <Stack.Screen name='register' component={Register} />
        <Stack.Screen name='search' component={Search} />
        <Stack.Screen name="items" component={Items} />
        <Stack.Screen name="fav" component={Favorites} />
        <Stack.Screen name='orderhistory' component={OrderHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})