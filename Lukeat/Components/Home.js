import React, {Component} from 'react'
import {AppRegistry, View, Image, Button, StyleSheet, Text} from 'react-native'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import GlobalStyles from './Common/Styles/GlobalStyles'
//import FBSDK, { LoginManager } from 'react-native-fbsdk'
import { StackNavigator } from 'react-navigation'
import { provider, firebaseRef } from './Modules/firebase'
// const FBSDK = require('react-native-fbsdk')
// const {
//   LoginButton,
// } = FBSDK;
//




export class Home extends Component {

  static navigationOptions = {
    header: null,
  }

  // constructor(props) {
  //   super(props)
  //   this.fb = this._fb.bind(this)
  // }
  //
  // _fb() {
  //   LoginManager.logInWithReadPermissions(['public_profile']).then((result) => {
  //       if (result.isCancelled) {
  //         alert('Login cancelled')
  //       } else {
  //         alert(`Login success with permissions: ${result.grantedPermissions.toString()}`)
  //       }
  //   }, (error) => alert(`Login failed with error: ${error}`))
  // }

  SignUp(){
    this.props.navigation.navigate('SignupForm')
  }

  LogIn() {
    this.props.navigation.navigate('LoginForm')
  }

  render() {
    return(
      <View style={GlobalStyles.centerContainer}>
        <Image
          source={require('./Images/SaveEat.png')}
          style={styles.image}
        />
        <View style={styles.view}>
          <Button
            title = 'Sign up'
            onPress = {() => this.SignUp()}
            color= '#A2273C' // red
          />

          <Button
            title = 'Log in'
            onPress = {() => this.LogIn()}
          />
        </View>
      </View>
    )
  }
}

const navigationOptions = {
  headerStyle: GlobalStyles.header,
  headerTitleStyle: GlobalStyles.headerTitle,
  headerTintColor: 'white',
}

export default StackNavigator({

  Home: {
    screen: Home,
  },

  LoginForm: {
    screen: LoginForm,
    navigationOptions,
  },

  SignupForm: {
    screen: SignupForm,
    navigationOptions,
  },

})


const styles = StyleSheet.create({

  image: {
      width: 100,
      height: 100,
      marginVertical: 50,
  },

  view: {
    flex: 1,
    marginHorizontal: 60,
    marginBottom: 30,
    justifyContent: 'space-between',
  },

})

AppRegistry.registerComponent('StackNavigator', () => StackNavigator);
/*          <LoginButton
            publishPermissions={["publish_actions"]}
            onLoginFinished={this._fb()}
            onLogoutFinished={() => alert("User logged out")}/>*/
