import React, { Component } from 'react';
import { View } from 'react-native'
import { Container, Header, Title, Content, Button, Icon, Text, Left, Right, Body, List, ListItem, Input, Item} from 'native-base';
import * as Animatable from 'react-native-animatable'
import styles from './styles';

const datas = [
	{
		route: 'List1',
		text: 'Liste 1',
	},
	{
		route: 'List2',
		text: 'Liste 2',
	},
	{
		route: 'List3',
		text: 'Liste 3',
	},
];

class NHList extends Component {
	constructor(props) {
    super(props)
    this.state = {
      userID: this.props.navigation.state.params.userID,
			showSearchBar: false,
			recherche: '',
      }
		this.toggleTitleBar = this.toggleTitleBar.bind(this)
		this.afficherTitre = this.afficherTitre.bind(this)
		this.afficherBarreRecherche = this.afficherBarreRecherche.bind(this)
  }


	toggleTitleBar() {

		if (this.state.recherche === '' && this.state.showSearchBar === true) {
			alert('Saisissez un mot pour lancer la recherche')
		} else if (this.state.recherche !== '' && this.state.showSearchBar === true){
			this.rechercher()
		} else {
			this.setState({
				showSearchBar: true
			});
		}
	}

	rechercher() {
		this.props.navigation.navigate("SearchUser")
	}

	afficherTitre() {
		if (!this.state.showSearchBar) {
      return (
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
							<Icon name="menu" />
						</Button>
					</Left>
					<Body>
						<Title>Mes recettes</Title>
					</Body>
					<Right>
						<Button transparent onPress={() => this.toggleTitleBar()}>
							<Icon name="search" />
						</Button>
						<Button transparent><Icon name="more" /></Button>
					</Right>
				</Header>
      );
    } else {
      	return null;
    	}
	}

	afficherBarreRecherche() {
		if (this.state.showSearchBar) {
      return (
				<Header searchBar rounded>
					<Item>
						<Button transparent onPress={() => this.setState({showSearchBar: false, recherche: ''})}>
							<Icon name="arrow-back" />
						</Button>
						<Input
		          autoCapitalize='words'
							placeholder = 'Chercher un utilisateur'
							returnKeyType = 'search'
							style = {styles.input}
		          value = {this.state.recherche}
		          onChangeText = {(recherche) => this.setState({recherche})}
							onSubmitEditing = {() => this.toggleTitleBar()}
		        />
						<Button transparent onPress={() => this.toggleTitleBar()}>
							<Icon name="search" />
						</Button>
					</Item>
				</Header>
      );
    } else {
      	return null;
    	}
	}

	render() {
		return (
			<Container style={styles.container}>
				{this.afficherTitre()}
				{this.afficherBarreRecherche()}
				<Content>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem button style={styles.listItem} onPress={() => this.props.navigation.navigate(data.route)}>
								<Text>
									{data.text}
								</Text>
								<Right>
									<Icon name="arrow-forward" />
								</Right>
							</ListItem>}
					/>
				</Content>
				<Button block onPress={() => this.props.navigation.navigate('AddList')}>
					<Text>Ajouter une recette</Text>
				</Button>
			</Container>
		);
	}
}

export default NHList;
