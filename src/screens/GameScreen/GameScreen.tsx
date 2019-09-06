import React from "react";
import styles from "./GameScreen.module.css";
import { Answer, AnswerType } from "../../models";

interface IProps {
	path: string;
}

const answers: { [key: string]: Answer[] } = {
	software: [
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 500,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 400,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 300,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 200,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 100,
			show: false,
			answered: false
		}
	],
	agile: [
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 500,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 400,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 300,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 200,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 100,
			show: false,
			answered: false
		}
	],
	design: [
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 500,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 400,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 300,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 200,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 100,
			show: false,
			answered: false
		}
	],
	hardware: [
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 500,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 400,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 300,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 200,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 100,
			show: false,
			answered: false
		}
	],
	os: [
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 500,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 400,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 300,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 200,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 100,
			show: false,
			answered: false
		}
	],
	mobile: [
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 500,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 400,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 300,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 200,
			show: false,
			answered: false
		},
		{
			id: "dasda",
			hint: "hint here",
			type: AnswerType.TEXT,
			answer: "It is green",
			points: 100,
			show: false,
			answered: false
		}
	]
};

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

const AnswerElement: React.FC<Answer> = ({ points }) => {
	return <div className={styles.answer}>{points}</div>;
};

const Category: React.FC<{ category: string }> = ({ category }) => {
	return (
		<div className={styles.category}>
			<div className={styles.categoryTitle}>{category}</div>
			{answers[category].map(a => (
				<AnswerElement {...a} />
			))}
		</div>
	);
};

export const GameScreen: React.SFC<IProps> = () => {
	const categories = Object.keys(answers);
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
