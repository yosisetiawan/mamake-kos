import React, { Component } from "react";
import { ScrollView, View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { Title, Button, IconButton } from "react-native-paper";
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'

// import component 
import HeaderRegister from './../../components/Register/headerRegister'
import FormGroup from './../../components/Register/formRegister'
import ButtonRegister from "../../components/Register/buttonRegister";
import LinkRedirect from "../../components/Register/linkRedirectLogin"

import { connect } from 'react-redux'
import { functRegister, handlingEmail, handlingPassword, handlingFullname, handlingPhone } from './../../_actions/auth'

class SignupScreen extends Component {
  constructor() {
    super();
   
  }


  

  componentDidUpdate(){
    if(this.props.auth.berhasildaftar == true) {
      this.props.navigation.navigate('Auth')
    }
    
  }

  render() {

    return (


      <ScrollView style={styles.mainContainer}>
        <HeaderRegister navigation={this.props.navigation} />
        <FormGroup/>
        <ButtonRegister/>
        <LinkRedirect navigation={this.props.navigation} />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      auth: state.auth
  }
}

export default connect(mapStateToProps)(SignupScreen);

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20
  },


  floatLeft: {
    flex: 1,
    alignItems: "stretch",
    flexDirection: "row",
    alignItems: "flex-start"
  },
});


