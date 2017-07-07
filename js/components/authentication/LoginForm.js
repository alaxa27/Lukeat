import React, { Component } from 'react'
import { Text, Button, View, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import styles from "./styles";
import { firebaseRef, fetchUserData } from '../../firebase/firebase'

const launchscreenBg = require("../../../img/home-wallpaper.jpg");

export default class LoginForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: 'osama@osama.com',
      password: 'osamaosama',
      spinner: false,
      }
  }

  static navigationOptions = {
    title: 'Connexion',
  }

  login() {
    this.setState({ spinner: true})
    firebaseRef.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
      this.props.navigation.navigate("NHList", {userID: user.uid})
    }).catch((error) => {
      this.setState({ spinner: false})
      alert(`${error.code}: ${error.message}`);
    })
  }

  displayTextButton() {
    if(!this.state.spinner) {
      return(
        <Text style={styles.buttonText}>LOG IN</Text>
      )
    } else {
      return (null)
    }
  }

  displaySpinner() {
    if (this.state.spinner) {
      return (
        <ActivityIndicator color='#6FAF98' size='small'/>
    )} else {
      return null
    }
  }

  render() {
    return(
      <View style={styles.container} >
        <Image source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.view} >
            <TextInput
              placeholder = 'Email'
              placeholderTextColor = 'white'
              returnKeyType = 'next'
              keyboardType='email-address'
              underlineColorAndroid = {'transparent'}
              onSubmitEditing = {() => this.passwordInput.focus()}
              style = {[styles.input, {marginBottom: 30}]}
              value = {this.state.email}
              onChangeText = {(email) => this.setState({email})}
            />
            <TextInput
              placeholder = 'Mot de passe'
              placeholderTextColor = 'white'
              returnKeyType = 'go'
              secureTextEntry
              underlineColorAndroid = {'transparent'}
              ref = {(input) => this.passwordInput = input}
              style = {[styles.input, {marginBottom: 30}]}
              value = {this.state.password}
              onChangeText = {(password) => this.setState({password})}
              onSubmitEditing = {() => this.login()}
            />
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress = {() => this.login()}
            >
              {this.displayTextButton()}
              {this.displaySpinner()}
            </TouchableOpacity>
          </View>
        </Image>
      </View>
    )
  }
}
