import React from "react";
import QrReader from "react-qr-reader";
import styles from "./PlayerScreen.module.css";
import { addToTeam, requestAnswer, useTeams } from "../../firestore";

interface IProps {
	userId: string;
	path: string;
}

const PlayerButton: React.FC<{ color: string; onClick: () => void }> = ({ color, onClick }) => (
	<button className={styles.playerButton} onClick={onClick} style={{ backgroundColor: color }}>
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
	const signedTeam = teams.filter(team => team.members.includes(userId))[0];

	const handleAnswerClick = () => {
		console.log("team:", signedTeam.id, "request to answer:", new Date());
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
			{signedTeam ? (
				<>
					<h1 className={styles.teamHeadline}>Your team: {signedTeam.name}</h1>
					<PlayerButton onClick={handleAnswerClick} color={signedTeam.color} />
				</>
			) : (
				<QrReader delay={300} onError={handleError} onScan={handleScan} style={{ width: "100%" }} />
			)}
		</div>
	);
};
