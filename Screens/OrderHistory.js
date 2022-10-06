import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const OrderHistory = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../assests/Saly-11.png")} />
            </View>
            <View style={styles.footer}>
                <Text>Hello</Text>
            </View>
        </View>
    )
}

export default OrderHistory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    header: {
        flex: 0.6,
        backgroundColor: "green",
    },
    footer: {
        flex: 0.2
    },
})