import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Body,
  Item,
  Input
} from "native-base";

import styles from "./styles";

const datas = [
  "Item 2.1",
  "Item 2.2",
  "Item 2.3",
  "Item 2.4",
  "Item 2.5",
  "Item 2.6",
  "Item 2.7",
];

class List2 extends Component {
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
            <Title>Liste 2</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem>
                <Text>{data}</Text>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default List2;
