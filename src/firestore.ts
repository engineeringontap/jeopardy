import firebase from "firebase";
import { firestore } from "firebase/app";
import "firebase/firestore";
import { useEffect, useState } from "react";
import { ICategory } from "./models";

const config = {
	apiKey: "AIzaSyC_zYNpwcIa6VwP7147-1JghJAhWN6pRf8",
	authDomain: "eot-jeopardy.firebaseapp.com",
	databaseURL: "https://eot-jeopardy.firebaseio.com",
	projectId: "eot-jeopardy",
	storageBucket: "",
	messagingSenderId: "3574246393",
	appId: "1:3574246393:web:bd1d7bf24aba57106eeb28"
};

firebase.initializeApp(config);

export interface Team {
	id: string;
	color: string;
	name: string;
	members: string[];
}

firestore()
	.enablePersistence()
	.catch(err => {
		console.log("Persistence disabled: ", err.code);
		if (err.code === "failed-precondition") {
			// Multiple tabs open, persistence can only be enabled
			// in one tab at a a time.
			// ...
		} else if (err.code === "unimplemented") {
			// The current browser does not support all of the
			// features required to enable persistence
			// ...
		}
	});

export const addToTeam = async (userId, teamId) => {
	await firestore()
		.collection("teams")
		.doc(teamId)
		.update("members", firestore.FieldValue.arrayUnion(userId));
};

export const requestAnswer = async (teamId, questionId) => {
	await firestore()
		.collection("answers")
		.doc(teamId);
};

export const useTeams = () => {
	const [teams, setTeams] = useState<any[]>([]);

	useEffect(() => {
		return firestore()
			.collection("teams")
			.onSnapshot(({ docs }) => {
				setTeams(
					docs.map<Team>(doc => {
						const { color, name, members } = doc.data();
						return {
							id: doc.id,
							color,
							name,
							members
						};
					})
				);
			});
	}, []);

	return teams;
};

export const useCategories = () => {
	const [categories, setCategories] = useState<ICategory[]>([]);

	useEffect(() => {
		return firestore()
			.collection("categories")
			.onSnapshot(({ docs }) => {
				setCategories(
					docs.map<ICategory>(doc => {
						const data = doc.data() as ICategory;
						return data;
					})
				);
			});
	}, []);

	return categories;
};
