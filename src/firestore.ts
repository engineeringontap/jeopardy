import firebase from "firebase";
import { firestore } from "firebase/app";
import "firebase/firestore";
import { useEffect, useState } from "react";
import { IAnswer, ICategory, Team } from "./models";

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

export const requestToAnswer = async (questionId, teamId) => {
	await firestore()
		.collection("requestedAnswers")
		.add({
			questionId,
			teamId,
			time: new Date()
		});
};

export const useActiveTeam = (questionId: string) => {
	const [team, setTeam] = useState<string | null>(null);

	useEffect(() => {
		return firestore()
			.collection("requestedAnswers")
			.where("questionId", "==", questionId)
			.orderBy("time")
			.limit(1)
			.onSnapshot(({ docs }) => {
				const doc = docs.find(() => true);
				setTeam(doc ? doc.data().teamId : null);
			});
	}, [questionId]);

	return team;
};

export const useTeams = () => {
	const [teams, setTeams] = useState<Team[]>([]);

	useEffect(() => {
		return firestore()
			.collection("teams")
			.onSnapshot(({ docs }) => {
				setTeams(
					docs.map<Team>(doc => {
						const { color, name, members, points } = doc.data();
						return {
							id: doc.id,
							color,
							name,
							members,
							points
						};
					})
				);
			});
	}, []);

	return teams;
};

// export const initShake = (userId, team) => {
// 	if (!userId || (team && !team.id)) {
// 		return;
// 	}
// 	useEffect(() => {
// 		const myShakeEvent = new Shake({
// 			threshold: 15, // optional shake strength threshold
// 			timeout: 1000 // optional, determines the frequency of event generation
// 		});

// 		myShakeEvent.start();

// 		window.addEventListener("shake", () => requestToAnswer("X7GMiBDYhao939wrDzHA", team.id), false);
// 	}, []);
// };

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

export const chooseAnswer = (category: ICategory, answer: IAnswer) => {
	const categoryCopy = {
		...category,
		answers: category.answers.map(a =>
			a.id === answer.id
				? {
						...a,
						show: true
				  }
				: a
		)
	};

	firestore()
		.doc(`categories/${category.id}`)
		.set(categoryCopy);
};

export const dismissAnswers = (category: ICategory) => {
	const categoryCopy = {
		...category,
		answers: category.answers.map(a => ({ ...a, show: false }))
	};

	firestore()
		.doc(`categories/${category.id}`)
		.set(categoryCopy);
};

export const setAnsweredAndDismiss = (category: ICategory, answer: IAnswer) => {
	const categoryCopy = {
		...category,
		answers: category.answers.map(a => ({
			...a,
			show: false,
			answered: a.answered || answer.id === a.id
		}))
	};

	firestore()
		.doc(`categories/${category.id}`)
		.set(categoryCopy);
};

export const award = (team: Team, answer: IAnswer) => {
	firestore()
		.doc(`teams/${team.id}`)
		.set({
			...team,
			points: team.points + answer.points
		});
};

export const penalize = (team: Team, answer: IAnswer) => {
	firestore()
		.doc(`teams/${team.id}`)
		.set({
			...team,
			points: team.points - answer.points
		});
};

export const setTeamPoints = (team: Team, points: number) => {
	firestore()
		.doc(`teams/${team.id}`)
		.set({
			...team,
			points
		});
};

export const resetTeamPoints = async () => {
	const query = await firestore()
		.collection("teams")
		.get();
	for (const item of query.docs) {
		await firestore()
			.doc(`teams/${item.id}`)
			.set({
				...item.data(),
				points: 0
			});
	}
};

export const removePlayer = async (userId: string, team: Team) => {
	const teamQuery = await firestore()
		.doc(`teams/${team.id}`)
		.get();

	const data = teamQuery.data() as Team;
	await firestore()
		.doc(`teams/${team.id}`)
		.set({
			...data,
			members: data.members.filter(m => m !== userId)
		});
};

export const resetAnswerRequests = async () => {
	const query = await firestore()
		.collection("requestedAnswers")
		.get();
	for (const item of query.docs) {
		await firestore()
			.doc(`requestedAnswers/${item.id}`)
			.delete();
	}
};
