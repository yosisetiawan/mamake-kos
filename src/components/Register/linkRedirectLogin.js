import React, { Component } from "react";
import { ScrollView, View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Title, Button, IconButton } from "react-native-paper";

export default class linkRedirectLogin extends Component {
    render() {
        return (
            <View style={{ marginBottom: 30, flexDirection: "row", justifyContent: "center" }}>
                <Text style={{ color: '#aaa' }}>Sudah punya akun? </Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginModal')}>
                    <Text style={{ color: "#1baa56", marginLeft: 1 }}>Login disini</Text>
                </TouchableOpacity>
            </View>
        )
    }
}