import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated'

const Items = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../assests/Saly-17.png")} style={styles.logo} />
            </View>
            <View style={styles.footer}>
                <Text style={styles.footer_text}>Item not found</Text>
                <Text style={styles.text_footer}>Try a more generic search term or try looking for alternative products.</Text>
            </View>
        </View>
    )
}

export default Items
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.4,
        // backgroundColor: "green",
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        marginLeft: 50
    },
    footer: {
        flex: 0.17,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer_text: {
        fontWeight: "bold",
        color: "black",
        fontSize: 30
    },
    text_footer: {
        marginTop: 10,
        paddingHorizontal: 50,
    },
})