import { RouteComponentProps } from "@reach/router";
import React, { useCallback } from "react";
import { Helmet } from "react-helmet";
import QrReader from "react-qr-reader";
import { PacmanLoader } from "react-spinners";
import { addToTeam, requestToAnswer, useCategories, useTeams } from "../../firestore";
import { useUserId } from "../../util/userId";
import styles from "./PlayerScreen.module.css";
import * as NoSleep from "nosleep.js";

const noSleep = new NoSleep();

document.addEventListener(
	"click",
	function enableNoSleep() {
		document.removeEventListener("click", enableNoSleep, false);
		noSleep.enable();
	},
	false
);

const PlayerButton: React.FC<{ color: string; onClick: () => void }> = ({ color, onClick }) => (
	<button className={styles.playerButton} onClick={onClick} style={{ backgroundColor: color }}>
		ANSWER!
	</button>
);

// const GetTeamInput: React.FC<{ onClick: () => void }> = ({ onClick }) => (
// 	<div className={styles.teamInputWrapper}>
// 		<input className={styles.teamInput} placeholder="Gib einen Teamnamen ein" type="text" />

// 		<button className={styles.teamInputButton} onClick={onClick}>
// 			Absenden
// 		</button>
// 	</div>
// );

export const PlayerScreen: React.FC<RouteComponentProps> = () => {
	const userId = useUserId();
	const categories = useCategories();
	const teams = useTeams();
	const signedTeam = teams.filter(team => team.members.includes(userId))[0];

	const currentAnswer = categories
		.flatMap(category => category.answers)
		.find(answer => answer.show);

	// initShake(userId, signedTeam);

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

	const handleAnswerClick = useCallback(() => {
		if (!currentAnswer) {
			return;
		}
		requestToAnswer(currentAnswer.id, signedTeam.id)
			.then(_ => {
				console.log(
					"question:",
					currentAnswer.id,
					"team:",
					signedTeam.id,
					"user:",
					userId,
					"request to answer:",
					new Date()
				);
			})
			.catch(err => {
				console.log(err);
			});
	}, [currentAnswer, signedTeam, userId]);

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

	if (!userId) {
		return (
			<div className={styles.loadingView}>
				<Helmet>
					<title>Jeopardy!</title>
				</Helmet>
				<p>
					<strong>Jeopardy!</strong>
				</p>
				<div className={styles.loader}>
					<PacmanLoader sizeUnit={"px"} size={30} color={"#FFD700"} loading={true} />
				</div>
			</div>
		);
	}

	return (
		<div className={styles.root}>
			<Helmet>
				<title>Player {userId}</title>
			</Helmet>
			{signedTeam ? (
				<>
					<div className={styles.teamHeadline}>Your team: {signedTeam.name}</div>
					<div className={styles.userId}>User id: {userId}</div>
					<PlayerButton onClick={handleAnswerClick} color={signedTeam.color} />
				</>
			) : (
				<>
					<div className={styles.helpline}>Scan team QR code or enter team ID</div>
					<QrReader
						className={styles.qrReader}
						delay={300}
						onError={handleError}
						onScan={handleScan}
					/>
					<input
						onInput={handleTeamInput}
						className={styles.playerScreenInput}
						placeholder="Enter your team ID"
						type="text"
					/>
				</>
			)}
		</div>
	);
};
