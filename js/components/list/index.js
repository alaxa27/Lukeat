import React, { Component } from 'react';

import { Container, Header, Title, Content, Button, Icon, Text, Left, Right, Body, List, ListItem } from 'native-base';

import styles from './styles';

const datas = [
	{
		route: 'Liste1',
		text: 'Liste 1',
	},
	{
		route: 'Liste2',
		text: 'Liste 2',
	},
	{
		route: 'Liste3',
		text: 'Liste 3',
	},
];

class NHList extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
							<Icon name="menu" />
						</Button>
					</Left>
					<Body>
						<Title>Mes recettes</Title>
					</Body>
					<Right />
				</Header>

				<Content>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem button onPress={() => this.props.navigation.navigate(data.route)}>
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
				</Button>
			</Container>
		);
	}
}

export default NHList;
