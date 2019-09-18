import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Button, TextInput } from "react-native";
import AsyncStorage from '@react-native-community/async-storage'
import { createBottomTabNavigator } from "react-navigation";
import { ScrollView } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { getDataUser, funcLogout, functLogout } from './../../_actions/auth'


class Profile extends React.Component {


  constructor() {
    super()
    this.state = {
      username: '',
      show: false
    }
  }

  _showAsynStorage = async () => {
    try {
      let user = await AsyncStorage.getItem('token')
      if (user != null) {
        let data = JSON.parse(user)
        // alert(data.email + ' ' + data.password)
        alert(data)
      } else {
        alert('Anda Belum Login')
      };
    } catch (err) {
      alert(err)

    }

  }

  _showAsynStorageUser = async () => {
    try {
      let user = await AsyncStorage.getItem('dataUser')
      if (user != null) {
        let data = JSON.parse(user)
        // alert(data.email + ' ' + data.password)
        console.log(data)
        console.log(this.props.auth.fullname)
      } else {
        alert('Anda Belum Login')
      };
    } catch (err) {
      alert(err)

    }

  }

  componentDidMount = () => {
    this.props.dispatch(getDataUser())
    console.log(this.props.auth.email)
    console.log(this.props.auth.logout)
  }

  componentDidUpdate = () => {
    if(this.props.auth.logout == true) {
      this.props.navigation.navigate('Guest')
    }
  }

 

  _destroyAsynStorage = async () => {
    try {
      // let dataUser = {
      //   email: '',
      //   password: '',
      //   isLogin: 0
      // }
      await AsyncStorage.setItem('token', '');
      alert('Terima kasih');
      this.props.navigation.navigate('Guest')

    } catch (err) {
      console.log(err)
      alert('asyncStorage sudah kosong')
    }
  }

  handleOpen = () => {
    this.setState({ show: true })
  }

  handleClose = () => {
    this.setState({ show: false })
  }




  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.containerHome}>
        <View>
          <ScrollView>
            <View style={styles.headerProfile}>
              <View style={{ flex: 1 }}>
                <Image
                  source={require('./../../assets/images/profile.png')}
                  style={styles.imageIcon} />
              </View>
              <View style={{ flex: 3, paddingTop: 3 }}>
                <Text style={styles.namaProfil}>{this.props.auth.fullname}</Text>
                <Text style={styles.notelepon}>{this.props.auth.phone}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <TouchableOpacity>
                  <Text style={styles.btnEditPro}>Edit Profil</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ position: 'relative', flex: 1, }}>
              <View style={styles.headerRadius}>

              </View>
              <View style={styles.cardNav}>
                <View style={{ paddingLeft: 15, paddingRight: 15, paddingTop: 5 }}>
                  <Text style={{ fontSize: 12, marginBottom: 5, color: '#1baa56', fontWeight: 'bold' }}>Profil saya</Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 1, marginTop: 10, }}>
                  <TouchableOpacity style={{ flex: 1 }} onPress={() => navigate('kontrakSaya')}>
                    <Icon name="file-alt" style={{ textAlign: 'center' }} size={28} color={'#1baa56'}></Icon>
                    <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 10, color: '#1baa56' }}>Kontrak</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 1 }}>
                    <Icon name="list-ul" style={{ textAlign: 'center' }} size={28} color={'#1baa56'}></Icon>
                    <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 10, color: '#1baa56' }}>Tagihan</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 1 }}>
                    <Icon name="hammer" style={{ textAlign: 'center' }} size={28} color={'#1baa56'}></Icon>
                    <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 10, color: '#1baa56' }}>Komplain perbaikan</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 1 }}>
                    <Icon name="store" style={{ textAlign: 'center' }} size={28} color={'#1baa56'}></Icon>
                    <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 10, color: '#1baa56' }}>Toko</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <TouchableOpacity onPress={() => navigate('ListBookPage')}>
              <View style={styles.cardProf}>
                <Icon name="clock" style={{ textAlign: 'center', }} size={20} color={'#1baa56'}></Icon>
                <Text style={{ textAlign: 'left', marginTop: 3, marginLeft: 5, fontSize: 10, color: '#1baa56' }}>Daftar Booking</Text>

              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigate('ListIklanPage')}>
              <View style={styles.cardProf}>
                <Icon name="ad" style={{ textAlign: 'center', }} size={20} color={'#1baa56'}></Icon>
                <Text style={{ textAlign: 'left', marginTop: 3, marginLeft: 5, fontSize: 10, color: '#1baa56' }}>Daftar Iklan</Text>

              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => this.props.navigation.navigate('ListPemesanan')}>
              <View style={styles.cardProf}>
                <Icon name="user-circle" style={{ textAlign: 'center', }} size={20} color={'#1baa56'}></Icon>
                <Text style={{ textAlign: 'left', marginTop: 3, marginLeft: 5, fontSize: 10, color: '#1baa56' }}>Daftar Pesanan</Text>

              </View>
            </TouchableOpacity>


          

            <View style={{ marginTop: 10 }}>
              <TouchableOpacity onPress={this._showAsynStorageUser} >
                <View style={styles.cardProfbot}>
                  <Icon name="wrench" style={{ textAlign: 'center', }} size={20} color={'#1baa56'}></Icon>
                  <Text style={{ textAlign: 'left', marginTop: 3, marginLeft: 5, fontSize: 10, color: '#1baa56' }}>Pengaturan</Text>

                </View>
              </TouchableOpacity>

              {/* <TouchableOpacity onPress={this._showAsynStorage}>
                <View style={styles.cardProfbot}>
                  <Icon name="info-circle" style={{ textAlign: 'center', }} size={20} color={'#1baa56'}></Icon>
                  <Text style={{ textAlign: 'left', marginTop: 3, marginLeft: 5, fontSize: 10, color: '#1baa56' }}>Show AsyncStorage</Text>

                </View>
              </TouchableOpacity> */}

              <TouchableOpacity onPress={() => this.props.dispatch(functLogout())}>
                <View style={styles.cardProfbot}>
                  <Icon name="power-off" style={{ textAlign: 'center', }} size={20} color={'#1baa56'}></Icon>
                  <Text style={{ textAlign: 'left', marginTop: 3, marginLeft: 5, fontSize: 10, color: '#1baa56' }}>Log Out</Text>

                </View>
              </TouchableOpacity>
            </View>


          </ScrollView>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Profile);


const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#eee',
  },
  btnEditPro: {
    color: '#fff',
    fontSize: 10,
    textAlign: 'right',
    paddingRight: 2,
  },
  headerProfile: {
    backgroundColor: '#1baa56',
    height: 70,
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 25,
    paddingRight: 25,
    flexDirection: 'row'
  },
  cardNav: {
    flex: 1,
    height: 110,
    backgroundColor: '#fff',
    borderRadius: 10,
    position: 'relative',
    marginTop: -50,
    marginHorizontal: 20,
    padding: 5,
  },
  imageIcon: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  cardProf: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    marginHorizontal: 20,
    marginTop: 10,
  },
  cardProfbot: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    marginHorizontal: 20,
  },
  headerRadius: {
    backgroundColor: '#1baa56',
    height: 70,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,

  },
  namaProfil: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  notelepon: {
    color: '#fff',
    fontSize: 10,
  }
})