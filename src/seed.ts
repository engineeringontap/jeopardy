import { AnswerType, Category } from "./models";

export const categories: Category[] = [
	{
		id: "",
		name: "Abbreviations",
		answers: [
			{
				id: "",
				type: AnswerType.TEXT,
				answer: "HTTP",
				hint: "Hypertext Transfer Protocol",
				points: 100,
				show: false,
				answered: false
			},
			{
				id: "",
				type: AnswerType.TEXT,
				answer: "SIP",
				hint: "Session Initiation Protocol",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: "",
				type: AnswerType.TEXT,
				answer: "Debian",
				hint: "Debra & Ian",
				points: 300,
				show: false,
				answered: false
			},
			{
				id: "",
				type: AnswerType.TEXT,
				answer: "WWDC",
				hint: "Apple World Wide Developer Conference",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: "",
				type: AnswerType.TEXT,
				answer: "Perl",
				hint: "Practical Extraction and Reporting Language",
				points: 500,
				show: false,
				answered: false
			}
		]
	}
];
