import React, { Component } from "react";
import { ScrollView, View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Title, Button, IconButton } from "react-native-paper";


export default class headerRegister extends Component {
    render() {
        return (
            <View>
                <View style={styles.closeContainer}>
                    <IconButton icon="close" color="#aaa" onPress={() => this.props.navigation.goBack()}></IconButton>
                </View>
                <View style={styles.headerContainer}>
                    <Image source={require('./../../assets/images/logo/mami.png')} style={styles.logoIcon} />
                    <Title style={styles.headerTitle}>Daftar Akun</Title>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    closeContainer: {
        position: "absolute",
        top: 10,
        right: 0
      },
      headerContainer: {
        paddingTop: 30,
        flexDirection: "column",
        justifyContent: "space-around"
      },
      logoIcon: {
        width: 50,
        height: 50,
        marginBottom: 20
      },
      headerTitle: {
        fontSize: 30
      },
      
})