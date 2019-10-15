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

export interface IAnswer {
	id: string;
	type: AnswerType;
	answer: string;
	hint: string;
	explanation: string;
	points: number;
	show: boolean;
	answered: boolean;
}
