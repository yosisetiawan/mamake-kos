import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import { View, StyleSheet } from "react-native";
import { TabNavigator } from "react-navigation";
import Tab1 from './../Tab/Wishlist/TabOne';
import Tab2 from './../Tab/Wishlist/TabTwo';


class Wishlist extends React.Component {
  render() {
    return(
      <Container>
        
        <Tabs style={{backgroundColor: '#1baa56',borderWidth:0, shadowColor: 'transparent'}}>
          <Tab heading={ <TabHeading style={{backgroundColor: '#1baa56'}}><Text>Favorit</Text></TabHeading>}>
            <Tab1/>
          </Tab>
          <Tab heading={ <TabHeading style={{backgroundColor: '#1baa56'}}><Text>Dilihat</Text></TabHeading>}>
            <Tab2 />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

export default Wishlist;

const styles = StyleSheet.create({
    containerHome: {
          flex: 1,
          backgroundColor:'#fff',
          alignItems: 'center',
          justifyContent: 'center',
      },
  })