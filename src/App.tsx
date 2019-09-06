import { Router } from "@reach/router";
import Fingerprint from "fingerprintjs";
import React from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { GameScreen } from "./screens/GameScreen/GameScreen";
import { ModeratorScreen } from "./screens/ModeratorScreen/ModeratorScreen";
import { PlayerScreen } from "./screens/PlayerScreen/PlayerScreen";

export const App: React.SFC = () => {
	const fingerprint = new Fingerprint().get();
	return (
		<div className={styles.root}>
			<Router className={styles.routerWrapper}>
				<PlayerScreen userId={fingerprint} path="/" />
				<GameScreen path="/gamescreen" />
				<ModeratorScreen path="/moderator" />
			</Router>
		</div>
	);
};
