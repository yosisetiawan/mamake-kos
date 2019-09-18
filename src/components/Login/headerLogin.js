import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image, TextInput } from 'react-native'
import { Title, Button, IconButton } from 'react-native-paper'



export default class headerLogin extends Component {
    render() {
        return (
            <View>
                <View style={styles.closeContainer}>
                    <IconButton icon="close" color="#aaa" onPress={() => this.props.navigation.goBack()}></IconButton>
                </View>
                <View style={styles.headerContainer}>
                    <Image source={require('./../../assets/images/logo/mami.png')} style={styles.logoIcon} />
                    <Title style={styles.headerTitle}>Login Terlebih Dahulu</Title>
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
        width: 62,
        height: 62,
        marginBottom: 20
    },
    headerTitle: {
        fontSize: 30
    },

})