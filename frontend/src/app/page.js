"use client";

import CourseGrid from "@/components/CourseGrid";
import { CONFIG } from "@/config";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
	const [courses, setCourses] = useState();

	useEffect(() => {
		fetchCourses();
	});

	const fetchCourses = async () => {
		const resp = await fetch(`${CONFIG.BACKEND_ADDRESS}/courses`);
		const respData = await resp.json();
		setCourses(respData.data);
	};

	return (
		<div className="container">
			<h1 className={styles.title}>Courses</h1>
			<CourseGrid courses={courses} />
		</div>
	);
}
