import React from "react";
import QrReader from "react-qr-reader";
import styles from "./PlayerScreen.module.css";
import { addToTeam, useTeams } from "../../firestore";

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
	const teams = useTeams();
	const isInTeam = teams.filter(team => team.members.includes(userId)).find(Boolean);

	const handleAnswerClick = () => {
		console.log("dislike");
	};
	const handleError = () => {
		return () => {
			console.log("dislike");
		};
	};

	const handleScan = (data: any) => {
		if (data) {
			console.log("new team member: ", userId, "for team: ", data);
			addToTeam(userId, data);
		}
	};

	return (
		<div className={styles.root}>
			{isInTeam ? (
				<PlayerButton onClick={handleAnswerClick} />
			) : (
				<QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: "100%" }} />
			)}
		</div>
	);
};
