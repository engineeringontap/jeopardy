import React from "react";
import styles from "./PlayerScreen.module.css";

interface IProps {
	userId: string;
	path: string;
}

export const PlayerScreen: React.SFC<IProps> = ({ userId }) => {
	return <div className={styles.root}>PlayerScreen</div>;
};
