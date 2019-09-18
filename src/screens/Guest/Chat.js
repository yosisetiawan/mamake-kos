import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Button, Title, Paragraph, TouchableRipple } from "react-native-paper";
import { createBottomTabNavigator } from "react-navigation";



class Chat extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.containerHome}>
        <View style={styles.HeaderExplore}>
          <Text style={styles.textLogo}>Chat</Text>
        </View>


        <View style={{marginTop: 50}}>
          <ScrollView style={styles.mainContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.iconContainer}>
              <Image
                source={require('../../../assets/images/login-icon.png')}
                style={styles.iconLogin}
              />

              <Title>Ooops ....</Title>
              <Title>Kamu Belum Login!</Title>
              <Paragraph style={styles.textCenter}>Yuk masuk, dan rasakan lebih banyak fitur-fitur kami!</Paragraph>
            </View>
            <View style={styles.buttonContainer}>
              <Button mode="contained" style={styles.loginButton} onPress={() => navigate('LoginModal')}>
                Login
                    </Button>
              <Text style={[styles.textCenter, { paddingVertical: 20, color: "grey", fontStyle: "italic" }]}>Atau belum punya akun?</Text>
              <Button mode="contained" style={styles.signUpButton} onPress={() => navigate('SignUpModal')}>
                Daftar
                    </Button>
            </View>
            <View>
              <TouchableRipple onPress={() => { console.log('text touched') }}>
                <Text style={styles.textLink}>Syarat & Ketentuan</Text>
              </TouchableRipple>
            </View>
          </ScrollView>

        </View>

      </View>
    )
  }
}

export default Chat;

const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    backgroundColor: '#fff',
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
    top: 0,
    left: 0,
    right: 0,
  },
  ContentExplore: {


  },
  textLogo: {
    padding: 10,
    paddingTop: 7,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 0,
  },
  imageLogo: {
    width: 20,
    height: 20,
    margin: 3,
  },
  mainContainer: {
    marginTop: -20,
    paddingBottom: 60,
    paddingHorizontal: 50
  },
  iconContainer: {
    alignItems: "center",
    padding: 0,
    paddingTop: 50,
    paddingBottom: 30,
  },
  buttonContainer: {
    paddingBottom: 30,
  },
  iconLogin: {
    width: 150,
    height: 150,
    tintColor: "#1baa56",
    paddingBottom: 30,
  },
  textCenter: {
    alignSelf: "stretch",
    alignItems: "center",
    textAlign: "center",
  },
  loginButton: {
    backgroundColor: '#1baa56',
    fontWeight: "bold",
    shadowColor: "#0D47A1",
    shadowOpacity: 0.2,
    shadowOffset: {
      bottom: 2
    }
  },
  signUpButton: {
    backgroundColor: '#43A047',
    fontWeight: "bold",
    shadowColor: "#2E7D32",
    shadowOpacity: 0.2,
    shadowOffset: {
      bottom: 2
    }
  },
  textLink: {
    textDecorationLine: "underline",
    color: "grey",
    textAlign: "center"
  },
})