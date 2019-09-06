import React from "react";
import { chooseAnswer, dismissAnswers, useCategories } from "../../firestore";
import { IAnswer, ICategory } from "../../models";
import { bootstrapRound, round1 } from "../../seed";

interface IProps {
	path: string;
}

export const ModeratorScreen: React.SFC<IProps> = () => {
	const categories = useCategories();

	const choose = (category: ICategory, answer: IAnswer) => () => {
		chooseAnswer(category, answer);
	};
	const dismiss = (category: ICategory) => () => {
		dismissAnswers(category);
	};

	return (
		<div>
			<button onClick={bootstrapRound(round1)}>Bootstrap Round 1</button>
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
	);
};
