import { firestore } from "firebase/app";
import "firebase/firestore";
import uniqid from "uniqid";
import { AnswerType, ICategory } from "./models";

export const round1: ICategory[] = [
	{
		id: uniqid(),
		name: "Hacker",
		answers: [
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fhacker%2Fhacker1.jpg?alt=media&token=f1248684-8769-47ff-9b07-830138812418",
				hint: "Edward Snowden",
				points: 100,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fhacker%2Fhacker2.jpg?alt=media&token=f08d14c8-6094-4692-bd44-a383129334af",
				hint: "Aaron Swartz",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fhacker%2Fhacker3.jpg?alt=media&token=3eadb35b-0c50-4cf3-9342-9fc30e0e695e",
				hint: "George Hotz",
				points: 300,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fhacker%2Fhacker4.jpg?alt=media&token=54fc2f1b-9c49-41d6-af27-2f7569f6e4c7",
				hint: "Tsutomu Shimomura",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fhacker%2Fhacker5.jpg?alt=media&token=799b07dd-dce5-4252-bec3-9f2c775ad3b5",
				hint: "John Draper (Captain Crunch)",
				points: 500,
				show: false,
				answered: false
			}
		]
	},
	{
		id: uniqid(),
		name: "TLDs",
		answers: [
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: ".gov",
				hint: "Goverment",
				points: 100,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: ".to",
				hint: "Tonga",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: ".tv",
				hint: "Tuvalu",
				points: 300,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: ".mc",
				hint: "Monaco",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: ".za",
				hint: "Zuid Afrika",
				points: 500,
				show: false,
				answered: false
			}
		]
	},
	{
		id: uniqid(),
		name: "Hello World",
		answers: [
			{
				id: uniqid(),
				type: AnswerType.CODE,
				answer:
					'#include <stdio.h>\n#include <stdlib.h>\n\nint main(void)\n{\n        printf("hello, world");\n        return EXIT_SUCCESS;\n}',
				hint: "C",
				points: 100,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.CODE,
				answer: 'require "sinatra"\nget "/hi" do\n        "Hello World!"\nend',
				hint: "Ruby",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.CODE,
				answer: 'tell application "Microsoft Word"\n        quit\nend tell',
				hint: "Apple Script",
				points: 300,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.CODE,
				answer: "print join ' ', reverse split ' ', reverse join ' ', q/teY rehtona lreP .rekcah/;",
				hint: "Perl",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.CODE,
				answer: "",
				hint: "Whitespace",
				points: 500,
				show: false,
				answered: false
			}
		]
	},
	{
		id: uniqid(),
		name: "Games",
		answers: [
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fgames%2Fgames1.jpg?alt=media&token=4fcfc6be-4c99-4923-9a88-f44988cfeaca",
				hint: "Pacman",
				points: 100,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fgames%2Fgames2.jpg?alt=media&token=d99159d1-3858-4db7-94d7-7ffc28e1a5e7",
				hint: "Monkey Island",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fgames%2Fgames3.jpg?alt=media&token=9eaa1282-385c-45df-95fb-e738c9bfa0c1",
				hint: "Pong",
				points: 300,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fgames%2Fgames4.gif?alt=media&token=78f60ca5-4f6c-4167-98b5-f0bd6adecef9",
				hint: "Game of Life",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fgames%2Fgames5.jpg?alt=media&token=09ae5744-bd81-4604-b18d-d7ed3525b11b",
				hint: "Zork",
				points: 500,
				show: false,
				answered: false
			}
		]
	},
	{
		id: uniqid(),
		name: "Websites",
		answers: [
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fwebsites%2Fwebsites1.png?alt=media&token=9008446d-b4dd-400a-9f2a-f047c62d0403",
				hint: "PornHub",
				points: 100,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fwebsites%2Fwebsites2.png?alt=media&token=136efc0d-035a-4873-ac0a-a4e3eedcbe83",
				hint: "GitHub",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fwebsites%2Fwebsites3.png?alt=media&token=05336056-8244-4144-b318-23ca58bba586",
				hint: "StackOverflow",
				points: 300,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fwebsites%2Fwebsites4.png?alt=media&token=4e51925f-ba7b-4282-80cd-da8f9d0c8a3e",
				hint: "AWS",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fwebsites%2Fwebsites5.gif?alt=media&token=ca2e9765-d971-48eb-aec0-1831a5e7fd92",
				hint: "Coderanch",
				points: 500,
				show: false,
				answered: false
			}
		]
	}
];

export const resetRounds = () => {
	// FIXME: Unsubscribe the onSnapshot listener after all docs have been deleted and remove window.location.reload()
	firestore()
		.collection("/categories")
		.onSnapshot(snapshot => {
			snapshot.docs.forEach(doc => doc.ref.delete());
			setTimeout(() => {
				window.location.reload();
			}, 1000);
		});
};

export const bootstrapRound = (categories: ICategory[]) => () => {
	categories.forEach(category => {
		firestore()
			.collection("/categories")
			.doc(category.id)
			.set(category);
	});
};
