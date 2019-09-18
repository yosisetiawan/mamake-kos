import React, { Component } from "react";
import { View, ScrollView, StyleSheet, Image, Text } from "react-native";
import { Button, Title, Paragraph, TouchableRipple } from "react-native-paper";
import { withNavigation } from "react-navigation";

class LoginContainer extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.mainContainer}>
                <View style={styles.iconContainer}>
                    <Image 
                        source={require('../../assets/images/login-icon.png')}
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
                    <Text style={[styles.textCenter, {paddingVertical: 20, color: "grey", fontStyle: "italic"}]}>Atau belum punya akun?</Text>
                    <Button mode="contained" style={styles.signUpButton} onPress={() => navigate('SignUpModal') }>
                        Daftar
                    </Button>
                </View>
                <View>
                    <TouchableRipple onPress={() => {console.log('text touched')}}>
                        <Text style={styles.textLink}>Syarat & Ketentuan</Text>
                    </TouchableRipple>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
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
});

export default withNavigation(LoginContainer);
