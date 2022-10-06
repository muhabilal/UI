import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../Components/Button'

const Splash = ({ navigation }) => {
    return (
        <View style={styles.conatiner}>
            <View style={styles.header}>
                <Text style={{ color: 'white', fontSize: 60, }}>Find your</Text>
                <Text style={{ color: 'white', fontSize: 60, }}>Gadget</Text>
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
        flex: 0.3,
        backgroundColor: 'red',
        justifyContent: 'center',
    }
})