import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image, TextInput } from 'react-native'
import { Title, Button, IconButton } from 'react-native-paper'
import { connect } from 'react-redux';
import { functLogin, handlingEmail, handlingPassword } from './../../_actions/auth'


class formLogin extends Component {
    render() {
        return (
            <View>
                <View style={styles.formGroup}>
                    <Text style={styles.textLabel}>Email </Text>
                    <TextInput value={this.props.auth.email} onFocus={this.onFocusChange} name="email" onChangeText={(email) => this.props.dispatch(handlingEmail(email))} style={styles.inputStyle} placeholder='Masukkan Email / No. Telp Disini' underlineColor="#1baa56" underlineColorAndroid="#1baa56" selectionColor="#1baa56" autoCapitalize="none" />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.textLabel}>Password </Text>
                    <TextInput value={this.props.auth.password} onFocus={this.onFocusChange} name="password" onChangeText={(password) => this.props.dispatch(handlingPassword(password))} style={styles.inputStyle} secureTextEntry={true} placeholder='*************' underlineColor="#1baa56" underlineColorAndroid="#1baa56" selectionColor="#1baa56" autoCapitalize="none" />
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

export default connect(mapStateToProps)(formLogin);

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