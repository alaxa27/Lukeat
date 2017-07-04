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
  "Item 1.1",
  "Item 1.2",
  "Item 1.3",
  "Item 1.4",
  "Item 1.5",
  "Item 1.6",
  "Item 1.7",
];

class Liste1 extends Component {
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
            <Title>List 1</Title>
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

export default Liste1;
