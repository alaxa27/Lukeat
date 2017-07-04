import React, {Component} from 'react'
import {Text, Button} from 'react-native'
import { Container, Content, Form, Item, Input } from 'native-base'
//import { addListToDB } from '../../firebase/firebase'



export default class AddList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nomRecette: '',
      description: '',
      recetteKey: null,
      //userID: this.props.navigation.state.params.userID
      }
    this.creerListe = this.creerListe.bind(this)
  }

  static navigationOptions = {
    title: 'Créer une recette',
  }

  creerListe() {
    alert('Liste créée')
    /*let cleRecette = addListToDB(this.state.userID, this.state.nomRecette, this.state.description)

    if (typeof cleRecette !== "undefined") {
        this.setState({recetteKey: cleRecette})
    }*/
  }

  ajouterIngredient(){
    this.props.navigation.navigate('AddItem')
  }

  retourEnArriere() {
    this.props.navigation.navigate('NHList')
  }


  render() {
    return(
      <Container style={{margin: 20}}>
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Nom de la recette"
                autoCapitalize='sentences'
                value = {this.state.nomRecette}
                onChangeText = {(nomRecette) => this.setState({nomRecette})}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Description"
                value = {this.state.description}
                onChangeText = {(description) => this.setState({description})}
              />
            </Item>
            <Button
              color = '#003366' //blue
              onPress = {this.creerListe}
              title = "Créer la recette"
            />
            <Button
              color = '#003366' //blue
              onPress = {() => this.ajouterIngredient()}
              title = "Ajouter un ingrédient"
            />
            <Button
              color = '#003366' //blue
              onPress = {() => this.retourEnArriere()}
              title = "Terminer"
            />
          </Form>
        </Content>
      </Container>
    )
  }
}
