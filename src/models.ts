export interface Category {
	id: string;
	name: string;
	answers: Answers[];
}

export enum AnswerType {
	TEXT = "TEXT",
	IMAGE = "IMAGE",
	SOUND = "SOUND"
}

export interface Answers {
	type: AnswerType;
	answer: string;
	points: number;
	show: boolean;
	answered: boolean;
}
