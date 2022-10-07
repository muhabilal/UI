import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Forms = (props) => {
    const Name = props.name
    const P_holder = props.Placeholder
    const secure = props.hide
    const Value = props.inputValue
    const setValue = props.setInputValue
    return (
        <ScrollView>
            <View>
                <Text style={{ color: 'black' }}>{Name}</Text>
                <TextInput
                    style={styles.size}
                    placeholder={P_holder}
                    secureTextEntry={secure}
                    value={Value}
                    onChangeText={setValue}
                />
            </View>
        </ScrollView>
    )
}

export default Forms

const styles = StyleSheet.create({
    size: {
        borderBottomWidth: 1,
        height: 40,
    }
})