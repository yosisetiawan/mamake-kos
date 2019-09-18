import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { createBottomTabNavigator } from "react-navigation";



class Chat extends React.Component {
  render() {
    return(
      <View style={styles.containerHome}>
         <View style={styles.HeaderExplore}>
              <Text style={styles.textLogo}>Chat</Text>
               </View>
        <View style={{alignItems: 'center'}}>
        <Image
                style={{height:50, width:50}}
                source={require('./../../assets/images/chat.png')}
                />
        </View>

        <Text style={{fontSize:10, textAlign: 'center', fontWeight: '500', marginTop : 10}}>Belum Ada percapakan</Text>
      
      </View>
    )
  }
}

export default Chat;

const styles = StyleSheet.create({
    containerHome: {
          flex: 1,
          backgroundColor:'#fff',
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
        top:0,
        left:0,
        right:0,
    },
  ContentExplore: {
  
  
  },
  textLogo:{
      padding: 10,
      paddingTop:7,
      color: '#fff',
      fontWeight: 'bold',
      fontSize:18,
      paddingLeft: 0,
    },
    imageLogo: {
      width: 20, 
      height: 20  ,
      margin: 3,
    },
  })