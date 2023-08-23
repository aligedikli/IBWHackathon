import { CONFIG } from "@/config";
import { useEffect } from "react";
import { useAccount } from "wagmi";

export default function WalletManager() {
	const { address } = useAccount();

	useEffect(() => {
		if (address) {
			console.log("hey connected address:", address);
			fetchMe();
		} else {
			console.log("hey disconnected");
		}
	}, [address]);

	const fetchMe = async () => {
		const resp = await fetch(`${CONFIG.BACKEND_ADDRESS}/me`, {
			headers: {
				authorization: `Basic ${address}`,
			},
		});
		const respData = await resp.json();
		console.log("hey user:", respData.data);
	};
}
