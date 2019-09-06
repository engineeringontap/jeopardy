export interface Category {
	id: string;
	name: string;
	answers: Answer[];
}

export enum AnswerType {
	TEXT = "TEXT",
	IMAGE = "IMAGE",
	SOUND = "SOUND"
}

export interface Answer {
	type: AnswerType;
	answer: string;
	points: number;
	show: boolean;
	answered: boolean;
}
