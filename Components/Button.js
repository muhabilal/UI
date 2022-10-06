import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = (props) => {
    const text = props.btnText
    const textColor = props.text_Color
    const bgColor = props.bg_color
    return (
        <View style={[styles.button, {
            backgroundColor: bgColor == '#5956E9' ? 'white' : '#5956E9',
        }]}>
            <Text style={[styles.btn_text, {
                color: textColor == 'white' ? '#5956E9' : 'white',
            }]}>{text}</Text>
        </View>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: '80%',
        borderRadius: 5,
        alignSelf: 'center'
    },
    btn_text: {
        fontWeight: "bold",
    }
})