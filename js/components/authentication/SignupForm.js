import React, { Component } from 'react'
import { Text, Button, View, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { Item } from 'native-base'
import styles from "./styles";
import { firebaseRef, writeUserData} from '../../firebase/firebase'

const launchscreenBg = require("../../../img/home-wallpaper.jpg");

export default class SignupForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nom: '',
      prenom: '',
      email: '',
      password: '',
      confirmPassword: '',
      }
    this.signup = this.signup.bind(this)
  }

  static navigationOptions = {
    title: 'Créer un compte',
    spinner: false,
  }

  signup() {
    if (this.state.password === this.state.confirmPassword) {
      this.setState({ spinner: true})
      firebaseRef.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
      writeUserData(user.uid, this.state.nom, this.state.prenom, this.state.email)
      this.props.navigation.navigate("NHList", {userID: user.uid})
    }).catch((error) => {
      this.setState({ spinner: false})
      alert(error.message)
    })
    } else {
      alert("Mots de passe non identiques!")
    }
  }

  displayTextButton() {
    if(!this.state.spinner) {
      return(
        <Text style={styles.buttonText}>SIGN UP</Text>
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
              <Item>
                <View style={{flex: 1}}>
                  <TextInput
                    placeholder = 'Nom'
                    autoCapitalize = 'words'
                    placeholderTextColor = 'white'
                    returnKeyType = 'next'
                    underlineColorAndroid = {'transparent'}
                    onSubmitEditing = {() => this.prenomInput.focus()}
                    style = {[styles.input, {borderTopRightRadius: 0, borderBottomRightRadius: 0}]}
                    value = {this.state.nom}
                    onChangeText = {(nom) => this.setState({nom})}
                  />
                </View>
                <View style={{width: 4}}></View>
                <View style={{flex: 1}}>
                  <TextInput
                    placeholder = 'Prenom'
                    autoCapitalize = 'words'
                    placeholderTextColor = 'white'
                    returnKeyType = 'next'
                    underlineColorAndroid = {'transparent'}
                    ref = {(input) => this.prenomInput = input}
                    onSubmitEditing = {() => this.emailInput.focus()}
                    style = {[styles.input, {borderTopLeftRadius: 0, borderBottomLeftRadius: 0}]}
                    value = {this.state.prenom}
                    onChangeText = {(prenom) => this.setState({prenom})}
                  />
                </View>
              </Item>
              <TextInput
                placeholder = 'Email'
                placeholderTextColor = 'white'
                returnKeyType = 'next'
                keyboardType='email-address'
                underlineColorAndroid = {'transparent'}
                ref = {(input) => this.emailInput = input}
                onSubmitEditing = {() => this.passwordInput.focus()}
                style = {styles.input}
                value = {this.state.email}
                onChangeText = {(email) => this.setState({email})}
              />
              <TextInput
                placeholder = 'Mot de passe'
                placeholderTextColor = 'white'
                returnKeyType = 'next'
                secureTextEntry
                underlineColorAndroid = {'transparent'}
                ref = {(input) => this.passwordInput = input}
                onSubmitEditing = {() => this.confirmPasswordInput.focus()}
                style = {styles.input}
                value = {this.state.password}
                onChangeText = {(password) => this.setState({password})}
              />
              <TextInput
                placeholder = 'Confirmer mot de passe'
                placeholderTextColor = 'white'
                returnKeyType = 'send'
                secureTextEntry
                underlineColorAndroid = {'transparent'}
                ref = {(input) => this.confirmPasswordInput = input}
                style = {styles.input}
                value = {this.state.confirmPassword}
                onChangeText = {(confirmPassword) => this.setState({confirmPassword})}
                onSubmitEditing = {() => this.signup()}
              />
              <TouchableOpacity
                style={[styles.buttonContainer, {marginTop: 10}]}
                onPress = {() => this.signup()}
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
