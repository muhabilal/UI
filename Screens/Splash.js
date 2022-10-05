import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Splash = ({ navigation }) => {
    return (
        <View style={styles.conatiner}>
            <View style={styles.header}>
                <Text style={styles.header_text} >Find your Gadget </Text>
            </View>
            <View style={styles.footer}>
                <Image source={require('../assests/logo.png')} style={styles.image} />
            </View>
            <View style={styles.size}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("login")}>
                    <Text style={styles.text_color}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: "#5956E9",
    },
    header: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    header_text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 50,

    },
    footer: {
        paddingHorizontal: 35,
        paddingVertical: 10,
    },
    image: {
        height: 250,
        width: '100%',
    },
    size: {
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "#fff",
        height: 40,
        width: '50%',
        borderRadius: 5,
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 30,
    },
    text_color: {
        color: '#5956E9',
        fontWeight: "bold",

    },
})