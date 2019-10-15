import { firestore } from "firebase/app";
import "firebase/firestore";
import { ICategory, Team } from "../models";
import { round1 } from "./round1";

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
