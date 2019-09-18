import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView, StyleSheet, Image, TextInput } from 'react-native'
import { Title, Button, IconButton } from 'react-native-paper'
import { connect } from 'react-redux';
import { functLogin, handlingEmail, handlingPassword }  from './../../_actions/auth'



class buttonLogin extends Component {
    render() {
        return (
            <View style={{ marginBottom: 20 }}>
                <Button mode="contained" style={styles.buttonSubmit} onPress={() => this.props.dispatch(functLogin(this.props.auth.email, this.props.auth.password))}>
                    Login
              </Button>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(buttonLogin);

const styles = StyleSheet.create({
    buttonSubmit: {
        backgroundColor: '#1baa56',
        fontWeight: "bold",
        shadowColor: "#0D47A1",
        shadowOpacity: 0.2,
        shadowOffset: {
          bottom: 2
        }
      },
})