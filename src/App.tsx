import { Router } from "@reach/router";
import React from "react";
import styles from "./App.module.css";
import { GameScreen } from "./screens/GameScreen/GameScreen";
import { ModeratorScreen } from "./screens/ModeratorScreen/ModeratorScreen";
import { PlayerScreen } from "./screens/PlayerScreen/PlayerScreen";

export const App: React.FC = () => {
	return (
		<div className={styles.root}>
			<Router className={styles.routerWrapper}>
				<PlayerScreen path="/" />
				<GameScreen path="/gamescreen" />
				<ModeratorScreen path="/moderator" />
			</Router>
		</div>
	);
};
