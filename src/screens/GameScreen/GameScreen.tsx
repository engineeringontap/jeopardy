import { RouteComponentProps } from "@reach/router";
import classnames from "classnames";
import React from "react";
import CountTo from "react-count-to";
import { Helmet } from "react-helmet";
import Highlight from "react-highlight.js";
import { useActiveTeam, useCategories, useTeams } from "../../firestore";
import { AnswerType, IAnswer, ICategory } from "../../models";
import styles from "./GameScreen.module.css";
import Confetti from "react-confetti";

const renderAnswerByType = ({ type, answer }: IAnswer) => {
	switch (type) {
		case AnswerType.TEXT:
			return <div className={styles.text}>{answer}</div>;
		case AnswerType.IMAGE:
			return <img className={styles.image} src={answer} alt="" title="" />;
		case AnswerType.CODE:
			return <Highlight className={styles.code}>{answer}</Highlight>;
		default:
			break;
	}
};

const Answer: React.FC<{ category: ICategory; answer: IAnswer }> = ({ category, answer }) => {
	return (
		<div>
			<div className={styles.answerTitle}>
				{category.name} ({answer.points})
			</div>
			{renderAnswerByType(answer)}
		</div>
	);
};

const AnswerElement: React.FC<IAnswer> = ({ points, answered }) => {
	return <div className={styles.answer}>{answered ? "" : points}</div>;
};

const Category: React.FC<{ category: ICategory }> = ({ category }) => {
	return (
		<div className={styles.category}>
			<div className={styles.categoryTitle}>{category.name}</div>
			{category.answers.map(a => (
				<AnswerElement key={a.id} {...a} />
			))}
		</div>
	);
};

export const GameScreen: React.FC<RouteComponentProps> = () => {
	const categories = useCategories();
	const teams = useTeams();

	const currentCategory = categories.find(category => category.answers.some(answer => answer.show));
	const currentAnswer = categories
		.flatMap(category => category.answers)
		.find(answer => answer.show);

	const activeTeam = useActiveTeam(currentAnswer ? currentAnswer.id : "");

	const allAnswered = categories
		.flatMap(category => category.answers)
		.map(a => a.answered)
		.reduce((accumulator, currentValue) => accumulator && currentValue, true);

	console.log({ allAnswered });

	const gameContent = (
		<>
			{currentCategory && currentAnswer ? (
				<Answer category={currentCategory} answer={currentAnswer} />
			) : (
				<div className={styles.categories}>
					{categories.map(c => (
						<Category key={c.id} category={c} />
					))}
				</div>
			)}
			<div className={styles.teamFooter}>
				{teams.map(t => (
					<div
						key={t.id}
						className={classnames(styles.teamItem, {
							[styles.teamItemActive]: t.id === activeTeam
						})}
						style={{
							backgroundColor: t.color
						}}
					>
						<div className={styles.teamName}>{t.name}</div>
						<div className={styles.teamPoints}>
							<CountTo to={t.points} speed={1000} />
						</div>
					</div>
				))}
			</div>
		</>
	);

	const canvasRef = React.createRef<HTMLCanvasElement>();

	const finishContent = (
		<div className={styles.confettiWrapper}>
			<canvas ref={canvasRef}></canvas>
			<Confetti width={window.innerWidth} height={window.innerHeight} canvasRef={canvasRef} />
		</div>
	);

	return (
		<div className={styles.root}>
			<Helmet>
				<title>Jeopardy!</title>
			</Helmet>
			<div className={styles.title}>
				<span className={styles.titleText}>
					<span className={styles.titleFirst}>
						<span className={styles.titleName}>Jeopardy</span> by engineeringontap
					</span>
					<span>jeopardy.sipgate.beer</span>
				</span>
			</div>
			{allAnswered ? finishContent : gameContent}
		</div>
	);
};
