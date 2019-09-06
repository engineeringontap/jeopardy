import React from "react";
import Highlight from "react-highlight.js";
import { useCategories } from "../../firestore";
import { AnswerType, IAnswer, ICategory } from "../../models";
import styles from "./GameScreen.module.css";

interface IProps {
	path: string;
}

const teams = [
	{
		points: 300,
		name: "Team Pink",
		color: "#FF69B4"
	},
	{
		points: 300,
		name: "Team Red",
		color: "#FF0000"
	},
	{
		points: 300,
		name: "Team Green",
		color: "#00FF00"
	},
	{
		points: 300,
		name: "Team Yellow",
		color: "#FFFF00"
	}
];

const renderAnswerByType = ({ type, answer }: IAnswer) => {
	switch (type) {
		case AnswerType.TEXT:
			return <div>{answer}</div>;
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

const AnswerElement: React.FC<IAnswer> = ({ points }) => {
	return <div className={styles.answer}>{points}</div>;
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

export const GameScreen: React.SFC<IProps> = () => {
	const categories = useCategories();

	const currentCategory = categories.find(category => category.answers.some(answer => answer.show));
	const currentAnswer = categories
		.flatMap(category => category.answers)
		.find(answer => answer.show);

	return (
		<div className={styles.root}>
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
						{t.name}
						<br />
						{t.points}
					</div>
				))}
			</div>
		</div>
	);
};
