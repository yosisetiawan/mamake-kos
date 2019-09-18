import React from "react";
import { ActivityIndicator, View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

class listBook extends React.Component {

  constructor() {
    super();
    this.state = {
      is_loading: true,
      booking: []
    }
  }

  componentDidMount = async () => {
    const jwt = await AsyncStorage.getItem('token');
    await axios.get(
      `${'https://mamake-kos.herokuapp.com/api/v1/'}booking`,
      { headers: { 'Authorization': 'Bearer ' + JSON.parse(jwt) } }
    )
      .then(res => {
        this.setState({
          booking: res.data,
          is_loading: false
        })
      })
      .catch(err => {
        alert(err);
      });
  }

  formatDate = (date) => {
    const monthName = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Agu", "Sep", "Okt",
      "Nov", "Des"
    ];
    date = new Date(date);
    let day = date.getDate();
    let month = date.getMonth();
    let years = date.getFullYear();

    return day + ' ' + monthName[month] + ' ' + years;
  }

  renderItem = ({ item, index }) => {

    return (
      <View key={index} style={styles.cardContainer}>
        <TouchableOpacity>
          <View style={styles.cardListBooking}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1 }}>
                <Image
                  source={{ uri: `${'https://mamake-kos.herokuapp.com/api/v1/'.replace('api/v1/', '')}${item.bookingDorm.images.split(',')[0]}` }}
                  style={styles.imageIcon} />
              </View>
              <View style={{ flex: 2, padding: 5 }}>
                <Text>{item.bookingDorm.name}</Text>
                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                  <View style={styles.detailBook}>
                    <Text style={styles.textBook}>Tgl Masuk</Text>
                    <Text style={styles.textBook}>{this.formatDate(item.date_entries)}</Text>
                  </View>
                  <View style={styles.detailBook}>
                    <Text style={styles.textBook}>Durasi Sewa</Text>
                    <Text style={styles.textBook}>{item.duration} Bulan</Text>
                  </View>
                </View>

                <View style={styles.cardStatus}>
                  <Text style={{ fontSize: 10, textAlign: 'center', color: '#1baa56' }}>Tunggu Konfirmasi</Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }


  render() {
    const { booking, is_loading } = this.state;

    return (
      <View style={styles.containerHome}>
        <View style={styles.searchBar}>
          <View style={{ flex: 1, position: 'relative' }}>
            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginTop: 5 }}>
              Booking
            </Text>
            <TouchableOpacity style={styles.touchable} onPress={() => this.props.navigation.navigate('Profil')}>
              <Icon style={{ textAlign: 'center', paddingTop: 1, }} name='ios-arrow-back' color='#fff' size={30}></Icon>
            </TouchableOpacity>
          </View>
        </View>
         {this.state.is_loading == true &&
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size="large" color="#1baa56" />
            <Text style={{ textAlign: 'center', fontSize: 12, color: '#1baa56' }}>Harap Tunggu..</Text>
          </View>
        }
        { this.state.is_loading == false && 
          <View style={{ flex: 1, paddingLeft: 5, paddingTop: 0, paddingRight: 5 }}>
            <FlatList
              data={booking}
              showsVerticalScrollIndicator={false}
              renderItem={this.renderItem}
            />
          </View>
        }
      </View>
    )
  }
}

export default listBook;

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardStatus: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: '#1baa56',
    width: '50%',
    padding: 2,
    borderRadius: 5,
  },
  cardListBooking: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#eeeeee',
    height: 100,
  },
  textBook: {
    fontSize: 12,
    color: '#bdbdbd',
  },
  detailBook: {
    flex: 1,
    marginRight: 15,
  },
  searchBar: {
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#1baa56',
    height: 60,
    marginBottom: 0,
    flexDirection: 'row'
  },
  seactInput: {
    paddingHorizontal: 40,
    padding: 5,
    height: 40,
    borderRadius: 5,
    borderColor: '#1baa56',
    backgroundColor: '#CFD8DC',
    borderWidth: 1
  },
  imageIcon: {
    width: 100,
    height: '100%',
    borderRadius: 2,
  },
  touchable: {
    position: 'absolute',
    top: 3,
    left: 10,
  },
  cardContainer: {
    marginBottom: 10,
    marginTop: 2,
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
    color: '#757575',
    fontSize: 10,
    flex: 1
  },
  textPrice: {
    fontWeight: '600',
    marginTop: -5,
    fontSize: 12
  },
  textUpdated: {
    color: '#757575',
    fontSize: 10,
    flex: 1,
    marginLeft: 5,
    paddingBottom: 5
  }
})