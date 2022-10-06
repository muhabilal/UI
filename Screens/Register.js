import { StyleSheet, Text, View, TextInput, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import Button from '../Components/Button'
import Forms from '../Components/Forms'
const Register = ({ navigation }) => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [passswordEnter, setPassswordEnter] = useState("")
    console.log(name)
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header_text}>Register</Text>
            </View>
            <View style={styles.footer}>

                <Text style={styles.footer_text}>SignUp</Text>
                <View style={styles.mt}>
                    {/* <Text>Email</Text>
                    <TextInput
                        style={styles.size}
                        placeholder='Enter Your Email'
                        value={name}
                        onChangeText={setName}
                    /> */}
                    <Forms name="Email" Placeholder="Enter email" />
                </View>
                <View style={styles.mt}>
                    {/* <Text>Password</Text>
                    <TextInput
                        style={styles.size}
                        secureTextEntry={true}
                        placeholder='Enter Passcode'
                        value={password}
                        onChangeText={setPassword}
                    /> */}
                    <Forms name='Password' Placeholder='Enter Passcode' hide={true} />
                </View>
                <View style={styles.mt}>
                    {/* <Text>Password</Text>
                    <TextInput
                        style={styles.size}
                        secureTextEntry={true}
                        placeholder='Enter Passcode'
                        value={passswordEnter}
                        onChangeText={setPassswordEnter}
                    /> */}
                    <Forms name='Password' Placeholder='Enter Passcode' hide={true} />
                </View>
                <View style={styles.setbtn}>
                    <TouchableOpacity>
                        <Button btnText="Register" bg_color="white" text_Color="#5956E9" />
                    </TouchableOpacity>
                </View>
                <View style={styles.account_text}>
                    <TouchableOpacity onPress={() => { navigation.navigate("login") }}>
                        <Text style={styles.forgot_text}> Already have account? Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5956E9",
    },
    header: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 30,
    },
    header_text: {
        color: '#fff',
        fontWeight: "bold",
        fontSize: 50,
        marginTop: 30,
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
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
    forgot_text: {
        color: "#5956E9",
    },
    setbtn: {
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 30,
        marginLeft: 80
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