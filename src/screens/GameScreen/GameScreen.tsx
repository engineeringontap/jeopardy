import { RouteComponentProps } from "@reach/router";
import React from "react";
import Highlight from "react-highlight.js";
import { useCategories, useTeams } from "../../firestore";
import { AnswerType, IAnswer, ICategory } from "../../models";
import CountTo from "react-count-to";
import styles from "./GameScreen.module.css";
import { Helmet } from "react-helmet";

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
			<h1>{category.name}</h1>
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
				<AnswerElement {...a} />
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

	return (
		<div className={styles.root}>
			<Helmet>
				<title>Jeopardy!</title>
			</Helmet>
			<div className={styles.title}>
				<span className={styles.titleText}>
					<span className={styles.titleName}>Jeopardy</span> by engineeringontap
				</span>
			</div>
			{currentCategory && currentAnswer ? (
				<Answer category={currentCategory} answer={currentAnswer} />
			) : (
				<div className={styles.categories}>
					{categories.map(c => (
						<Category category={c} />
					))}
				</div>
			)}
			<div className={styles.teamFooter}>
				{teams.map(t => (
					<div
						className={styles.teamItem}
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
		</div>
	);
};
