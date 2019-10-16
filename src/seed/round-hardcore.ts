import uniqid from "uniqid";
import { AnswerType, ICategory } from "../models";

export const roundHardcore: ICategory[] = [
	{
		id: uniqid(),
		name: "Ports",
		answers: [
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: "ssh + ftp",
				hint: "22 + 21 = 43",
				explanation: "",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: "mysql + http",
				hint: "3306 + 80 = 3386",
				explanation: "",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: "telnet + smtp",
				hint: "23 + 25 = 48",
				explanation: "",
				points: 600,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: "dns + redis",
				hint: "53 + 6379 = 6432",
				explanation: "",
				points: 800,
				show: false,
				answered: false
			},
			{
				id: uniqid(),
				type: AnswerType.TEXT,
				answer: "sip + git",
				hint: "5060 + 9418 = 14478",
				explanation: "",
				points: 1000,
				show: false,
				answered: false
			}
		]
	},
	{
		id: uniqid(),
		name: "Hacker Movies",
		answers: [
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fmovies%2Fhacker_movies1.JPG?alt=media&token=7579ffc3-bfa8-4f59-8e90-3b99a4ef7337",
				hint: "Jurassic Park",
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
				hint: "Iron Man 2",
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
				hint: "WarGames",
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
				hint: "TRON: Legacy",
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
				hint: "Matrix 2",
				explanation: "",
				points: 1000,
				show: false,
				answered: false
			}
		]
	},
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
				hint: "Aaron Swartz",
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
				hint: "George Hotz",
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
				hint: "Tsutomu Shimomura",
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
				hint: "John Draper (Captain Crunch)",
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
		name: "STDOUT",
		answers: [
			{
				id: uniqid(),
				type: AnswerType.CODE,
				answer:
					'function foo() {\n  var bar = ["t", "o", "e"].reverse().join("");\n  console.log("hello " + bar);\n}\n\nfoo();',
				hint: "hello eot",
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
				hint: "hello eot",
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
				hint: "2 beers (new scope using let)",
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
				hint: "water",
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
				hint: "2x cookie",
				explanation: "",
				points: 1000,
				show: false,
				answered: false
			}
		]
	},
	{
		id: "1qxjh6uk1sbd7yg",
		name: "IPs and Networks",
		answers: [
			{
				id: "1qxjh6uk1sbd7yn",
				type: AnswerType.TEXT,
				answer: "The number of bytes in an IPv4 address",
				hint: "What is 4",
				explanation: "",
				points: 100,
				show: false,
				answered: false
			},
			{
				id: "1qxjh6uk1sbd7yu",
				type: AnswerType.TEXT,
				answer: "Private IPv4 addresses were set as a standard in this RFC.",
				hint: "What is RFC 1918",
				explanation: "",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: "1qxjh6uk1sbd7z1",
				type: AnswerType.TEXT,
				answer: "A netmask of 255.255.255.240 (or /28) has how many usable hosts?",
				hint: "What is 14",
				explanation: "",
				points: 300,
				show: false,
				answered: false
			},
			{
				id: "1qxjh6uk1sbd7z8",
				type: AnswerType.TEXT,
				answer:
					"A technology for securing Internet Protocol (IP) communications by authenticating and/or encrypting each IP packet of a communication session is known as what?",
				hint: "What is IPSec",
				explanation: "",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: "1qxjh6uk1sbd7zf",
				type: AnswerType.TEXT,
				answer: "The subnet 224.0.0.0/4 is reserved for what use?",
				hint: "What is IP Multicast",
				explanation: "",
				points: 500,
				show: false,
				answered: false
			},
			{
				id: "1qxjh6uk1sbd7zm",
				type: AnswerType.TEXT,
				answer:
					"This Internet Protocol, written and released on April 1, 1990 in RFC 1149, transmits large amounts of data with high latency and packet loss.",
				hint: "What is Internet Protocol over Avian Carrier (IPoAC)",
				explanation: "",
				points: 600,
				show: false,
				answered: false
			}
		]
	}
];
