import React from "react";
import { StatusBar, View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5"
import AsyncStorage from '@react-native-community/async-storage'





class SplashScreen extends React.Component {

  _checkToken = async () => {
    let token = await AsyncStorage.getItem('token')
    if (token) {
      this.props.navigation.navigate('Auth')
    } else {
      this.props.navigation.navigate('Guest')
    }
  }

  componentDidMount() {
    setTimeout(this._checkToken, 3000)
  }



  render() {
    return (
      <View style={styles.containerHome}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
        <View style={{ alignItems: 'center' }}>
          <Image
            style={styles.imageLogo}
            source={require('./../assets/images/logo/mami.png')}
          />
        </View>

        <Text style={{ color: '#1baa56', fontSize: 14, textAlign: 'center', fontWeight: '500', marginTop: 10 }}>Mamake Kos</Text>

      </View>
    )
  }
}

export default SplashScreen

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderExplore: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    flex: 1,
    height: 50,
    backgroundColor: '#1baa56',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  textLogo: {
    padding: 10,
    paddingTop: 7,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 0,
  },
  imageLogo: {
    width: 90,
    height: 80,
  },
})