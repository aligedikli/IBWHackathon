"use client";

import Header from "@/components/Header";
import WalletManager from "@/components/WalletManager";
import {
	RainbowKitProvider,
	darkTheme,
	getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { Work_Sans } from "next/font/google";
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { haqqMainnet, haqqTestedge2 } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import "./globals.css";

const { chains, publicClient, webSocketPublicClient } = configureChains(
	[haqqMainnet, haqqTestedge2],
	[publicProvider()]
);

const { connectors } = getDefaultWallets({
	appName: "Haqq Network dApp",
	projectId: "500ce7676f1232ad42e281da77108317", // TODO: Replace with your project ID
	chains,
});

const wagmiConfig = createConfig({
	autoConnect: true,
	connectors,
	publicClient,
	webSocketPublicClient,
});

const gfont = Work_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<title>MaariFi</title>
			</head>
			<body className={gfont.className}>
				<WagmiConfig config={wagmiConfig}>
					<RainbowKitProvider
						chains={chains}
						theme={darkTheme({
							accentColor: "#3626a7",
							accentColorForeground: "white",
						})}
					>
						<WalletManager />
						<Header />
						<main>{children}</main>
					</RainbowKitProvider>
				</WagmiConfig>
			</body>
		</html>
	);
}
