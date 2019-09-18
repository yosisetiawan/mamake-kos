import React, { Component } from "react";
import { ScrollView, View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Title, Button, IconButton } from "react-native-paper";
import { connect } from 'react-redux'
import { functRegister, handlingEmail, handlingPassword, handlingFullname, handlingPhone, handlingconfPassword } from './../../_actions/auth'


class formRegister extends Component {
    render() {
    
        return (
            <View>

                <View style={styles.formGroup}>
                    <Text style={styles.textLabel}>Nama Lengkap</Text>
                    <TextInput onFocus={this.onFocusChange} style={styles.inputStyle} onChangeText={(fullname) => this.props.dispatch(handlingFullname(fullname))} placeholder='Masukkan Nama Lengkap Disini' autoCapitalize="words" underlineColor="#1baa56" underlineColorAndroid="#1baa56" selectionColor="#1baa56" />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.textLabel}>Email </Text>
                    <TextInput onFocus={this.onFocusChange} style={styles.inputStyle} onChangeText={(email) => this.props.dispatch(handlingEmail(email))} placeholder='Masukkan Alamat Email Disini' autoCapitalize="none" underlineColor="#1baa56" underlineColorAndroid="#1baa56" selectionColor="#1baa56" />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.textLabel}>No. Telp  </Text>
                    <TextInput onFocus={this.onFocusChange} style={styles.inputStyle} onChangeText={(phone) => this.props.dispatch(handlingPhone(phone))} keyboardType={'numeric'} placeholder='Masukkan No. Telp Disini' underlineColor="#1baa56" underlineColorAndroid="#1baa56" selectionColor="#1baa56" />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.textLabel}>Password </Text>
                    <TextInput onFocus={this.onFocusChange} style={styles.inputStyle} onChangeText={(password) => this.props.dispatch(handlingPassword(password))} secureTextEntry={true} placeholder='*************' autoCapitalize="none" underlineColor="#1baa56" underlineColorAndroid="#1baa56" selectionColor="#1baa56" />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.textLabel}>Confirmation Password </Text>
                    <TextInput onFocus={this.onFocusChange} style={styles.inputStyle} onChangeText={(confpassword) => this.props.dispatch(handlingconfPassword(confpassword))} secureTextEntry={true} placeholder='*************' autoCapitalize="none" underlineColor="#1baa56" underlineColorAndroid="#1baa56" selectionColor="#1baa56" />
                </View>
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(formRegister);


const styles = StyleSheet.create({
    formGroup: {
        paddingVertical: 5
    },
    textLabel: {
        fontSize: 12,
        fontWeight: '500',
        marginTop: 10
    },
    inputStyle: {
        height: 50,
        borderWidth: 0,
        backgroundColor: '#fff',
        borderBottomColor: '#1baa56',
    },
})