import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const OrderHistory = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../assests/Saly-11.png")} style={styles.img} />
            </View>
            <View style={styles.footer}>
                <Text style={styles.footer_text}>No history yet</Text>
                <Text style={styles.text_footer}>Hit the orange button down</Text>
                <Text style={styles.text_footer}> below to Create an order</Text>
                <View style={{ marginTop: 30 }}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: "white" }}>Start ordering</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default OrderHistory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red'
    },
    header: {
        flex: 0.5,
        backgroundColor: "green",
    },
    img: {
        flex: 1,
        width: 250,
        height: 250,
        alignSelf: 'center'
    },
    footer: {
        // backgroundColor: 'red',
        flex: 0.3,
        alignItems: 'center',
        marginTop: 10,
    },
    footer_text: {
        color: '#000000',
        // lineHeight: 33,
        fontWeight: "600",
        fontSize: 28,
    },
    text_footer: {
        color: '#000000',
        opacity: 0.57,
    },
    button: {
        backgroundColor: "#58C0EA",
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
    },



})