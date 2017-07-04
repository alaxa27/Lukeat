import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'
import { Container, Content, Form, Item, Input, Header, Left, Right, Body, Icon, Button, Title, Label } from 'native-base'
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
            <Title>Ajouter une recette</Title>
          </Body>
        </Header>
        <Content style={{marginVertical: 20}}>
          <Form>
            <Item floatingLabel>
              <Label>Nom de la recette</Label>
              <Input
                autoCapitalize='sentences'
                value = {this.state.nomRecette}
                onChangeText = {(nomRecette) => this.setState({nomRecette})}
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
            <Button rounded block
              style={{marginTop: 70, marginBottom: 30, marginHorizontal: 70, }}
              onPress = {this.creerListe}
            >
            <Text style={styles.text} >Créer la recette</Text>
            </Button>
            <Button rounded block
              style={{marginBottom: 30, marginHorizontal: 70}}
              onPress = {() => this.ajouterIngredient()}
            >
            <Text style={styles.text}>Ajouter un ingrédient</Text>
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
  title: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
})
