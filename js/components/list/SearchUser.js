import React, { Component } from 'react';

import { Container, Header, Title, Content, Button, Icon, Text, Left, Right, Body, List, ListItem } from 'native-base';

import styles from './styles';

const datas = [
	{
		route: 'ListsUser',
		text: 'User 1',
	},
	{
		route: 'ListsUser',
		text: 'User 2',
	},
	{
		route: 'ListsUser',
		text: 'User 3',
	},
];

class SearchUser extends Component {

	render() {
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
            <Icon name="arrow-back" />
            </Button>
					</Left>
					<Body>
						<Title>Résultat</Title>
					</Body>
					<Right />
				</Header>

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
			</Container>
		);
	}
}

export default SearchUser;
