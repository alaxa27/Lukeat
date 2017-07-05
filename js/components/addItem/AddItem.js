import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'
import { Container, Content, Form, Item, Input, Header, Left, Right, Body, Icon, Button, Title, Label } from 'native-base'
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



  render() {
    return(
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Ajouter un ingrédient</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={{marginVertical: 20}}>
          <Form>
            <Item floatingLabel>
              <Label>Nom de l'ingrédient</Label>
              <Input
                autoCapitalize='sentences'
                value = {this.state.nomIngredient}
                onChangeText = {(nomIngredient) => this.setState({nomIngredient})}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Description</Label>
              <Input
                autoCapitalize='sentences'
                value = {this.state.description}
                onChangeText = {(description) => this.setState({description})}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Quantité</Label>
              <Input
                autoCapitalize='sentences'
                value = {this.state.quantite}
                onChangeText = {(quantite) => this.setState({quantite})}
              />
            </Item>
            <Button rounded block
              style={{marginTop: 70, marginBottom: 30, marginHorizontal: 70, }}
              onPress = {this.ajouterIngredient}
            >
            <Text style={styles.text} >Ajouter</Text>
            </Button>
            <Button rounded block
              style={{marginBottom: 30, marginHorizontal: 70}}
              onPress = {() => this.props.navigation.goBack()}
            >
            <Text style={styles.text}>Terminer</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
  },
})
