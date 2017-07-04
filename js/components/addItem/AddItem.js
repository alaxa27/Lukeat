import React, {Component} from 'react'
import {Text, Button} from 'react-native'
import { Container, Content, Form, Item, Input } from 'native-base'
//import { addItemToDB } from '../../firebase/firebase'



export default class AddList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nomIngredient: '',
      description: '',
      quantite: '',
      //recetteKey: this.props.navigation.state.params.recetteKey
      }
    this.ajouterIngredient = this.ajouterIngredient.bind(this)
  }

  static navigationOptions = {
    title: 'Ajouter un ingrédient',
  }


  ajouterIngredient() {
    //addItemToDB(this.state.recetteKey, this.state.nomIngredient, this.state.description, this.state.quantite)
    this.setState({nomIngredient: ''})
    this.setState({description: ''})
    this.setState({quantite: ''})
  }

  retourEnArriere() {
    this.props.navigation.navigate('AddList')
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
                value = {this.state.nomIngredient}
                onChangeText = {(nomIngredient) => this.setState({nomIngredient})}
              />
            </Item>
            <Item>
              <Input
                placeholder="Description"
                value = {this.state.description}
                onChangeText = {(description) => this.setState({description})}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Quantité"
                value = {this.state.quantite}
                onChangeText = {(quantite) => this.setState({quantite})}
              />
            </Item>
            <Button
              color = '#003366' //blue
              onPress = {this.ajouterIngredient}
              title = "Ajouter"
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
