import React, { Component } from "react";
import styles from "./PlayerScreen.module.css";

interface IProps {
	userId: string;
	path: string;
}

export const PlayerScreen: React.FC<IProps> = ({ userId }) => {
	return (
		<div className={styles.root}>
			<button className={styles.playerButton}>ANSWER</button>
		</div>
	);
};
