import { useState, useEffect } from "react";
import Md5 from "blueimp-md5";
import Fingerprint2 from "fingerprintjs2";

export const useUserId = () => {
	const [userId, setUserId] = useState<string>("");

	useEffect(() => {
		setTimeout(() => {
			Fingerprint2.get(components => {
				// console.log({ components });
				const id = Md5(JSON.stringify(components));
				// console.log({ id });
				setUserId(id);
			});
		}, 3000);
	}, []);

	return userId;
};
