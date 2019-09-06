import React, { Component } from "react";
import styles from "./PlayerScreen.module.css";

interface IProps {
	userId: string;
	path: string;
}

const PlayerButton: React.FC = () => <button className={styles.playerButton}>ANSWER</button>;

export const PlayerScreen: React.FC<IProps> = ({ userId }) => {
	return (
		<div className={styles.root}>
			<PlayerButton />
		</div>
	);
};
