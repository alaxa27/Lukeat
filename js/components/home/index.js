import React, { Component } from "react";
import { Image, View, StatusBar } from "react-native";

import { Container, Button, H3, Text, Header, Title, Body, Left, Right } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../img/launchscreen-bg.png");
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
					<View style={{ marginBottom: 130 }}>
						<Button
							style={{ backgroundColor: "#6FAF98", alignSelf: "center", marginBottom: 20 }}
							onPress={() => this.props.navigation.navigate("SignupForm")}
						>
							<Text>Sign up</Text>
						</Button>
						<Button
							style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
							onPress={() => this.props.navigation.navigate("LoginForm")}
						>
							<Text>Log in</Text>
						</Button>
					</View>
				</Image>
			</Container>
		);
	}
}

export default Home;
