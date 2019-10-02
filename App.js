import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
// import the different screens
import Loading from './src/components/loading'
import SignUp from './src/pages/signup'
import Login from './src/pages/login'
import Main from './src/pages/main'
import Infor from './src/pages/infor'
import Alerts from './src/pages/alerts'
import Logout from './src/pages/logout'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyCuoQrt6twCVld2GHTSu0Wn3hKGX0qkBgg",
  authDomain: "notification-1b2fc.firebaseapp.com",
  databaseURL: "https://notification-1b2fc.firebaseio.com",
  projectId: "notification-1b2fc",
  storageBucket: "notification-1b2fc.appspot.com",
  messagingSenderId: "768391709712",
  appId: "1:768391709712:web:4c67a05145c15b73d73695"
};


// Initialize Firebase
if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
}

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  SignUp: {
    screen: SignUp,
  },
  Main: {
    screen: Main,
  },
  Infor: {
    screen: Infor,
  },
  Alerts: {
    screen: Alerts,
  },
  Logout: {
    screen: Logout,
  },

},
{
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#FF69B4',
    },
    headerTintColor: '#333',
    headerBackTitleStyle: {
      fontWeight: 'bold',
    },
  },
});

export default createAppContainer(AppNavigator);