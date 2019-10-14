import { RouteComponentProps } from "@reach/router";
import React from "react";
import { Helmet } from "react-helmet";
import {
	award,
	chooseAnswer,
	dismissAnswers,
	penalize,
	setAnsweredAndDismiss,
	setTeamPoints,
	useCategories,
	useTeams
} from "../../firestore";
import { AnswerType, IAnswer, ICategory, Team } from "../../models";
import { bootstrapRound, resetRounds, resetTeams, round1, round2 } from "../../seed";
import { startTheme, stopTheme, toggleTheme } from "../../util/sound";
import styles from "./ModeratorScreen.module.css";

const dismiss = (category: ICategory) => () => {
	dismissAnswers(category);
	stopTheme();
};

const awardPoints = (team: Team, answer: IAnswer, category: ICategory) => () => {
	award(team, answer);
	setAnsweredAndDismiss(category, answer);
	stopTheme();
};
const penalizePoints = (team: Team, answer: IAnswer, category: ICategory) => () => {
	penalize(team, answer);
	setAnsweredAndDismiss(category, answer);
	stopTheme();
};

const CurrentAnswer: React.FC<{
	currentAnswer: IAnswer | undefined;
	currentCategory: ICategory | undefined;
}> = ({ currentAnswer, currentCategory }) => {
	const teams = useTeams();

	if (!currentAnswer || !currentCategory) {
		return <div>No Answer selected</div>;
	}

	let answerImageOrText: any = "";

	switch (currentAnswer.type) {
		case AnswerType.IMAGE:
			answerImageOrText = <img width={100} src={currentAnswer.answer} alt="" />;
			break;
		case AnswerType.TEXT:
			answerImageOrText = <div>{currentAnswer.answer}</div>;
	}

	return (
		<div>
			<div>{answerImageOrText}</div>
			<div>Points: {currentAnswer.points}</div>
			<div>Hint: {currentAnswer.hint}</div>
			<div>Explanation: {currentAnswer.explanation}</div>
			<button onClick={dismiss(currentCategory)}>Dismiss</button>
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
	);
};

export const ModeratorScreen: React.SFC<RouteComponentProps> = () => {
	const categories = useCategories();
	const teams = useTeams();

	const reset = () => {
		if (window.confirm("Really reset game?")) {
			if (window.confirm("Really????")) {
				resetRounds();
				resetTeams();
			}
		}
	};

	const choose = (category: ICategory, answer: IAnswer) => () => {
		chooseAnswer(category, answer);
		startTheme();
	};

	const currentCategory = categories.find(category => category.answers.some(answer => answer.show));
	const currentAnswer = categories
		.flatMap(category => category.answers)
		.find(answer => answer.show);

	return (
		<div className={styles.root}>
			<Helmet>
				<title>Moderator</title>
			</Helmet>
			<div className={styles.controlBar}>
				<button onClick={reset}>Reset</button>
				<button onClick={bootstrapRound(round1)}>Bootstrap Round 1</button>
				<button onClick={bootstrapRound(round2)}>Bootstrap Round 2</button>
				<button onClick={toggleTheme}>Toggle theme song</button>
			</div>
			<div className={styles.content}>
				<div className={styles.categories}>
					{categories.map(category => (
						<div key={category.id}>
							<h1>{category.name}</h1>
							{category.answers.map(answer => (
								<div key={answer.id}>
									<div>
										<span style={{ textDecoration: answer.answered ? "line-through" : "none" }}>
											{answer.points}
										</span>
										<button onClick={choose(category, answer)}>Show</button>
										<button onClick={dismiss(category)}>Dismiss</button>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
				<div className={styles.rightColumn}>
					<div className={styles.currentAnswer}>
						<div>Current Jeopardy</div>
						<CurrentAnswer currentAnswer={currentAnswer} currentCategory={currentCategory} />
					</div>
					<div className={styles.teams}>
						{teams.map(team => (
							<div style={{ backgroundColor: team.color }} className={styles.team} key={team.id}>
								{team.name}
								<input
									defaultValue={team.points}
									type="text"
									onKeyDown={e => {
										if (e.key === "Enter") {
											setTeamPoints(team, Number(e.currentTarget.value));
										}
									}}
								/>
								<div>
									Members:
									<ul>
										{team.members.map(m => (
											<li key={m}>{m}</li>
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
