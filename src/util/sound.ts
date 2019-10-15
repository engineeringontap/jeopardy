import themeSound from "../assets/theme.mp3";
import { useState } from "react";

let isPlaying = false;

const audio = new Audio(themeSound);
audio.currentTime = 1;
audio.loop = true;

export async function startTheme() {
	const leVar = isSoundEnabled();
	if (!leVar) {
		return;
	}
	isPlaying = true;
	try {
		await audio.play();
	} catch (error) {
		isPlaying = false;
		console.error("Could not play audio", error);
	}
}

export function stopTheme() {
	isPlaying = false;
	if (audio) {
		audio.pause();
		audio.currentTime = 1;
	}
}

export async function toggleTheme() {
	if (!isPlaying) {
		startTheme();
	} else {
		stopTheme();
	}
}

export const isSoundEnabled = () => {
	const sv = localStorage.getItem("theme");
	if (sv === null) {
		return true;
	}
	return Boolean(sv === "true");
};

export const setSoundEnabled = (enabled: boolean) => {
	localStorage.setItem("theme", String(enabled));
};

export const useSoundEnbaled = () => {
	const [enabled, setEnabled] = useState(isSoundEnabled());

	const toggleThemeState = () => {
		if (enabled) {
			setSoundEnabled(false);
			setEnabled(false);
		} else {
			setSoundEnabled(true);
			setEnabled(true);
		}
	};

	return { enabled, toggleThemeState };
};
