import { RouteComponentProps } from "@reach/router";
import React from "react";
import { chooseAnswer, dismissAnswers, useCategories, useTeams } from "../../firestore";
import { AnswerType, IAnswer, ICategory } from "../../models";
import { bootstrapRound, resetRounds, round1 } from "../../seed";
import { toggleTheme } from "../../util/sound";
import styles from "./ModeratorScreen.module.css";

const CurrentAnswer: React.FC<{
	currentAnswer: IAnswer | undefined;
	currentCategory: ICategory | undefined;
}> = ({ currentAnswer, currentCategory }) => {
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
		</div>
	);
};

export const ModeratorScreen: React.SFC<RouteComponentProps> = () => {
	const categories = useCategories();
	const teams = useTeams();

	const reset = () => {
		resetRounds();
	};
	const choose = (category: ICategory, answer: IAnswer) => () => {
		chooseAnswer(category, answer);
	};
	const dismiss = (category: ICategory) => () => {
		dismissAnswers(category);
	};

	const currentCategory = categories.find(category => category.answers.some(answer => answer.show));
	const currentAnswer = categories
		.flatMap(category => category.answers)
		.find(answer => answer.show);

	return (
		<div className={styles.root}>
			<div className={styles.controlBar}>
				<button onClick={reset}>Reset</button>
				<button onClick={bootstrapRound(round1)}>Bootstrap Round 1</button>
				<button onClick={toggleTheme}>Toggle theme song</button>
			</div>
			<div className={styles.content}>
				<div className={styles.categories}>
					{categories.map(category => (
						<div>
							<h1>{category.name}</h1>
							{category.answers.map(answer => (
								<div>
									<div>
										<span>
											{answer.points} - {answer.hint}
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
						<div>Current</div>
						<CurrentAnswer currentAnswer={currentAnswer} currentCategory={currentCategory} />
					</div>
					<div className={styles.teams}>
						{teams.map(team => (
							<div style={{ backgroundColor: team.color }} className={styles.team} key={team.id}>
								{team.name} ({team.members.length})
								<div>
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
