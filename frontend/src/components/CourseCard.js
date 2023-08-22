import { formatMoney } from "@/utils";
import styles from "./CourseCard.module.css";

export default function CourseCard({ course }) {
	return (
		<div className={styles.card}>
			<img className={styles.image} src={course.imageUrl} />
			<div className={styles.textWrapper}>
				<div style={{ flexGrow: "1" }}>
					<h2 className={styles.name}>{course.name}</h2>
					<div className={styles.educatorName}>{course.educator.name}</div>
				</div>
				<div className={styles.price}>{formatMoney(course.price)}</div>
			</div>
		</div>
	);
}
