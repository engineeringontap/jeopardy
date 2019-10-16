import uniqid from "uniqid";
import { AnswerType, ICategory } from "../models";

export const roundTech: ICategory[] = [
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
				explanation: "Der Code hier ist syntaktisch korrekt und gibt auch wirklich hello world aus",
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
				explanation: "2018 hatte diese Platform 33 Milliarden Visits",
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
				explanation: "Diese Platform wurde in ruby on rails und elixir geschrieben",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fwebsites%2Fwebsite4.png?alt=media&token=6610bea3-4859-4c9a-a9dd-e9118ceac289",
				question: "StackOverflow",
				explanation: "250 Leute schmeißen diese Webseite",
				points: 600,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fwebsites%2Fwebsites4.png?alt=media&token=5de9ed25-5f2a-42eb-b7e6-e9e2a07a3d33",
				question: "SpaceX",
				explanation: "Irgendwo auf der Website steht, dass ihr nur max. 64 Tonnen mitnehmen könnt.",
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
				explanation: "Wenn Stackoverflow mal down ist, kommt ihr meistens hier raus",
				points: 1000,
				show: false,
				answered: false
			}
		]
	},
	{
		id: uniqid(),
		name: "Unix",
		answers: [
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Funix%2Funix1.jpg?alt=media&token=7204ac9d-21ad-4704-90ac-289954a8a2d0",
				question: "cat",
				explanation: "Wie heißt das UNIX Kommando?",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Funix%2Funix2.jpg?alt=media&token=78e10fcb-5240-4885-a293-4528eadff922",
				question: "tail",
				explanation: "Wir suchen ein UNIX Kommando zu diesem Bild",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Funix%2Funix3.gif?alt=media&token=23e9c6f3-4a4a-4525-a5f1-4856fa4c2c2b",
				question: "ping",
				explanation:
					"Ich weiß ja nicht wie ihr eure Infrastruktur monitored aber wir machen das mit dem Tool",
				points: 600,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Funix%2Funix4.jpg?alt=media&token=d7edc8b1-5b1b-4082-9dec-d25685d2bfd7",
				question: "netcat",
				explanation: "Die meisten benutzen es mit -tulpen",
				points: 800,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Funix%2Funix5.jpg?alt=media&token=f612cd84-fed3-4766-9aac-833e1cc9915a",
				question: "socat",
				explanation: "Wer von euch hatte noch ein Modem oder ist ein UNIX Opa?",
				points: 1000,
				show: false,
				answered: false
			}
		]
	},
	{
		id: "1qxjj4uk1scgk0c",
		name: "Hacker Crews",
		answers: [
			{
				id: "1qxjj4uk1scgk0h",
				type: AnswerType.TEXT,
				answer: "Cyper, Tank, Switch, Trinity, Morpheus, Neo",
				question: "What is 'The Matrix'?",
				explanation: "Die Sonnenbrille für jeden Charakter wurde individuell gestaltet.",
				hint: "Bugs wurden hier nett mit Deja vu umschrieben",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: "1qxjj4uk1scgk0m",
				type: AnswerType.TEXT,
				answer: "Eliot Anderson, Darlene, Tyrell Wellick, fsociety",
				question: "What is 'Mr. Robot'?",
				explanation: "",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: "1qxjj4uk1scgk0r",
				type: AnswerType.TEXT,
				answer: "The Plague, Phantom Phreak, Crash Override, Zero Cool, Acid Burn",
				question: "What is 'Hackers'?",
				explanation: "",
				points: 600,
				show: false,
				answered: false
			},
			{
				id: "1qxjj4uk1scgk0w",
				type: AnswerType.TEXT,
				answer: "Batou, Togusa, Saito, Ishikawa, Motoko ('The Major')",
				question: "What is 'Ghost in the Shell'?",
				explanation: "",
				hint: "Puppeteer hochgehen lassen, Anime, Realverfilmung",
				points: 800,
				show: false,
				answered: false
			},
			{
				id: "1qxjj4uk1scgk11",
				type: AnswerType.TEXT,
				answer: "Count Zero, Brian Oblivion, Space Rogue, Kingpin, Mudge",
				question: "What is L0pht?",
				explanation:
					"Die Pioniere des responsible disclosure, Passwort brute force tool geschrieben",
				points: 1000,
				show: false,
				answered: false
			}
		]
	}
];
