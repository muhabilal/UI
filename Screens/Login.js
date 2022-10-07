import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useCallback } from 'react'
import Button from '../Components/Button'
import Forms from '../Components/Forms'
import { ScrollView } from 'react-native-gesture-handler'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // console.log(inputValue) error
  const handleScreen = useCallback(
    () => {
      if (email != "" && password != "") {
        navigation.navigate('search')
        setEmail('')
        setPassword('')
      } else {
        alert("Please fill the form")
      }
    },
    [email, password, setEmail, setPassword],
  )

  return (
    <View style={{ flex: 1, backgroundColor: '#5956E9' }}>
      <View style={{ flex: 0.3, backgroundColor: '#5956E9', justifyContent: 'center' }}>
        <Text style={{ color: 'white', fontSize: 60, alignSelf: 'center', }}>WellCome</Text>
        <Text style={{ color: 'white', fontSize: 60, marginLeft: 55 }}>Back</Text>
      </View >

      <View style={{ flex: 0.7, borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: 'white', paddingHorizontal: 30, paddingVertical: 30 }}>
        <Text style={styles.footer_text}>Login</Text>
        <View style={styles.mt} >
          <Forms name="Email" Placeholder="Enter email" inputValue={email} setInputValue={setEmail} />
        </View>
        <View style={styles.mt} >
          <Forms name="Password" Placeholder="Enter passcode" hide={true} inputValue={password} setInputValue={setPassword} />
        </View>
        <View style={styles.forgot}>
          <TouchableOpacity>
            <Text style={styles.text_color}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', marginTop: 40 }}>
          <TouchableOpacity onPress={handleScreen}>
            <Button btnText="Login" bg_color="white" text_Color="#5956E9" />
          </TouchableOpacity>
        </View>
        <View style={styles.account}>
          <TouchableOpacity onPress={() => { navigation.navigate("register") }}>
            <Text style={styles.text_color}>Create New Account</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View >
  )
}

export default Login

const styles = StyleSheet.create({
  footer_text: {
    fontWeight: 'bold',
    color: "black",
    fontSize: 20,
  },
  mt: {
    marginTop: 20,
  },
  forgot: {
    marginTop: 30,
  },
  text_color: {
    color: "#5956E9",
  },
  account_text: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  account: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
})