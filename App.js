import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer, HeaderStyleInterpolator, createStackNavigator, createSwitchNavigator } from "react-navigation";
import { Provider } from 'react-redux'
import store from './src/_redux/store'






// Screen Guest 
import ExploreGuest from './src/screens/Guest/Explore';
import ChatGuest from './src/screens/Guest/Chat';
import WishlistGuest from './src/screens/Guest/Wishlist';


// Screen Auth
import ExploreAuth from './src/screens/User/Explore';
import WishlistAuth from './src/screens/User/Wishlist';
import ChatAuth from './src/screens/User/Chat';
import ProfilAuth from "./src/screens/User/Profile";

// Profile
import ListBookPage from "./src/screens/Profile/listBook";
import IklanPage from "./src/screens/Profile/IklanPage";
import ListIklan from "./src/screens/Profile/listIklan";
import KontrakSaya from "./src/screens/kontrakSaya";
import ListPemesanan from './src/screens/Profile/listPemesanan'
// Auth
import Login from './src/screens/Auth/Login';
import SignupScreen from "./src/screens/Auth/SignupScreen";


// Kost
import ListItem from "./src/screens/ListItem";
import Detail from "./src/screens/Detail";
import Booking from "./src/screens/Booking";
import Filter from "./src/screens/Filter";
import Splashscreen from './src/screens/SplashScreen'



console.disableYellowBox = true;



const AuthNavBottom = createBottomTabNavigator({
  Explore: {
    screen: ExploreAuth,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-search" color={tintColor} size={24} />
      ),
      tabBarOptions:{
        activeTintColor: '#1baa56'
      }
    }
  },
  Wishlist: {
    screen: WishlistAuth,
    navigationOptions: {
      tabBarLabel: 'Wishlist',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-heart" color={tintColor}size={24} />
      ),
      tabBarOptions:{
        activeTintColor: '#1baa56'
      }
    }
  },
  Chat: {
    screen: ChatAuth,
    navigationOptions: {
      tabBarLabel: 'Chat',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-chatboxes" color={tintColor}size={24} />
      ),
      tabBarOptions:{
        activeTintColor: '#1baa56'
      }
    }
  },
  Profil: {
    screen: ProfilAuth,
    navigationOptions: {
      tabBarLabel: 'Profil',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-person" color={tintColor}size={24} />
      ),
      tabBarOptions:{
        activeTintColor: '#1baa56'
      }
    }
  },
});


const GuestNavBottom = createBottomTabNavigator({
  Explore: {
    screen: ExploreGuest,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-search" color={tintColor}size={24} />
      ),
      tabBarOptions:{
        activeTintColor: '#1baa56'
      }
    }
  },
  Wishlist: {
    screen: WishlistGuest,
    navigationOptions: {
      tabBarLabel: 'Wishlist',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-heart" color={tintColor}size={24} />
      ),
      tabBarOptions:{
        activeTintColor: '#1baa56'
      }
    }
  },
  Chat: {
    screen: ChatGuest,
    navigationOptions: {
      tabBarLabel: 'Chat',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-chatboxes" color={tintColor}size={24} />
      ),
      tabBarOptions:{
        activeTintColor: '#1baa56'
      }
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: 'Login',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-log-in" color={tintColor}size={24} />
      ),
      tabBarOptions:{
        activeTintColor: '#1baa56'
      }
    }
  },
});

const guestNav = createStackNavigator(
  {
    Main: {
      screen: GuestNavBottom,
    },
    SignUpModal: {
      screen: SignupScreen,
    },
    LoginModal: {
      screen: Login
    },
    ListItem: {
      screen: ListItem,
    },
    Filter: {
      screen: Filter
    },
    Detail: {
      screen: Detail
    },
    iklanPage: {
      screen: IklanPage
    },
    ListIklanPage: {
      screen: ListIklan
    },
    ListBookPage: {
      screen: ListBookPage
    },
    kontrakSaya: {
      screen: KontrakSaya
    },
    Booking: {
      screen: Booking
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const authNav = createStackNavigator(
  {
    Main: {
      screen: AuthNavBottom,
    },
    SignUpModal: {
      screen: SignupScreen,
    },
    LoginModal: {
      screen: Login
    },
    ListItem: {
      screen: ListItem,
    },
    Filter: {
      screen: Filter
    },
    Detail: {
      screen: Detail
    },
    iklanPage: {
      screen: IklanPage
    },
    ListIklanPage: {
      screen: ListIklan
    },
    ListBookPage: {
      screen: ListBookPage
    },
    kontrakSaya: {
      screen: KontrakSaya
    },
    Booking: {
      screen: Booking
    },
    ListPemesanan: {
      screen: ListPemesanan
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);



const MainNav = createAppContainer(createSwitchNavigator({
  // Navigation Guest
  Main : {
    screen : Splashscreen
  },
  Guest: {
    screen: guestNav
  },
  // Navigation Auth - sudah login
  Auth: {
    screen: authNav
  }
})
)



const App = () => {
  return (
    <Provider store={store}>
      <MainNav />
    </Provider>
  )
}
export default App
