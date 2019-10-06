import themeSound from "../assets/theme.mp3";

let isPlaying = false;
let audioElement: null | HTMLAudioElement = null;

export async function toggleTheme() {
	if (!isPlaying) {
		audioElement = await playSound(themeSound);
	} else {
		if (audioElement) {
			audioElement.pause();
		}
		isPlaying = false;
		audioElement = null;
	}
}

export async function playSound(soundUrl: string): Promise<HTMLAudioElement> {
	const audio = new Audio(soundUrl);

	audio.src = soundUrl;
	try {
		isPlaying = true;
		await audio.play();
	} catch (error) {
		isPlaying = false;
		console.error(error, `Could not play audio from URL "${soundUrl}"`);
	}
	return audio;
}
