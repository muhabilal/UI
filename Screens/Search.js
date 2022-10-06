import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Search = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* <View style={styles.header}>
                <TextInput
                    style={styles.search}
                    placeholder="search"
                />
            </View> */}
            <View style={styles.text_size}>
                <TouchableOpacity onPress={() => { navigation.navigate('items') }}>
                    <Text style={styles.text}>Found 6 results</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.text_size}>
                <TouchableOpacity onPress={() => { navigation.navigate('fav') }}>
                    <Text style={styles.text}>Fav.</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.text_size}>
                <TouchableOpacity onPress={() => { navigation.navigate('orderhistory') }}>
                    <Text style={styles.text}>History</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
        paddingHorizontal: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    search: {
        borderColor: "#5956E9",
        borderWidth: 1,
        borderRadius: 40,
        width: '80%',
        height: 40,
        paddingHorizontal: 20
    },
    text_size: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: "center"
    },
    text: {
        color: "black",
        fontWeight: "bold",
        fontSize: 30,
    },
})