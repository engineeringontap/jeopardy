export interface ICategory {
	id: string;
	name: string;
	answers: IAnswer[];
}

export enum AnswerType {
	TEXT = "TEXT",
	IMAGE = "IMAGE",
	CODE = "CODE"
}

export interface Team {
	id: string;
	color: string;
	name: string;
	members: string[];
	points: number;
}

export interface IAnswer {
	id: string;
	type: AnswerType;
	answer: string;
	answerDe?: string;
	hint: string;
	explanation: string;
	points: number;
	show: boolean;
	answered: boolean;
}
