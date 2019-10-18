import axios from "axios";
import cheerio from "cheerio";
import uniqid from "uniqid";
import { AnswerType, IAnswer, ICategory } from "./models";

// TODO: Change me
const URL = "https://jeopardylabs.com/play/beer-beer-beer";

const scrape = async () => {
	const { data } = await axios.get(URL);

	const round: ICategory[] = [];

	const $ = cheerio.load(data);

	$("#categories .table-cell-inner").each((index, cell) => {
		const category: ICategory = {
			id: uniqid(),
			name: $(cell).text(),
			answers: []
		};
		round.push(category);
	});

	$("#question-grid .table-row").each((index, row) => {
		const { points } = $(row)
			.find(".table-cell")
			.data();

		$(row)
			.find(".table-cell-inner")
			.each((cellIndex, cell) => {
				const foo: IAnswer = {
					id: uniqid(),
					type: AnswerType.TEXT,
					answer: $(cell)
						.find(".answer")
						.text(),
					answerDe: $(cell)
						.find(".answer")
						.text(),
					question: $(cell)
						.find(".question")
						.text(),
					explanation: "",
					points,
					show: false,
					answered: false
				};
				round[cellIndex].answers.push(foo);
			});
	});

	return round;
};

scrape().then(round => console.log(JSON.stringify(round)));
