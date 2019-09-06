import React from "react";
import { IAnswer, ICategory } from "../../models";
import { categories } from "../../seed";
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
	return (
		<div className={styles.root}>
			<div className={styles.title}>
				<span className={styles.titleText}>
					<span className={styles.titleName}>Jeopardy</span> by engineeringontap
				</span>
			</div>
			<div className={styles.categories}>
				{categories.map(c => (
					<Category category={c} />
				))}
			</div>
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
