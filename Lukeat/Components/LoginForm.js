import React, { Component } from 'react'
import { Text, Button } from 'react-native'
import { Container, Content, Form, Item, Input } from 'native-base'
import { firebaseRef, fetchUserData } from './Modules/firebase'


export default class LoginForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      }
    this.login = this.login.bind(this)
  }

  static navigationOptions = {
    title: 'Connexion',
  }

  login() {
    firebaseRef.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((user) =>
    fetchUserData(user.uid)).catch((error) => alert(`${error.code}: ${error.message}`));
  }

  render() {
    return(
      <Container style={{margin: 20}}>
        <Content>
          <Form>
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
              color = '#003366'
              onPress = {() => this.login()}
              title = 'Se connecter'
            />
          </Form>
        </Content>
      </Container>
    )
  }
}
