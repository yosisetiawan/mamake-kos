import React, { Component } from 'react';
import { View, TouchableOpacity, TouchableHighlight, Dimensions, Image, Text, StyleSheet } from "react-native";
import { Paragraph } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation } from "react-navigation";

class IklanKost extends Component {
  constructor(props) {
    super(props);
  }

  toRupiah = (number) => {
    let rupiah = '';		
    let revNumber = number.toString().split('').reverse().join('');
    for(var i = 0; i < revNumber.length; i++) if(i%3 == 0) rupiah += revNumber.substr(i,3)+'.';
    return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
  }


  render() {
    const { navigate } = this.props.navigation;
    const dimensions = Dimensions.get('window');
    const item = this.props.data;
    const index = this.props.index;
    let margin = {
      marginBottom: 10
    }
    // alert(this.props.count);
    if (index == (this.props.count-1)) {
      margin = {
        marginBottom: 100
      }
    }
    
    return (
      <View keys={index} style={[styles.cardContainer, margin, { width: dimensions.width,  }]}>
        <TouchableOpacity style={{ position: 'relative', borderColor: "#aaa", borderWidth: .5, borderRadius: 5 }} onPress={() => navigate('Detail', {kostId: item.id})}>
          <Image
            // source={{ uri: item.images[0] }}
            source={{ uri: `${'https://mamake-kos.herokuapp.com/api/v1/'.replace('api/v1/', '')}${item.images.split(',')[0]}` }}
            style={styles.imageCover} />
          <TouchableHighlight style={styles.starIconContainer} >
            <View>
              <Icon name="ios-star-outline" style={{ color: '#fff' }} size={24} />
            </View>
          </TouchableHighlight>
          <View style={{ padding: 10 }}>
            <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 0 }}>
              <Text style={[styles.textDefault, { color: '#673AB7' }]}>{item.type}</Text>
              <Text style={[styles.textDefault, styles.textSeparator]}>-</Text>
              <Text style={[styles.textDefault, { color: '#4CAF50' }]}>Ada {item.rooms_avaible} Kamar</Text>
              <Text style={[styles.textDefault, styles.textSeparator]}>-</Text>
              <Text style={[styles.textDefault]}>{item.address}</Text>
            </View>
            <Text style={styles.textPrice}>{this.toRupiah(item.price)}</Text>
            <Paragraph style={styles.kostName}>{item.name}</Paragraph>
            <View style={{ flexDirection: 'row', }}>
              <Icon name="ios-clock" style={{ color: '#FFC107' }} size={13} />
              <Text style={styles.textUpdated}>
                Update {item.updated}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  imageCover: {
    flex: 1,
    height: 180,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  starIconContainer: {
    position: 'absolute',
    top: 5,
    right: 10,
  },
  textDefault: {
    fontSize: 10,
    color: '#BDBDBD'
  },
  textSeparator: {
    marginHorizontal: 5,
    marginBottom: 10
  },
  kostName: {
    color: '#333',
    fontSize: 14,
    fontWeight: "600",
    flex: 1
  },
  textPrice: {
    fontWeight: '600',
    marginTop: -5,
    fontSize: 13
  },
  textUpdated: {
    color: '#757575',
    fontSize: 10,
    flex: 1,
    marginLeft: 5,
    paddingBottom: 5
  },
})

export default withNavigation(IklanKost);
