import uniqid from "uniqid";
import { AnswerType, ICategory } from "../models";

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
