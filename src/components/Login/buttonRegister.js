import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image, TextInput } from 'react-native'
import { Title, Button, IconButton } from 'react-native-paper'



export default class buttonRegister extends Component {
    render() {
        return (
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text style={{ color: '#aaa' }}>Belum Punya akun? </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUpModal')}>
                    <Text style={{ color: "#1baa56", marginLeft: 1 }}>Daftar disini</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
