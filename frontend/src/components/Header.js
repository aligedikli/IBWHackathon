"use client";

import { cn } from "@/utils";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
	return (
		<header className={cn(styles.header, "container")}>
			<b className={styles.brand}>MaariFi</b>
			<nav className={styles.nav}>
				<Link href="#" className={styles.navItem}>
					My Courses
				</Link>
				<Link href="#" className={styles.navItem}>
					Profile
				</Link>
				<ConnectButton
					accountStatus="avatar"
					showBalance={false}
					chainStatus="none"
				/>
			</nav>
		</header>
	);
}
