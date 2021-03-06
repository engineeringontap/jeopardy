import { RouteComponentProps } from "@reach/router";
import React from "react";
import Timer from "react-compound-timer";
import { Helmet } from "react-helmet";
import {
	award,
	chooseAnswer,
	dismissAnswers,
	penalize,
	removePlayer,
	resetAnswerRequests,
	resetTeamPoints,
	setAnsweredAndDismiss,
	setTeamPoints,
	toggleAnsweredAndDismiss,
	useActiveTeam,
	useCategories,
	useTeams
} from "../../firestore";
import { AnswerType, IAnswer, ICategory, Team } from "../../models";
import { resetTeams } from "../../seed";
import { roundGames } from "../../seed/round-games";
import { roundHardcore } from "../../seed/round-hardcore";
import { roundMovies } from "../../seed/round-movies";
import { roundTech } from "../../seed/round-tech";
import { round1 } from "../../seed/round1";
import { round2 } from "../../seed/round2";
import { round3 } from "../../seed/round3";
import { round90 } from "../../seed/round-beer";
import { round93 } from "../../seed/round93";
import { round94 } from "../../seed/round94";
import { round95 } from "../../seed/round95";
import { round96 } from "../../seed/round96";
import { round97 } from "../../seed/round97";
import { round98 } from "../../seed/round98";
import { round99 } from "../../seed/round99";
import { bootstrapRound } from "../../seed/seed";
import { startTheme, stopTheme, toggleTheme, useSoundEnbaled } from "../../util/sound";
import styles from "./ModeratorScreen.module.css";

const dismiss = (category?: ICategory) => () => {
	if (!category) {
		return;
	}
	dismissAnswers(category);
	stopTheme();
	resetAnswerRequests();
};

const toggleAnswered = (answer: IAnswer, category?: ICategory) => () => {
	if (!category) {
		return;
	}
	toggleAnsweredAndDismiss(category, answer);
};

const awardPoints = (team: Team, answer: IAnswer, category: ICategory) => () => {
	award(team, answer);
	setAnsweredAndDismiss(category, answer);
	stopTheme();
	resetAnswerRequests();
};

const penalizePoints = (team: Team, answer: IAnswer, category: ICategory) => () => {
	penalize(team, answer);
	setAnsweredAndDismiss(category, answer);
	stopTheme();
	resetAnswerRequests();
};

const setRandomAnswer = categories => () => {
	const unanswered = categories
		.flatMap(category => category.answers)
		.filter(answer => !answer.answered);

	const randomAnswer = unanswered[Math.floor(Math.random() * unanswered.length)];

	const cat = categories.find(c => c.answers.find(a => a.id === randomAnswer.id));

	chooseAnswer(cat, randomAnswer);
	startTheme();
};

