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
  "Item 3.1",
  "Item 3.2",
  "Item 3.3",
  "Item 3.4",
  "Item 3.5",
  "Item 3.6",
  "Item 3.7",
];

class Liste3 extends Component {
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
            <Title>List 3</Title>
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

export default Liste3;
