import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";

import { Container, Button, H3, Text, Header, Title, Body, Left, Right } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../img/home-wallpaper.jpg");
const launchscreenLogo = require("../../../img/SaveEat.png");

class Home extends Component {
	// eslint-disable-line

	render() {
		return (
			<Container>
				<StatusBar barStyle="light-content" />
				<Image source={launchscreenBg} style={styles.imageContainer}>
					<View style={styles.logoContainer}>
						<Image source={launchscreenLogo} style={styles.logo} />
					</View>
					<View style={{ flex: 1, alignItems: 'stretch', marginBottom: 130, marginHorizontal: 100 }}>
						<Button
							style={{ backgroundColor: "white", alignSelf: "center", marginBottom: 40, width: 150 }}
							onPress={() => this.props.navigation.navigate("SignupForm")}
						>
							<Text style={{textAlign: 'center', color: "#6FAF98", marginLeft: 27, fontWeight: 'bold', fontSize: 16 }}>Sign up</Text>
						</Button>
						<Button
							style={{ backgroundColor: "white", alignSelf: "center", width: 150 }}
							onPress={() => this.props.navigation.navigate("LoginForm")}
						>
							<Text style={{textAlign: 'center', color: "#6FAF98", marginLeft: 33, fontWeight: 'bold', fontSize: 16 }}>Log in</Text>
						</Button>
					</View>
				</Image>
			</Container>
		);
	}
}

export default Home;
