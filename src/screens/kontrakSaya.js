import React from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5"



class kontrakSaya extends React.Component {
  render() {
    return (
      <View style={styles.containerHome}>
        <View style={styles.HeaderExplore}>
          <Text style={styles.textLogo}>Kost Saya</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
         <Icon name="home" color={"#1baa56"} size={32}></Icon>
        </View>

        <Text style={{ fontSize: 10, textAlign: 'center', fontWeight: '500', marginTop: 10 }}>Belum Ada Booking Kost yang Kamu Tambahkan</Text>
        <TouchableOpacity>
          <View style={{ backgroundColor: '#1baa56', padding: 10, margin: 10, borderRadius: 5 }}>
            <Text style={{ textAlign: 'center', color: '#fff' }}>Cari Kost</Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}

export default kontrakSaya;

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderExplore: {
    padding: 5,
    flexDirection: 'row',
    flex: 1,
    height: 50,
    backgroundColor: '#1baa56',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  ContentExplore: {


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
    width: 20,
    height: 20,
    margin: 3,
  },
})