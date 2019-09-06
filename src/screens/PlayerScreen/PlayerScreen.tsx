import React, { Component } from "react";
import styles from "./PlayerScreen.module.css";

interface IProps {
	userId: string;
	path: string;
}

const PlayerButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
	<button className={styles.playerButton} onClick={onClick}>
		ANSWER
	</button>
);

const GetTeamInput: React.FC<{ onClick: () => void }> = ({ onClick }) => (
	<div className={styles.teamInputWrapper}>
		<input className={styles.teamInput} placeholder="Gib einen Teamnamen ein" type="text" />

		<button className={styles.teamInputButton} onClick={onClick}>
			Absenden
		</button>
	</div>
);
export const PlayerScreen: React.FC<IProps> = ({ userId }) => {
	const handleDislike = () => {
		return () => {
			console.log("dislike");
		};
	};
	return (
		<div className={styles.root}>
			<GetTeamInput onClick={handleDislike} />
		</div>
	);
};
