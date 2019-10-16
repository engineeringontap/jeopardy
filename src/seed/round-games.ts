import uniqid from "uniqid";
import { AnswerType, ICategory } from "../models";

export const roundGames: ICategory[] = [
	{
		id: "sktwiyw5k1tjf6ni",
		name: "Most popular games",
		answers: [
			{
				id: "sktwiyw5k1tjf6nn",
				type: AnswerType.TEXT,
				answer: 'This game features a man named "Drake" who searches for treasure around the world',
				answerDe:
					'In diesem Spiel wird ein Mann namens "Drake" gespielt, der auf der ganzen Welt nach Schätzen sucht.',
				question: "What is Uncharted 4",
				explanation: "",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: "sktwiyw5k1tjf6ns",
				type: AnswerType.TEXT,
				answer:
					"This game takes place in 2287 and a nuke goes off as you are going down an elevator",
				answerDe:
					"Dieses Spiel findet im Jahr 2287 statt und eine Atombombe geht los, während man mit einem Aufzug fährt.",
				question: "What is Fallout 4",
				explanation: "",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: "sktwiyw5k1tjf6nx",
				type: AnswerType.TEXT,
				answer:
					"This game allows you to be a criminal mastermind and run in the city of Los Santos",
				answerDe:
					"Dieses Spiel erlaubt es dir, ein kriminelles Superhirn zu sein und in der Stadt Los Santos zu laufen.",
				question: "What is GTA V",
				explanation: "",
				points: 600,
				show: false,
				answered: false
			},
			{
				id: "sktwiyw5k1tjf6o2",
				type: AnswerType.TEXT,
				answer: "This game takes place in London England in the time of 1868",
				answerDe: "Dieses Spiel findet in London England in der Zeit von 1868 statt",
				question: "What is Assassin's Creed Syndicate",
				explanation: "",
				points: 800,
				show: false,
				answered: false
			},
			{
				id: "sktwiyw5k1tjf6o7",
				type: AnswerType.TEXT,
				answer: 'You play this game as a man named "Joel" and a little girl named "Ellie"',
				answerDe:
					'Du spielst dieses Spiel als ein Mann namens "Joel" und ein kleines Mädchen namens "Ellie".',
				question: "What is The Last of Us",
				explanation: "",
				points: 1000,
				show: false,
				answered: false
			}
		]
	},
	{
		id: "1qxjj0ek1sccaif",
		name: "Popular Board games",
		answers: [
			{
				id: "1qxjj0ek1sccaik",
				type: AnswerType.TEXT,
				answer:
					"A game in which you are a entrepreneur buying properties in order to expand your wealth. ",
				answerDe:
					"Ein Spiel, in dem Sie als Unternehmer Immobilien kaufen, um Ihr Vermögen zu erweitern.",
				question: "What is Monopoly? ",
				explanation: "",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: "1qxjj0ek1sccaip",
				type: AnswerType.TEXT,
				answer:
					"A game about bringing all your pawns home,it is remembered for its iconic saying when you screw someone over. ",
				answerDe: "Ein Spiel, bei dem es darum geht, alle Püppchen nach Hause zu bringen",
				question: "What is Sorry? / Mensch ärger dich nicht",
				explanation: "",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: "1qxjj0ek1sccaiu",
				type: AnswerType.TEXT,
				answer:
					"A game about losing all your cards by playing the same number or color down on a discard pile.",
				answerDe:
					"Ein Spiel um den Verlust aller Ihrer Karten, indem Sie die gleiche Zahl oder Farbe auf einem Ablagestapel spielen.",
				question: "What is Uno?",
				explanation: "",
				points: 600,
				show: false,
				answered: false
			},
			{
				id: "1qxjj0ek1sccaiz",
				type: AnswerType.TEXT,
				answer: "A classic game about finding a murderer through searching a house.",
				answerDe: "Ein klassisches Spiel über die Suche nach einem Mörder in einem Haus.",
				question: "What is Clue?",
				explanation: "",
				points: 800,
				show: false,
				answered: false
			},
			{
				id: "1qxjj0ek1sccaj4",
				type: AnswerType.TEXT,
				answer:
					"A game about through the process of elimination finding out which character your opponent is",
				answerDe:
					"Ein Spiel über den Prozess der Eliminierung, um herauszufinden, welcher Charakter dein Gegner ist.",
				question: "What is Guess Who?",
				explanation: "",
				points: 1000,
				show: false,
				answered: false
			}
		]
	},
	{
		id: "1qxjj0ek1sccaii",
		name: "Video Game Characters",
		answers: [
			{
				id: "1qxjj0ek1sccain",
				type: AnswerType.TEXT,
				answer: "A fat Italian plumber's pet.",
				answerDe: "Das Haustier von einem fetten italienischen Klempner.",
				question: "What is Yoshi?",
				explanation: "",
				points: 200,
				show: false,
				answered: false
			},
			{
				id: "1qxjj0ek1sccais",
				type: AnswerType.TEXT,
				answer: "A famous hero who wears green, A.K.A the Hero of Time.",
				answerDe: "Ein berühmter Held, der grün trägt, A.K.A. der Hero of Time.",
				question: "Who is Link?",
				explanation: "",
				points: 400,
				show: false,
				answered: false
			},
			{
				id: "1qxjj0ek1sccaj2",
				type: AnswerType.TEXT,
				answer: "A pink character who can suck enemies up and gain their abilities.",
				answerDe: "Ein rosa Charakter, der Feinde aufsaugen und ihre Fähigkeiten annehmen kann.",
				question: "Who is Kirby?",
				explanation: "",
				points: 600,
				show: false,
				answered: false
			},
			{
				id: "1qxjj0ek1sccaix",
				type: AnswerType.TEXT,
				answer:
					"A Female character genetically modified with bird D.N.A welding a charge up ion cannon.",
				answerDe:
					"Ein weiblicher Charakter, der mit Vogel D.N.A. genetisch verändert wurde und eine aufgeladene lonenkanone hat.",
				question: "Who is Samus Aran?",
				explanation: "",
				points: 800,
				show: false,
				answered: false
			},
			{
				id: "1qxjj0ek1sccaj7",
				type: AnswerType.TEXT,
				answer: "A Humanoid robot wearing blue fighting an insane doctor.",
				answerDe: "Ein blauer, humanoider Roboter kämpft gegen einen verrückten Arzt.",
				question: "Who is Megaman?",
				explanation: "",
				points: 1000,
				show: false,
				answered: false
			}
		]
	},
	{
		id: uniqid(),
		name: "Guess the game",
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
		name: "Minecraft",
		answers: [
			{
				id: uniqid(),
				type: AnswerType.IMAGE,
				answer:
					"https://firebasestorage.googleapis.com/v0/b/eot-jeopardy.appspot.com/o/answers%2Fminecraft%2Fminecraft1.jpg?alt=media&token=8c865a05-4df5-4930-a027-2f95a131b0d0",
				question: "Clock/Uhr",
				explanation: "Was bekommt man, wenn man dieses Rezept benutzt?",
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
				explanation: "Was bekommt man, wenn man dieses Rezept benutzt?",
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
				explanation: "Was bekommt man, wenn man dieses Rezept benutzt?",
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
				explanation: "Was bekommt man, wenn man dieses Rezept benutzt?",
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
				explanation: "Was bekommt man, wenn man dieses Rezept benutzt?",
				points: 1000,
				show: false,
				answered: false
			}
		]
	}
];
