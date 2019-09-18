import React from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'


export default class TextInputIklan extends React.Component {
    constructor(props) {
        super(props);
    }
   
    render() {
        const {placeholder, _handleChange, namaValue, value, keyboardType} = this.props
        return (
            <View>
                <TextInput 
                    style={styles.inputStyle}
                    value={value} 
                    onChangeText={this.props._handleChange(namaValue)} 
                    placeholder={placeholder} 
                    underlineColor="#1baa56" 
                    underlineColorAndroid="#1baa56" 
                    selectionColor="#1baa56" 
                    placeholderTextColor="#D3D3D3"
                    keyboardType={keyboardType || "default"}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    inputStyle: {
        height: 50,
        borderWidth: 0,
        backgroundColor: '#fff',
        borderBottomColor: '#1baa56',
    },
})
