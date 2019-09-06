import firebase from "firebase";
import { firestore } from "firebase/app";
import "firebase/firestore";
import { useEffect, useState } from "react";

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

export interface Technology {
	id: string;
	name: string;
	link: string;
	image: string;
}

export interface Team {
	id: string;
	color: string;
	name: string;
	members: string[];
}

export interface Stat {
	id: string;
	name: string;
	likes: number;
	dislikes: number;
}
export interface Stats {
	[id: string]: Stat;
}
export type Unsubscribe = () => void;

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

// export const useTechnologies = () => {
// 	const [technologies, setTechnologies] = useState<any[]>([]);

// 	useEffect(() => {
// 		return firestore()
// 			.collection("technologies")
// 			.onSnapshot(({ docs }) => {
// 				setTechnologies(
// 					docs.map<Technology>(doc => {
// 						const { name, link, image } = doc.data();
// 						return {
// 							id: doc.id,
// 							name,
// 							link,
// 							image
// 						};
// 					})
// 				);
// 			});
// 	}, []);

// 	return technologies;
// };

export const useRatings = userId => {
	const [ratings, setRatings] = useState<any[]>([]);

	useEffect(() => {
		return firestore()
			.collection(`users/${userId}/ratings`)
			.onSnapshot(({ docs }) => {
				setRatings(
					docs.map<string>(doc => {
						const { techId } = doc.data();
						return techId;
					})
				);
			});
	}, []);

	return ratings;
};

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
