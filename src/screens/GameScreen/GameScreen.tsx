import React from "react";
import styles from "./GameScreen.module.css";

interface IProps {
	path: string;
}

export const GameScreen: React.SFC<IProps> = () => {
	return <div className={styles.root}>gamescreen</div>;
};
