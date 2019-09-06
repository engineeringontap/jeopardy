import React from "react";
import { bootstrapFirebase } from "../../seed";

interface IProps {
	path: string;
}

export const ModeratorScreen: React.SFC<IProps> = () => {
	return (
		<div>
			<button onClick={bootstrapFirebase}>Bootstrap Firestore</button>
		</div>
	);
};
