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

	const handleTeamInput = teamId => {
		const team = teamId.target.value;

		if (team.length < 4) {
			return;
		}

		addToTeam(userId, team)
			.then(_ => {
				console.log("new team member: ", userId, "for team: ", team);
			})
			.catch(err => console.log(err));
	};

	const handleAnswerClick = () => {
		console.log("team:", signedTeam.id, "user:", userId, "request to answer:", new Date());
	};

	const handleError = error => {
		return () => {
			console.log("Something went wrong", error);
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
				<>
					<QrReader
						className={styles.qrReader}
						delay={300}
						onError={handleError}
						onScan={handleScan}
					/>
					<p>or</p>
					<input
						onInput={handleTeamInput}
						className={styles.playerScreenInput}
						placeholder="Enter your team code"
						type="text"
					/>
				</>
			)}
		</div>
	);
};
