import { StyleSheet, Text, View, TouchableOpacity, ScrollView, } from 'react-native'
import React, { useState, useCallback } from 'react'
import Button from '../Components/Button'
import Forms from '../Components/Forms'
const Register = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passswordEnter, setPassswordEnter] = useState("")
    const handleError = useCallback(
        () => {
            if (email != '' && password != '' && passswordEnter != '') {
                alert("Your account is registered")
                setEmail('')
                setPassword('')
                setPassswordEnter('')
            }
            else {
                alert("Please enter the valid information")
            }
        },
        [email, password, passswordEnter, setEmail, setPassword, setPassswordEnter],
    )

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header_text}>Register</Text>
            </View>
            {/* <ScrollView> */}
            <View style={styles.footer}>
                <Text style={styles.footer_text}>SignIn</Text>
                <View style={styles.mt}>
                    <Forms name="Email" Placeholder="Enter email" inputValue={email} setInputValue={setEmail} />
                </View>
                <View style={styles.mt}>
                    <Forms name="Password" Placeholder="Enter passcode" inputValue={password} setInputValue={setPassword} hide={true} />
                </View>
                <View style={styles.mt}>
                    <Forms name="Password" Placeholder="Enter passcode" inputValue={passswordEnter} setInputValue={setPassswordEnter} hide={true} />
                </View>
                <View style={{ marginTop: 50 }}>
                    <TouchableOpacity onPress={handleError}>
                        <Button btnText='Register' text_Color="#5956E9" bg_color='white' />
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', }} onPress={() => { navigation.navigate('login') }}>
                        <Text style={{ color: "#5956E9" }}>Already have account?</Text>
                        <Text style={{ textDecorationLine: 'underline', color: "#5956E9" }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* </ScrollView> */}
        </View >
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5956E9",
    },
    header: {
        flex: 0.3,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header_text: {
        color: '#fff',
        fontWeight: "800",
        fontSize: 65
    },
    footer: {
        flex: 0.7,
        backgroundColor: '#fff',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 30,
        paddingVertical: 30,
    },
    footer_text: {
        fontWeight: '700',
        color: "#000000",
        fontSize: 18,
    },
    mt: {
        marginTop: 20,
    },
    row: {
        marginTop: 10,

    },


})