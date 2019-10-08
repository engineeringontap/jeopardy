import themeSound from "../assets/theme.mp3";

let isPlaying = false;

const audio = new Audio(themeSound);
audio.currentTime = 1;
audio.loop = true;

export async function startTheme() {
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
