import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { Container, Content, Form, Item, Input } from 'native-base'
import { firebaseRef, writeUserData} from './Modules/firebase'



export default class SignupForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nom: '',
      prenom: '',
      email: '',
      password: '',
      }
    this.signup = this.signup.bind(this)
  }

  static navigationOptions = {
    title: 'Créer un compte',
  }

  signup() {
  firebaseRef.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
      writeUserData(user.uid, this.state.nom, this.state.prenom, this.state.email)
      alert('Compte créé')
    }).catch((error) => alert(error.message))
  }

  render() {
    return(
      <Container style={{margin: 20}}>
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Nom"
                autoCapitalize='words'
                value = {this.state.nom}
                onChangeText = {(nom) => this.setState({nom})}
              />
              <Input
                placeholder="Prénom"
                autoCapitalize='words'
                value = {this.state.prenom}
                onChangeText = {(prenom) => this.setState({prenom})}
              />
            </Item>
            <Item>
              <Input
                keyboardType='email-address'
                placeholder="Email"
                value = {this.state.email}
                onChangeText = {(email) => this.setState({email})}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Mot de passe"
                value = {this.state.password}
                onChangeText = {(password) => this.setState({password})}
                secureTextEntry = {true}
              />
            </Item>
            <Button
              color = '#003366' //blue
              onPress = {this.signup}
              title = 'Envoyer'
            />
          </Form>
        </Content>
      </Container>
    )
  }
}
