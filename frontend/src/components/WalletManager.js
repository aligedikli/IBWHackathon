import { useEffect } from "react";
import { useAccount } from "wagmi";

export default function WalletManager() {
	const { address, isConnected } = useAccount();

	useEffect(() => {
		if (isConnected) {
			console.log("hey connected. address:", address);
		} else {
			console.log("hey disconnected.");
		}
	}, [isConnected]);
}
