import React from "react";
import { ActivityIndicator, View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TouchableHighlight, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { Paragraph, Button } from "react-native-paper";
import { TextInput } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import IklanKost from "../components/IklanKost";
import { connect } from 'react-redux';
import { getDorms } from './../_actions/dorms'

import Modal from "react-native-modal";
const { height, width } = Dimensions.get('window');




const options = [
  {
    component: <Text style={{
      color: '#bdbdbd',
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 12,
      borderWidth: 0,
      textAlign: 'left'
    }}>Acak</Text>,
  },
  {
    component: <Text style={{
      color: '#bdbdbd',
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 12,
      borderWidth: 0,
      textAlign: 'left'
    }}>Harga Termurah</Text>,
  },
  {
    component: <Text style={{
      color: '#bdbdbd',
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 12,
      borderWidth: 0,
      textAlign: 'left'
    }}>Harga termahal</Text>,
  },
  {
    component: <Text style={{
      color: '#bdbdbd',
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 12,
      borderWidth: 0,
      textAlign: 'left'
    }}>kosong ke penuh</Text>,
  },
  {
    component: <Text style={{
      color: '#bdbdbd',
      paddingTop: 5,
      paddingBottom: 5,
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 12,
      borderWidth: 0,
      textAlign: 'left'
    }}>update terbaru</Text>,
  },
]

const title = <Text style={{ padding: 5, color: '#1baa56', fontSize: 14 }}>Urutkan Dari</Text>

const ModalComponent = props => (
  <Modal
    style={{
      justifyContent: "flex-end",
      margin: 0
    }}
    isVisible={props.modalVisible}
    onBackdropPress={() => props.setModalVisible(false)}
  >
    <View
      style={{
        backgroundColor: "#fff",
        justifyContent: "flex-end",
        paddingVertical: 10,
        paddingHorizontal: 20
      }}
    >
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#95a5a6",
          flexDirection: "row",
          paddingBottom: 10
        }}
      >
        <Text
          style={{
            fontSize: 17,
            color: "#95a5a6",
            flex: 1,
            fontWeight: "500"
          }}
        >
          Urutkan dari
        </Text>
        <Icon
          name="close"
          size={25}
          onPress={() => props.setModalVisible(false)}
        />
      </View>
      <View>
        <TouchableOpacity>
          <Text style={{ paddingVertical: 5, fontSize: 12 }}>Acak</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ paddingVertical: 5, fontSize: 12, }}>
            Harga termurah
        </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ paddingVertical: 5, fontSize: 12 }}>Harga termahal</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ paddingVertical: 5, fontSize: 12 }}>
            Kosong ke penuh
        </Text>
        </TouchableOpacity>
        <Text style={{ paddingVertical: 5, fontSize: 12 }}>Update terbaru</Text>
      </View>
    </View>
  </Modal>
);

class ListItem extends React.Component {
  state = {
    selected: 1,
    dormsCounter: 0,

  }



  showActionSheet = () => this.actionSheet.show()

  getActionSheetRef = ref => (this.actionSheet = ref)

  handlePress = index => this.setState({ selected: index })

  constructor(props) {
    super(props);
    const city = this.props.navigation.getParam('city', '');
    this.state = {
      search: city,
      visible: false,
      dorms: [],
      isAutoFocus: city == '' ? true : false,
      modalVisible: false
    }
  }


  setModalVisible = visible => {
    this.setState({ modalVisible: visible });
  };

  renderItem = ({ item, index }) => (
    <IklanKost
      // count={this.state.dorms.lenght}
      data={item}
      index={index}
    />
  )

  handleChangeText = (text) => {
    this.setState({
      search: text
    });
  }

  componentDidMount = async () => {
    // await axios.get('http://192.168.0.8:3000/api/v1/dorms')
    //   .then(res => {
    //     this.setState({
    //       dorms: res.data.data,
    //       isLoading: false
    //     });
    //   })
    this.props.dispatch(getDorms(this.state.search));
  }



  render() {
    // const kosts = require('../../data/kosts.json');
    const kosts = this.state.dorms;
    const { navigate } = this.props.navigation;
    const deviceWidth = width
    const deviceHeight = 2 / 3 * height


    // alert(kosts.lenght);
    console.log(this.props.dorms.isLoading)

    return (
      <View style={styles.containerHome}>
        <View style={styles.searchBar}>
          <View style={{ flex: 1, position: 'relative' }}>
            <TextInput
              style={styles.seactInput}
              value={this.state.search}
              onChangeText={this.handleChangeText}
              autoFocus={this.state.isAutoFocus}
            />
            <TouchableOpacity style={styles.touchable} onPress={() => navigate('Main')}>
              <Icon style={{ textAlign: 'center', paddingTop: 1 }} name='ios-arrow-back' color='#1baa56' size={30}></Icon>
            </TouchableOpacity>
          </View>
        </View>
        {
          this.props.dorms.isLoading == true && 
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size="large" color="#1baa56" />
            <Text style={{ textAlign: 'center', fontSize: 12, color: '#1baa56' }}>Harap tunggu datang sedang dari server</Text>
          </View>
        }
        {(!this.props.dorms.isLoading && this.props.dorms.dataDorms) &&
          <View style={{ flex: 1, alignItems: 'center', }}>
            <FlatList
              // data={kosts}
              data={this.props.dorms.dataDorms}
              showsVerticalScrollIndicator={false}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
              ListFooterComponent={() => (<View style={{ height: 50 }}></View>)}
            />
          </View>
        }
        {(!this.props.dorms.isLoading && this.props.dorms.dataDorms == '') && 
          <View style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center', fontSize: 12, color: '#1baa56' }}>Maaf, tidak ditemukan kost di daerah yang kamu cari</Text>
          </View>
        }


        <View style={styles.floatingContainer}>
          <View style={styles.floatingSection}>
            <View style={{ borderRightColor: "#ddd", borderRightWidth: 1 }}>
              <Button mode="text" style={styles.buttonOptions} uppercase={false} color="#1baa56" onPress={() => navigate('Filter')} icon={({ size, color }) => (
                <Image
                  source={require('../../assets/images/controls.png')}
                  style={{ width: size, height: size, tintColor: color }} />
              )}>
                <Text style={{ fontSize: 10 }}>Filter</Text>
              </Button>
            </View>
            <View>
              <Button mode="text" style={styles.buttonOptions} uppercase={false} color="#1baa56" icon="sort" onPress={() => this.setModalVisible(true)}>
                <Text style={{ fontSize: 10 }}>Urutkan</Text>
              </Button>
            </View>
          </View>
        </View>



        <ModalComponent
          setModalVisible={this.setModalVisible}
          modalVisible={this.state.modalVisible}
        />




      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dorms: state.dorms
  }
}

export default connect(mapStateToProps)(ListItem);

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 0
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
    backgroundColor: '#fff',
    borderWidth: 1
  },
  touchable: {
    position: 'absolute',
    top: 3,
    left: 15,
    marginBottom: -10,
  },
  floatingContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    backfaceVisibility: "hidden",
    position: 'absolute',
    bottom: 30,
    left: 50,
    right: 50,
    zIndex: 1,
  },
  modalHeader: {
    paddingHorizontal: 5,
    backgroundColor: "#fff",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    fontSize: 10
  },
  floatingSection: {
    backgroundColor: "white",
    flexDirection: "row",
    paddingVertical: 3,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonOptions: {
    padding: 0,
  },
  styleText: {

  }
})