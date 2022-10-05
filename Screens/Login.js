import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Login = ({ navigation }) => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Welcome back</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footer_text}>Login</Text>
        <View style={styles.mt}>
          <Text>Email</Text>
          <TextInput
            style={styles.size}
            placeholder='Enter Your Email'
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.mt}>
          <Text>Password</Text>
          <TextInput
            style={styles.size}
            secureTextEntry={true}
            placeholder='Enter Passcode'
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <View style={styles.forgot}>
          <TouchableOpacity>
            <Text style={styles.forgot_text}>Forgot Passcode?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.setbtn}>
          <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('search') }}>
            <Text style={styles.text_color}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.account_text}>
          <TouchableOpacity onPress={() => navigation.navigate('register')}>
            <Text style={styles.forgot_text}> Create New Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5956E9"
  },
  header: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  header_text: {
    color: '#fff',
    fontWeight: "bold",
    fontSize: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  footer_text: {
    fontWeight: 'bold',
    color: "black",
  },
  mt: {
    marginTop: 20,
  },
  size: {
    borderBottomWidth: 1,
    height: 40
  },
  forgot: {
    marginTop: 15,
  },
  forgot_text: {
    color: "#5956E9",
  },
  setbtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  button: {
    backgroundColor: "#5956E9",
    height: 40,
    width: '50%',
    borderRadius: 5,
    justifyContent: "center",
    alignItems: 'center',
  },
  text_color: {
    color: '#fff',
    fontWeight: "bold",
  },
  account_text: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

})