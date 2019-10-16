import uniqid from "uniqid";
import { AnswerType, ICategory } from "../models";

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
				question: "Edward Snowden",
				explanation: "Dieser Herr hat einen der größten Geheimdienste bloßgestellt.",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fhacker%2Fhacker2.jpg?alt=media&token=f08d14c8-6094-4692-bd44-a383129334af",
				question: "Aaron Swartz",
				explanation: "Dieser Herr hat die sog. Frontpage des Internet mitbegründet.",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fhacker%2Fhacker3.jpg?alt=media&token=3eadb35b-0c50-4cf3-9342-9fc30e0e695e",
				question: "George Hotz",
				explanation: "Dieser Herr ist hat iPhones aus dem Gefängnis befreit",
				points: 600,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fhacker%2Fhacker4.jpg?alt=media&token=54fc2f1b-9c49-41d6-af27-2f7569f6e4c7",
				question: "Tsutomu Shimomura",
				explanation:
					"Er half dem FBI Kevin Mitnik zu finden und schrieb später das Buch Takedown darüber.",
				points: 800,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fhacker%2Fhacker5.jpg?alt=media&token=799b07dd-dce5-4252-bec3-9f2c775ad3b5",
				question: "John Draper (Captain Crunch)",
				explanation:
					"Er ist ein legendärer Phone Phreak und trägt den Spitznamen eines Cornflakes Maskottchens",
				points: 1000,
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
				question: "Goverment",
				explanation: "Wird überwiegend von der Amerikanischen Regierung eingesetzt",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: ".to",
				question: "Tonga",
				explanation: "Die Inselgruppe wurde früher auch Freundschaftsinseln genannt.",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: ".tv",
				question: "Tuvalu",
				explanation:
					"Bis zur Unabhängigkeit am 1. Oktober 1978 hieß das Territorium Ellice Islands.",
				points: 600,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: ".mc",
				question: "Monaco",
				explanation:
					"Heute ist das Fürstentum vornehmlich bei den Reichen der Welt als Wohnsitz begehrt",
				points: 800,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: ".za",
				question: "Zuid Afrika",
				explanation:
					"Es ist der am weitesten entwickelte Wirtschaftsraum des afrikanischen Kontinents",
				points: 1000,
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
				question: "C",
				explanation:
					"Zahlreiche Sprachen orientieren sich an der Syntax und anderen Eigenschaften von dieser Sprache",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.CODE,
				answer: 'require "sinatra"\nget "/hi" do\n        "Hello World!"\nend',
				question: "Ruby",
				explanation:
					"Diese höhere Programmiersprache wurde Mitte der 1990er Jahre vom Japaner Yukihiro Matsumoto entworfen",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.CODE,
				answer: 'tell application "Microsoft Word"\n        quit\nend tell',
				question: "Apple Script",
				explanation: "Die erste Version dieser Sprache basierte auf dem HyperCard-Projekt",
				points: 600,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.CODE,
				answer: "print join ' ', reverse split ' ', reverse join ' ', q/teY rehtona lreP .rekcah/;",
				question: "Perl",
				explanation:
					"Der Linguist Larry Wall entwarf sie 1987 als Synthese aus C, awk, den Unix-Befehlen und anderen Einflüssen",
				points: 800,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.CODE,
				answer: "",
				question: "Whitespace",
				explanation: "",
				points: 1000,
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
				question: "Pacman",
				explanation: "",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fgames%2Fgames2.jpg?alt=media&token=d99159d1-3858-4db7-94d7-7ffc28e1a5e7",
				question: "Monkey Island",
				explanation: "",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fgames%2Fgames3.jpg?alt=media&token=9eaa1282-385c-45df-95fb-e738c9bfa0c1",
				question: "Pong",
				explanation: "",
				points: 600,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fgames%2Fgames4.gif?alt=media&token=78f60ca5-4f6c-4167-98b5-f0bd6adecef9",
				question: "Game of Life",
				explanation: "",
				points: 800,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fgames%2Fgames5.jpg?alt=media&token=09ae5744-bd81-4604-b18d-d7ed3525b11b",
				question: "Zork",
				explanation: "",
				points: 1000,
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
				question: "PornHub",
				explanation: "",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fwebsites%2Fwebsites2.png?alt=media&token=136efc0d-035a-4873-ac0a-a4e3eedcbe83",
				question: "GitHub",
				explanation: "",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fwebsites%2Fwebsites3.png?alt=media&token=05336056-8244-4144-b318-23ca58bba586",
				question: "StackOverflow",
				explanation: "",
				points: 600,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fwebsites%2Fwebsites4.png?alt=media&token=4e51925f-ba7b-4282-80cd-da8f9d0c8a3e",
				question: "AWS",
				explanation: "",
				points: 800,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fwebsites%2Fwebsites5.gif?alt=media&token=ca2e9765-d971-48eb-aec0-1831a5e7fd92",
				question: "Coderanch",
				explanation: "",
				points: 1000,
				show: false,
				answered: false
			}
		]
	},
	{
		id: uniqid(),
		name: "Bugs",
		answers: [
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: "bla bla bla",
				question: "Integer overflow",
				explanation: "",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: "bla bla bla",
				question: "Heisenbug",
				explanation: "",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: "bla bla bla",
				question: "indexoutofbounds",
				explanation: "",
				points: 600,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: "bla bla bla",
				question: "Nullpointer",
				explanation: "",
				points: 800,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: "bla bla bla",
				question: "Kernel panic",
				explanation: "",
				points: 1000,
				show: false,
				answered: false
			}
		]
	}
];
