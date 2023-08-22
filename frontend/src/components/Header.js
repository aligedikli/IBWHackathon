import { cn } from "@/utils";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
	return (
		<header className={cn(styles.header, "container")}>
			<div>
				<b className={styles.brand}>Marifah</b>
			</div>
			<nav className={styles.nav}>
				<Link href="#" className={styles.navItem}>
					Courses
				</Link>
				<Link href="#" className={styles.navItem}>
					Courses
				</Link>
				<Link href="#" className={styles.navItem}>
					Courses
				</Link>
			</nav>
		</header>
	);
}
