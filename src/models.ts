export interface Category {
	id: string;
	name: string;
	answers: Answer[];
}

export enum AnswerType {
	TEXT = "TEXT",
	IMAGE = "IMAGE",
	CODE = "CODE"
}

export interface Answer {
	id: string;
	type: AnswerType;
	answer: string;
	hint: string;
	points: number;
	show: boolean;
	answered: boolean;
}