const CurrentAnswer: React.FC<{
	currentAnswer: IAnswer | undefined;
	currentCategory: ICategory | undefined;
}> = ({ currentAnswer, currentCategory }) => {
	const teams = useTeams();
	const categories = useCategories();
	const activeTeamId = useActiveTeam(currentAnswer ? currentAnswer.id : "");
	const activeTeam = teams.find(team => team.id === activeTeamId);

	if (!currentAnswer || !currentCategory) {
		stopTheme();
		return (
			<div>
				No Answer selected
				<button onClick={setRandomAnswer(categories)}>Select random answer</button>
			</div>
		);
	}

	let answerImageOrText: any = "";

	switch (currentAnswer.type) {
		case AnswerType.IMAGE:
			answerImageOrText = <img width={100} src={currentAnswer.answer} alt="" />;
			break;
		case AnswerType.TEXT:
			answerImageOrText = <div>{currentAnswer.answer}</div>;
	}

	if (activeTeam) {
		stopTheme();
	}

	return (
		<div>
			<div>{answerImageOrText}</div>
			<div>Points: {currentAnswer.points}</div>
			<div>Hint: {currentAnswer.question}</div>
			<div>Explanation: {currentAnswer.explanation}</div>
			<button onClick={dismiss(currentCategory)}>Dismiss</button>
			{activeTeam && (
				<div>
					<button
						key={`${activeTeam.id}_award`}
						className={styles.pointsbutton}
						style={{ backgroundColor: activeTeam.color }}
						onClick={awardPoints(activeTeam, currentAnswer, currentCategory)}
					>
						Award {activeTeam.name}
					</button>
					<button
						key={`${activeTeam.id}_penalty`}
						className={styles.pointsbutton}
						style={{ backgroundColor: activeTeam.color }}
						onClick={penalizePoints(activeTeam, currentAnswer, currentCategory)}
					>
						penalize {activeTeam.name}
					</button>
					<div className={styles.timer}>
						<Timer>
							<Timer.Seconds />s
						</Timer>
					</div>
				</div>
			)}
			<div className={styles.awardings}>
				<div>
					{teams.map(t => (
						<button
							key={t.id}
							style={{ backgroundColor: t.color }}
							onClick={awardPoints(t, currentAnswer, currentCategory)}
						>
							Award {t.name}
						</button>
					))}
				</div>
				<div>
					{teams.map(t => (
						<button
							key={t.id}
							style={{ backgroundColor: t.color }}
							onClick={penalizePoints(t, currentAnswer, currentCategory)}
						>
							penalize {t.name}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export const ModeratorScreen: React.SFC<RouteComponentProps> = () => {
	const categories = useCategories();
	const teams = useTeams();
	const { enabled, toggleThemeState } = useSoundEnbaled();

	const isModerator = Boolean(localStorage.getItem("moderator") === "true");

	if (!isModerator) {
		return <></>;
	}

	// const reset = () => {
	// 	if (window.confirm("Really reset game?")) {
	// 		if (window.confirm("Really????")) {
	// 			resetRounds();
	// 			resetTeams();
	// 			resetAnswerRequests();
	// 		}
	// 	}
	// };

	const choose = (category: ICategory, answer: IAnswer) => () => {
		chooseAnswer(category, answer);
		startTheme();
	};

	const currentCategory = categories.find(category => category.answers.some(answer => answer.show));
	const currentAnswer = categories
		.flatMap(category => category.answers)
		.find(answer => answer.show);

	const removePlayerFromTeam = (userId: string, team: Team) => () => {
		if (window.confirm(`Remove user ${userId} from team ${team.id}?`)) {
			removePlayer(userId, team);
		}
	};

	const handleThemeToggleChange = () => {
		toggleThemeState();
	};

	return (
		<div className={styles.root}>
			<Helmet>
				<title>Moderator</title>
			</Helmet>
			<div className={styles.controlBar}>
				<button onClick={bootstrapRound(roundTech)}>Bootstrap Tech Round</button>
				<button onClick={bootstrapRound(roundGames)}>Bootstrap Games Round</button>
				<button onClick={bootstrapRound(roundMovies)}>Bootstrap Movies Round</button>
				<button onClick={bootstrapRound(roundHardcore)}>Bootstrap Hardcore Round</button>
				<button onClick={bootstrapRound(round1)}>Bootstrap Round 1</button>
				<button onClick={bootstrapRound(round1)}>Bootstrap Round 1</button>
				<button onClick={bootstrapRound(round2)}>Bootstrap Round 2</button>
				<button onClick={bootstrapRound(round3)}>Bootstrap Round 3</button>
				<button onClick={bootstrapRound(round90)}>Bootstrap Round Beer</button>
				<button onClick={bootstrapRound(round93)}>Bootstrap Round 93</button>
				<button onClick={bootstrapRound(round94)}>Bootstrap Round 94</button>
				<button onClick={bootstrapRound(round95)}>Bootstrap Round 95</button>
				<button onClick={bootstrapRound(round96)}>Bootstrap Round 96</button>
				<button onClick={bootstrapRound(round97)}>Bootstrap Round 97</button>
				<button onClick={bootstrapRound(round98)}>Bootstrap Round 98</button>
				<button onClick={bootstrapRound(round99)}>Bootstrap Round 99</button>
			</div>
			<div className={styles.controlBar}>
				{/* <button onClick={reset}>Reset</button> */}
				<button onClick={resetTeamPoints}>Reset team points</button>
				<button onClick={resetAnswerRequests}>Reset answer requests</button>
				<button onClick={resetTeams}>Reset teams</button>
				<button onClick={toggleTheme}>Toggle theme song</button>
				<input
					type="checkbox"
					name="theme-toggle"
					checked={enabled}
					onChange={handleThemeToggleChange}
				/>
			</div>
			<div className={styles.content}>
				<div className={styles.categories}>
					{categories.map(category => (
						<div key={category.id}>
							<h1>{category.name}</h1>
							{category.answers.map(answer => (
								<div
									key={answer.id}
									className={styles.answerRow}
									style={{ textDecoration: answer.answered ? "line-through" : "none" }}
								>
									<span className={styles.points}>{answer.points}</span>
									<button onClick={choose(category, answer)}>Show</button>
									<button onClick={dismiss(category)}>Dismiss</button>
									<button onClick={toggleAnswered(answer, category)}>toggle Answered</button>
								</div>
							))}
						</div>
					))}
				</div>
				<div className={styles.rightColumn}>
					<div className={styles.currentAnswer}>
						<div className={styles.currentAnswerTitle}>
							<div>Current Jeopardy</div>
						</div>
						<CurrentAnswer currentAnswer={currentAnswer} currentCategory={currentCategory} />
					</div>
					<div className={styles.teams}>
						{teams.map(team => (
							<div style={{ backgroundColor: team.color }} className={styles.team} key={team.id}>
								<div className={styles.teamName}>
									{team.name} - ID: {team.id} - Points: {team.points}
								</div>
								<div>
									<span>Set points</span>
									<input
										defaultValue={team.points}
										type="number"
										onKeyDown={e => {
											if (e.key === "Enter") {
												setTeamPoints(team, Number(e.currentTarget.value));
											}
										}}
									/>
								</div>
								<div>
									Members:
									<ul>
										{team.members.map(m => (
											<li key={m}>
												{m} <button onClick={removePlayerFromTeam(m, team)}>Remove</button>
											</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
