import React, { Component } from 'react'
import { Text, Button, View, TextInput, TouchableOpacity, Image } from 'react-native'
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
  }

  signup() {
    if (this.state.password === this.state.confirmPassword) {
      firebaseRef.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
      writeUserData(user.uid, this.state.nom, this.state.prenom, this.state.email)
      this.props.navigation.navigate("NHList", {userID: user.uid})
      }).catch((error) => alert(error.message))
    } else {
      alert("Mots de passe non identiques!")
    }

  }

  render() {
    return(
        <View style={styles.container} >
          <Image source={launchscreenBg} style={styles.imageContainer}>
            <View style={styles.view} >
              <TextInput
                placeholder = 'Nom'
                placeholderTextColor = 'white'
                returnKeyType = 'next'
                underlineColorAndroid = {'transparent'}
                onSubmitEditing = {() => this.prenomInput.focus()}
                style = {styles.input}
                value = {this.state.nom}
                onChangeText = {(nom) => this.setState({nom})}
              />
              <TextInput
                placeholder = 'Prenom'
                placeholderTextColor = 'white'
                returnKeyType = 'next'
                underlineColorAndroid = {'transparent'}
                ref = {(input) => this.prenomInput = input}
                onSubmitEditing = {() => this.emailInput.focus()}
                style = {styles.input}
                value = {this.state.prenom}
                onChangeText = {(prenom) => this.setState({prenom})}
              />
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
                returnKeyType = 'go'
                secureTextEntry
                underlineColorAndroid = {'transparent'}
                ref = {(input) => this.confirmPasswordInput = input}
                style = {styles.input}
                value = {this.state.confirmPassword}
                onChangeText = {(confirmPassword) => this.setState({confirmPassword})}
              />
              <TouchableOpacity
                style={[styles.buttonContainer, {marginTop: 10}]}
                onPress = {() => this.signup()}
              >
                <Text style={styles.buttonText}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
          </Image>
        </View>
    )
  }
}
