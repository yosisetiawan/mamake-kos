import React, { Component } from "react";
import { ActivityIndicator, Text, ScrollView, View, StyleSheet, TouchableOpacity, Dimensions, Share, Image } from "react-native";
import axios from "axios";

import Icon from "react-native-vector-icons";
import { IconButton, Title, Subheading, Paragraph, Appbar } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
// import { withNavigation } from "react-navigation";
import Modal from "react-native-modal";

import ImageSlider from "../components/ImageSlider";
import Maps from "../components/Maps";
import KostFeatures from "../components/KostFeatures";
const { width } = Dimensions.get('window');

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowImage: true,
      isShowMaps: false,
      showImageColor: "#1baa56",
      showMapsColor: "white",
      width: width,
      modalVisible: "",
      loading: true,
      kost: {},
      otherKost: []
    }
  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          `${'https://mamake-kos.herokuapp.com/api/v1/'}dorms/${this.props.navigation.getParam('kostId')}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          alert('Kamar kost disebarkan')
        }
      } else if (result.action === Share.dismissedAction) {
        alert('Batal berbagi');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  _showImage = () => {
    this.setState({
      isShowImage: true,
      isShowMaps: false,
      showImageColor: "#1baa56",
      showMapsColor: "white"
    })
  }

  _showMaps = () => {
    this.setState({
      isShowImage: false,
      isShowMaps: true,
      showImageColor: "white",
      showMapsColor: "#1baa56"
    })
  }

  _renderShowImage = (images) => {
    images = images.split(',');
    let imagesArray = [];
    images.map(imgUri => {
      imagesArray.push({
        src: { uri: `${'https://mamake-kos.herokuapp.com/api/v1/'.replace('api/v1/', '')}${imgUri}` }
      });
    })
    return (
      <ImageSlider
        photos={imagesArray}
      />
    )
  }

  changeRegion = () => {
    console.log('asd');
  }

  _renderShowMpas = (coordinate, placeName) => {
    const { latitude, longitude } = coordinate
    console.log(latitude, longitude)
    return (
      <Maps
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        height={200}
        title={placeName}
        changeRegion={this.changeRegion}
      />
    )
  }

  toRupiah = (number) => {
    let rupiah = '';
    let revNumber = number.toString().split('').reverse().join('');
    for (var i = 0; i < revNumber.length; i++) if (i % 3 == 0) rupiah += revNumber.substr(i, 3) + '.';
    return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
  }

  componentDidMount = () => {
    const id = this.props.navigation.getParam('kostId');
    axios.get('https://mamake-kos.herokuapp.com/api/v1/' + 'dorms/' + id)
      .then(res => {
        this.setState({
          kost: res.data.detailDorm,
          otherKost: res.data.otherDorms,
          loading: false
        })
      })
      .catch(err => {
        alert(err.toString());
      });
  }


  render() {
    let { navigate, goBack, push } = this.props.navigation;
    const kost = this.state.kost;
    // const kost = getParam('kost');
    // const kost = require('../../data/kosts.json')[0];
    // const kost = this.getDataKost();
    // alert(kost.name);
    // alert(this.state.loading);
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="#1baa56" />
          <Text style={{ textAlign: 'center', fontSize: 12, color: '#1baa56' }}>Mengambil Data Kost</Text>
        </View>
      )
    }

    return (
      <View style={{ flex: 1 }}>
        <Appbar.Header style={{ backgroundColor: "#1baa56" }}>
          <Appbar.BackAction onPress={() => goBack()} />
          <Appbar.Content title="Detail Kost" />
          <Appbar.Action icon="favorite-border" />
          <Appbar.Action icon="share" onPress={this.onShare} />
        </Appbar.Header>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.bannerSection}>
            <View style={{ flex: 4, width: this.state.width }}>
              {this.state.isShowImage ? this._renderShowImage(kost.images) : this._renderShowMpas(kost, kost.full_adress)}
            </View>
            <View style={[styles.bannerControlContainer]}>
              <TouchableOpacity style={[styles.buttonBannerController]} onPress={this._showImage}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                  <IconButton icon="image" color={this.state.showImageColor} />
                  <Text style={[styles.buttonBannerControllerText, { color: `${this.state.showImageColor}` }]}>Gambar</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.buttonBannerController, { alignItems: "flex-start", marginLeft: 50 }]} onPress={this._showMaps}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                  <IconButton icon="place" color={this.state.showMapsColor} />
                  <Text style={[styles.buttonBannerControllerText, { color: `${this.state.showMapsColor}` }]}>Peta</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.InfoContainer, { marginBottom: 10 }]}>
            <View style={styles.primaryInfo}>
              <View style={styles.floatLeft}>
                <Text style={styles.category}>{kost.type} </Text><Text> - </Text><Text style={styles.roomAvaible}>Ada {kost.rooms_avaible} Kamar - </Text><Text>{kost.city}</Text>
              </View>
              <Title style={styles.titleNormalize}>{kost.name}</Title>
              <Text style={styles.updated}>Update {kost.updated}</Text>
            </View>
            {/* <View style={styles.premium}>
              <IconButton icon="star-border" color="#1baa56" size={30} />
            </View> */}
          </View>
          <View style={[styles.floatLeft, styles.contentSection, styles.bordered]}>
            {/* <Text style={{alignItems: "center"}}>Tidak termasuk listrik</Text>
            <Text style={{alignItems: "center"}}>Tidak ada min. bayar</Text> */}
          </View>
          <View style={styles.contentSection}>
            <Subheading style={styles.titleNormalize}>Luas Kamar</Subheading>
            <View style={[styles.floatLeft, styles.justifyCenter, { height: 50 }]}>
              <IconButton icon="zoom-out-map" color="#1baa56" size={30} style={{ marginLeft: -0 }} />
              <Paragraph style={{ marginLeft: 10, marginTop: 12 }}>
                {kost.width} x {kost.lenght} m
              </Paragraph>
            </View>
          </View>
          <View style={styles.contentSection}>
            <Subheading style={styles.titleNormalize}>Fasilitas Kamar</Subheading>
            <KostFeatures
              items={kost.features}
              size={24}
              style={[styles.InfoContainer, { height: 75, marginLeft: -15 }]}
              itemStyle={styles.fiturKostContainer}
              text={true}
            />
          </View>
          <View style={styles.contentSection}>
            <Subheading style={styles.titleNormalize}>Deskripsi Kost</Subheading>
            <Paragraph>{kost.desc}</Paragraph>
          </View>
          {/* <View style={styles.contentSection}>
            <Subheading style={styles.titleNormalize}>Kost Menarik Lainnya</Subheading>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={[styles.InfoContainer, { marginHorizontal: -15 }]}>
              {this.state.otherKost && this.state.otherKost.map(item => (
                <TouchableOpacity onPress={() => push('Detail', {kostId: item.id})}>
                  <View style={styles.anotherKostContainer}>
                    <View style={styles.kostImageContainer}>
                      <Image
                        source={{ uri: `${'https://mamake-kos.herokuapp.com/api/v1/'.replace('api/v1/', '')}${item.images.split(',')[0]}` }}
                        style={styles.kostImage} />
                    </View>
                    <View style={styles.otherKostDesc}>
                      <Text style={styles.anotherKostName}>{item.name}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
              <View style={{ width: 15 }}></View>
            </ScrollView>
          </View> */}
        </ScrollView>
        <View style={styles.footerContainer}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={styles.price}>{this.toRupiah(kost.price)} / bulan</Text>
          </View>
          <View style={[styles.bookContainer, { flex: 1 }]}>
            <TouchableOpacity color="#1baa56" style={[styles.buttonOUtline, { flex: 1, textAlign: "center" }]} onPress={() => this.setState({ modalVisible: "kostContact" })}>
              <Text style={{ textAlign: "center", color: "#1baa56" }}>Hubungi Kost</Text>
            </TouchableOpacity>
            <TouchableOpacity color="#1baa56" style={[styles.buttonContained, { flex: 1, textAlign: "center" }]} onPress={() => navigate('Booking', { kost: kost })}>
              <Text style={{ textAlign: "center", color: "#fff" }}>Booking</Text>
            </TouchableOpacity>
            <Modal isVisible={this.state.modalVisible === "kostContact"} style={styles.modalContainer} propagateSwipe={true}>
              <View style={styles.modalContent}>
                <Appbar.Header style={styles.modalHeader}>
                  <Appbar.Content title="Pemilik Kost" />
                  <Appbar.Action icon="close" onPress={() => this.setState({ modalVisible: "" })} />
                </Appbar.Header>
                <View>
                  <View style={[styles.floatLeft]}>
                    <View style={{ flex: 1 }}>
                      <Text>Nama Pemilik: {kost.dormOwner.fullname} </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-start" }}>
                      {/* <Text style={{fontWeight: "700"}}>{kost.owner.name}</Text> */}
                    </View>
                  </View>
                  <View style={[styles.floatLeft]}>
                    <View style={{ flex: 1 }}>
                      <Text>Telp Pemilik: {kost.dormOwner.phone}  </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-start" }}>
                      {/* <Text style={{fontWeight: "700"}}>{kost.owner.phone}</Text> */}
                    </View>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "#fafafa",
    zIndex: 1
  },
  bannerSection: {
    height: 250,
    flexDirection: "column",
    backgroundColor: Colors.light,
    position: "relative"
  },
  header: {
    backgroundColor: "transparent",
    flex: 1,
  },
  bannerControlContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: Colors.dark
  },
  buttonBannerController: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  buttonBannerControllerText: {
    justifyContent: "center",
    marginTop: 15,
  },
  InfoContainer: {
    flexDirection: "row",
  },
  contentSection: {
    padding: 15,
    alignItems: "flex-start",
    justifyContent: "space-around",
  },
  primaryInfo: {
    flex: 4,
    padding: 15,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  category: {
    color: "#f50057"
  },
  roomAvaible: {
    fontSize: 14,
    color: "#00c853"
  },
  titleNormalize: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 20
  },
  updated: {
    fontSize: 12,
    color: '#aaa'
  },
  premium: {
    flex: 1,
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  bordered: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    borderTopColor: '#ddd',
    borderTopWidth: 1
  },
  textStandart: {
    fontSize: 14,
    fontWeight: "300"
  },
  floatLeft: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingTop: 10,
    paddingBottom: 10
  },
  iconColorTheme: {
    margin: 0,
    padding: 0,
    fontSize: 14,
    color: '#1baa56',
  },
  justifyCenter: {
    justifyContent: "center"
  },
  fiturKostContainer: {
    height: 20,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "space-between"
  },
  footerContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "center",
    borderColor: "#ddd",
    borderRadius: 10,
    borderWidth: 1,
    margin: 5
  },
  price: {
    fontWeight: "bold"
  },
  bookContainer: {
    flexDirection: "row"
  },
  buttonOUtline: {
    alignItems: "center",
    borderColor: "#1baa56",
    borderRadius: 10,
    borderWidth: 2,
    marginRight: 5,
    paddingVertical: 5,
    justifyContent: "center"
  },
  buttonContained: {
    backgroundColor: "#1baa56",
    borderRadius: 10,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  anotherKostContainer: {
    marginTop: 10,
    paddingLeft: 15,
    elevation: 1,
    position: 'relative'
  },
  kostImageContainer: {
    width: 200,
    height: 120,
    borderWidth: 0.5,
    borderColor: "#dddddd",
    borderColor: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  kostImage: {
    flex: 1,
    height: null,
    width: null,
    borderRadius: 5
  },
  otherKostDesc: {
    backgroundColor: '#909090'
  },
  anotherKostName: {
    color: '#fff',
    position: 'absolute',
    bottom: 3,
    fontSize: 16,
    fontWeight: "600",
    left: 15,
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  modalContent: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 20,
    width: width / 1.5,
    borderRadius: 10
  },
  modalHeader: {
    backgroundColor: "#fff",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingHorizontal: 0
  },
});

export default Detail;
