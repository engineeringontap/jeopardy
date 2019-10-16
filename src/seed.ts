import { firestore } from "firebase/app";
import "firebase/firestore";
import uniqid from "uniqid";
import { AnswerType, ICategory, Team } from "./models";

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
				answer:
					"Tritt auf, wenn das Ergebnis einer Berechnung für den gültigen Zahlenbereich zu groß ist, um noch richtig interpretiert werden zu können",
				question: "Integer overflow / Arithmetischer Überlauf",
				explanation: "",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: "Dieser Fehler verschwindet, wenn man ihn näher beobachten will",
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

export const round2: ICategory[] = [
	{
		id: uniqid(),
		name: "Minecraft",
		answers: [
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fminecraft%2Fminecraft1.jpg?alt=media&token=8c865a05-4df5-4930-a027-2f95a131b0d0",
				question: "Clock/Uhr",
				explanation: "",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fminecraft%2Fminecraft2.png?alt=media&token=df73f081-b4c0-4c97-af04-62080c750699",
				question: "Beacon/Leuchtfeuer",
				explanation: "",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fminecraft%2Fminecraft3.png?alt=media&token=5dc5c9a7-7c36-4b51-803e-af3720bd0ae1",
				question: "Hopper/Trichter",
				explanation: "",
				points: 600,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				question: "Repeater/Redstone-Verstärker",
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fminecraft%2Fminecraft4.png?alt=media&token=d2d1a63d-62a3-4813-842b-dc81ef0d102b",
				explanation: "",
				points: 800,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				question: "Observer/Beobachter",
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fminecraft%2Fminecraft5.png?alt=media&token=af62f4cc-359f-4ebb-a2b2-5c03a93f7709",
				explanation: "",
				points: 1000,
				show: false,
				answered: false
			}
		]
	},
	{
		id: uniqid(),
		name: "Secret Identities",
		answers: [
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: "Wonder Woman",
				question: "Diana Prince",
				explanation: "",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: "Captain Marvel",
				question: "Carol Danvers",
				explanation: "",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: "Harley Quinn",
				question: "Harleen Quinzel",
				explanation: "",
				points: 600,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: "Spider-Woman",
				question: "Jessica Drew",
				explanation: "",
				points: 800,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: "Supergirl",
				question: "Kara Zor-El",
				explanation: "",
				points: 1000,
				show: false,
				answered: false
			}
		]
	},
	{
		id: uniqid(),
		name: "Movies",
		answers: [
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fmovies%2Fhacker_movies1.JPG?alt=media&token=7579ffc3-bfa8-4f59-8e90-3b99a4ef7337",
				question: "Jurassic Park",
				explanation: "",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fmovies%2Fhacker_movies2.PNG?alt=media&token=c63a846d-e87a-41cf-9fc4-7db352b8e0ae",
				question: "Iron Man 2",
				explanation: "",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fmovies%2Fhacker_movies3.JPG?alt=media&token=0d0fc232-cc86-4c6e-a0de-251277bce440",
				question: "WarGames",
				explanation: "",
				points: 600,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fmovies%2Fhacker_movies4.JPG?alt=media&token=80232826-0a4b-4c5e-9869-9bca54b3f71d",
				question: "TRON: Legacy",
				explanation: "",
				points: 800,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fmovies%2Fhacker_movies5.JPG?alt=media&token=233abd66-8211-45c9-8d55-a995f3818db4",
				question: "Matrix 2",
				explanation: "",
				points: 1000,
				show: false,
				answered: false
			}
		]
	},
	{
		id: uniqid(),
		name: "Ports",
		answers: [
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: "ssh + ftp",
				question: "22 + 21 = 43",
				explanation: "",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: "mysql + http",
				question: "3306 + 80 = 3386",
				explanation: "",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: "telnet + smtp",
				question: "23 + 25 = 48",
				explanation: "",
				points: 600,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: "dns + redis",
				question: "53 + 6379 = 6432",
				explanation: "",
				points: 800,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: "sip + git",
				question: "5060 + 9418 = 14478",
				explanation: "",
				points: 1000,
				show: false,
				answered: false
			}
		]
	},
	{
		id: uniqid(),
		name: "STDOUT",
		answers: [
			{
				id: uniqid(),
				type: AnswerType.CODE,
				answer:
					'function foo() {\n  var bar = ["t", "o", "e"].reverse().join("");\n  console.log("hello " + bar);\n}\n\nfoo();',
				question: "hello eot",
				explanation: "",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.CODE,
				answer:
					'function foo() {\n  var eot = "hello eot";\n  setTimeout(() => {\n    console.log(eot);\n  }, 100);\n  this.eot = "cheers!";\n}\n\nfoo();',
				question: "hello eot",
				explanation: "",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.CODE,
				answer:
					'function foo() {\n  var beers = 2;\n  setTimeout(() => {\n    console.log(beers + " beers");\n  }, 1000);\n\n  for (let beers = 10; beers < 10; beers++) {}\n}\n\nfoo();',
				question: "2 beers (new scope using let)",
				explanation: "",
				points: 600,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.CODE,
				answer:
					'class Person {\n  drink = "nothing";\n\n  constructor(drink) {\n    this.drink = drink;\n\n    Person.print = function() {\n      console.log("beer");\n    };\n  }\n\n  print() {\n    console.log(this.drink);\n  }\n}\n\nconst person = new Person("water");\nperson.print();',
				question: "water",
				explanation: "",
				points: 800,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.CODE,
				answer:
					'const debug = console.log;\nconst warn = console.warn;\n\nfunction eat(snack, logger) {\n  // TODO: use logger\n  debug(snack);\n\n  if (snack) {\n    logger(snack);\n  } else if (snack === "cookie") {\n    logger("cookie");\n  }\n\n  return snack;\n}\n\nconsole.log(eat("cookie", warn));',
				question: "2x cookie",
				explanation: "",
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
				explanation: "",
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
				explanation: "",
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
				explanation: "",
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
				explanation: "",
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
				explanation: "",
				points: 1000,
				show: false,
				answered: false
			}
		]
	}
];

const teamsSeed: Team[] = [
	{
		id: "4242",
		color: "#ffeb3b",
		name: "Yellow",
		members: [],
		points: 0
	},
	{
		id: "1337",
		color: "#4caf50",
		name: "Green",
		members: [],
		points: 0
	},
	{
		id: "1235",
		color: "#f44336",
		name: "Red",
		members: [],
		points: 0
	},
	{
		id: "4096",
		color: "#e91e63",
		name: "Pink",
		members: [],
		points: 0
	}
];

export const resetRounds = async () => {
	const query = await firestore()
		.collection("categories")
		.get();
	for (const item of query.docs) {
		await firestore()
			.doc(`categories/${item.id}`)
			.delete();
	}
	bootstrapRound(round1)();
};

export const bootstrapRound = (categories: ICategory[]) => async () => {
	const query = await firestore()
		.collection("categories")
		.get();
	if (query.docs.length > 0) {
		if (window.confirm("Cancel running game?")) {
			for (const item of query.docs) {
				await firestore()
					.doc(`categories/${item.id}`)
					.delete();
			}
		} else {
			return;
		}
	}
	for (const category of categories) {
		await firestore()
			.collection("/categories")
			.doc(category.id)
			.set(category);
	}
};

export const resetTeams = async () => {
	const query = await firestore()
		.collection("teams")
		.get();
	for (const item of query.docs) {
		await firestore()
			.doc(`teams/${item.id}`)
			.delete();
	}

	for (const team of teamsSeed) {
		await firestore()
			.collection("teams")
			.doc(team.id)
			.set(team);
	}
};
