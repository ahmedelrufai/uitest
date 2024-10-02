import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import store from "../store/store.ts";
import { Buffer } from "buffer";

const base64UrlDecode = (input: string) => {
	let base64 = input.replace(/-/g, '+').replace(/_/g, '/');
	let pad = base64.length % 4;
	if (pad) {
		base64 += '='.repeat(4 - pad);
	}

	return Buffer.from(base64, 'base64').toString('utf-8');
};

const parseJwt = (token: string) => {
	try {
		const base64Url = token.split('.')[1];
		const base64 = base64UrlDecode(base64Url);
		return JSON.parse(base64);
	} catch (e) {
		console.error('Invalid JWT token', e);
		return null;
	}
};

export const isTokenExpired = (token?: string | null) => {
	if(!token) return false;
	const payload = parseJwt(token);
	if (!payload || !payload.exp) {
		return true;
	}
	const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

	return payload.exp < currentTime;
};
const useUserStore = ({ onComplete }: { onComplete?: () => void }) => {
	const { setActiveTheme} = store()

	const [loading, setIsLoading] = useState(true);
	const handleSetToken = async (token: string) => {

		 // setToken(token);

		// setIsLoggedIn(true)
	};

	useEffect(() => {
		AsyncStorage.getItem("token").then(async (token) => {
			const activeTheme = await AsyncStorage.getItem("activeTheme");
			// const userId = await AsyncStorage.getItem("userId");

			if (activeTheme) {
				setActiveTheme(activeTheme).finally(()=>null)
			}
			// await setUsername(username as string);
			// await setToken(token);
			// await setUserId(userId as string)
			// setIsLoggedIn(true)
		}).finally(() => {
			onComplete?.()
			setIsLoading(false);
		});
	}, []);


	return {  loading };
};


export default useUserStore;
