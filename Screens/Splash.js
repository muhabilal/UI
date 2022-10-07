import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Button from '../Components/Button'
import { useWindowDimensions } from 'react-native'
const Splash = ({ navigation }) => {
    // const { height, width } = useWindowDimensions();
    const { width: windowWidth, height: windowHeight } = useWindowDimensions();
    return (
        <View style={styles.conatiner}>
            <View style={styles.header}>
                <Text style={{ color: 'white', fontSize: 60, }}>Find your</Text>
                <Text style={{ color: 'white', fontSize: 60, }}>Gadget</Text>
            </View>
            <View style={styles.footer}>
                <Image source={require("../assests/logo.png")} style={[styles.image, {
                    // width: windowWidth,
                    // height: windowHeight
                }]} />
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => { navigation.navigate('login') }}>
                    <Button btnText='Get Started' text_Color='white' bg_color='#5956E9' />
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
        flex: 0.3,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    footer: {
        flex: 0.5,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        height: 300,
        width: 300
        // width: windowWidth,
        // height: windowHeight,
    },
    button: {
        flex: 0.2,
        justifyContent: 'center'
    },
})