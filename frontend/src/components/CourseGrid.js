import CourseCard from "./CourseCard";
import styles from "./CourseGrid.module.css";

export default function CourseGrid({ courses }) {
	return (
		<div className={styles.grid}>
			{courses &&
				courses.map((course) => <CourseCard key={course.id} course={course} />)}
		</div>
	);
}
