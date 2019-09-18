import React, { Component } from "react";
import { FlatList, TouchableOpacity, View, Text } from "react-native";

export default class Features extends Component {
  constructor() {
    super();
  }

  _renderItem = (item, index) => (
    <TouchableOpacity key={index}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  )

  render() {
    const features = require('../../../data/fitur.js');
    return (
      <FlatList
        data={features}
        renderItem={this._renderItem}
      />
    )
  }
}
