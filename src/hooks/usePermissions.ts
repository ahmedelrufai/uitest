import { useEffect, useRef, useState } from 'react';
import { requestMultiple, RESULTS } from 'react-native-permissions';
import Toast from 'react-native-toast-message';
import { Platform } from "react-native";
import { getPermissionDeniedMessage } from "../utils/helpers.ts";

type PermissionStatus = 'granted' | 'denied' | 'blocked' | 'unavailable';

const usePermissions = (permissions: string[]) => {
	const [statuses, setStatuses] = useState<{ [key: string]: PermissionStatus }>({});
	const isMounted = useRef<boolean>(false);

	useEffect(() => {
		const requestPermissions = async () => {
			const statusResults = await requestMultiple(permissions as any);
			setStatuses(statusResults as any);
		};

		if (!isMounted.current) {
			isMounted.current = true;
			requestPermissions();
		}
	}, [permissions]);

	const requestPermissions = async () => {
		const statusResults = await requestMultiple(permissions as any);
		const results: { [key: string]: PermissionStatus } = {};
		for (const permission in statusResults) {
			let status = statusResults[permission];
			results[permission] = status as PermissionStatus;

			if(Platform.OS === 'android') {
				if (Number(Platform.Version) >= 33) {
					results["android.permission.WRITE_EXTERNAL_STORAGE"] = "granted"
					status="granted"
				}
			}

			if (![RESULTS.LIMITED, RESULTS.GRANTED].includes(status as any)) {
				Toast.show({
					type: 'error',
					text1: 'Permission Error',
					text2: getPermissionDeniedMessage(permission),
				});
			}
		}

		setStatuses(results);

		return Object.values(results).every(status => [RESULTS.LIMITED, RESULTS.GRANTED].includes(status as any));
	};

	return { statuses, requestPermissions };
};

export default usePermissions;
