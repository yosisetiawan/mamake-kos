import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

class TabOne extends React.Component {
  render() {
    return(
      <View style={styles.containerHome}>
       <View style={{alignItems: 'center'}}>
        <Image
                style={{height:50, width:50}}
                source={require('./../../../assets/images/house.png')}
                />
        </View>

        <Text style={{fontSize:10, textAlign: 'center', fontWeight: '500', marginTop : 10}}>Belum ada kos impian anda saat ini</Text>
        <Text style={{fontSize:10, textAlign: 'center', color: '#9E9E9E', marginTop : 10, marginBottom:10}}>Silahkan anda cari di list kos untuk menambahkan kos impian</Text>
          <View style={{paddingLeft:75, paddingRight:75}}>
          <Button
             title="Cari"
             color="#1baa56"
             style={{flex:1, marginLeft:10, marginRight:10, fontSize: 10}}/>  
          </View>                 
      </View>
    )
  }
}

export default TabOne;

const styles = StyleSheet.create({
    containerHome: {
          flex: 1,
          backgroundColor:'#fff',
          padding:30,
          justifyContent: 'center',
      },
  })