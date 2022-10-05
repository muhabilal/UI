import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Favorites = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../assests/Sally-4.png')} style={styles.img} />
            </View>
            <View style={styles.footer}>
                <Text style={styles.footer_text}>No favorites yet</Text>
                <Text style={styles.text_footer}>Hit the orange button down
                    below to Create an order</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.btnColor}>Start ordering</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Favorites

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        marginRight: 10,
        height: 350,
        width: '80%'
    },
    footer: {
        flex: 0.5,
        alignItems: 'center',
    },
    footer_text: {
        fontWeight: "bold",
        color: "black",
        fontSize: 30,
    },
    text_footer: {
        paddingHorizontal: 70,
        paddingVertical: 5,
    },
    button: {
        backgroundColor: "#58C0EA",
        height: 40,
        width: '50%',
        borderRadius: 5,
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 10,
    },
    btnColor: {
        color: 'white',
        fontWeight: 'bold'
    }
})