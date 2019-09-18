import React, { Component } from "react";
import { FlatList, View, Text } from "react-native";
import { IconButton } from "react-native-paper";

const allFeatures = require('../../data/fitur.json');

export default class KostFeatures extends Component {
  constructor() {
    super();
  }

  fetchKostFeatures = () => {
    const items = this.props.items.split(',');
    let kostFeatures = [];
    for (const fitur of allFeatures) {
      items.map(fiturName => {
        if (fitur.name == fiturName) {
          kostFeatures.push(fitur)
        }
      });
    }
    return kostFeatures;
  }

  renderKostFitur = (item, index) => (
    <View keys={index} style={this.props.itemStyle}>
      <IconButton icon={item.item.icon} color="#1baa56" size={this.props.size} />
      <Text>{this.props.text ? item.item.name : ''}</Text>
    </View>
  )
  
  render() {
    const features = this.fetchKostFeatures();
    return (
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={features}
        renderItem={this.renderKostFitur}
        style={this.props.style}
        keyExtractor={item => item.name}
      />
    )
  }
}
