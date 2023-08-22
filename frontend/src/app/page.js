import CourseGrid from "@/components/CourseGrid";
import styles from "./page.module.css";

const courses = [
	{
		id: "1",
		name: "Test Course 1",
		price: 200,
		imageUrl:
			"https://www.analizgazetesi.com.tr/modules/blog/dataimages/IMG_267A4E-CFBA2B-18873B-9A774B-C6812A-DF69B3.jpg",
		educator: { name: "Ali Gedikli" },
	},
	{
		id: "2",
		name: "Test Course 2",
		price: 100,
		imageUrl: "https://www.labmedya.com/uploads/haberler-3/kedi.jpg",
		educator: { name: "Ali Gedikli" },
	},
	{
		id: "3",
		name: "Test Course 3",
		price: 350,
		imageUrl:
			"https://cdn03.ciceksepeti.com/cicek/kcm51890754-4/XL/red-anchor-tutulu-kedi-elbisesi-kiyafeti-tutu-kcm51890754-4-0869257e6d49418d90657852cc5fad22.jpg",
		educator: { name: "Baturalp Güvenç" },
	},
];

export default function Home() {
	return (
		<div className="container">
			<h1 className={styles.title}>Courses</h1>
			<CourseGrid courses={courses} />
		</div>
	);
}
