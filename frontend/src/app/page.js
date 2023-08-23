"use client";

import CourseGrid from "@/components/CourseGrid";
import { CONFIG } from "@/config";
import { zakatToken } from "@/contracts";
import { useEffect, useState } from "react";
import {
	useAccount,
	useContractRead,
	useContractWrite,
	usePrepareContractWrite,
	useWaitForTransaction,
} from "wagmi";
import styles from "./page.module.css";

export default function Home() {
	const { address } = useAccount();

	const [courses, setCourses] = useState();

	// const { data: distributedZakat } = useContractRead({
	// 	address: zakatToken.address,
	// 	abi: zakatToken.abi,
	// 	functionName: "distributedZakat",
	// 	watch: true,
	// });
	// console.log(distributedZakat);

	// const { data: calculatedZakat } = useContractRead({
	// 	address: zakatToken.address,
	// 	abi: zakatToken.abi,
	// 	functionName: "calculateZakat",
	// 	watch: true,
	// });
	// console.log(calculatedZakat);

	const { data: userZakatRecipient } = useContractRead({
		address: zakatToken.address,
		abi: zakatToken.abi,
		functionName: "getUserZakatRecipient",
		args: [address],
		watch: true,
	});
	console.log("hey userZakatRecipient:", userZakatRecipient);

	const { config: setUserZakatRecipientAsEducatorConfig } =
		usePrepareContractWrite({
			address: zakatToken.address,
			abi: zakatToken.abi,
			functionName: "setUserZakatRecipient",
			args: ["0xa9f114723cCd80e8759e08130D99097Ea0B4e3Ef"],
		});
	const {
		data: setUserZakatRecipientAsEducatorResult,
		write: setUserZakatRecipientAsEducatorWrite,
	} = useContractWrite(setUserZakatRecipientAsEducatorConfig);
	const {
		isLoading: isSetUserZakatRecipientAsEducatorLoading,
		isSuccess: isSetUserZakatRecipientAsEducatorSuccess,
	} = useWaitForTransaction({
		hash: setUserZakatRecipientAsEducatorResult?.hash,
	});

	const { config: setUserZakatRecipientAsStudentConfig } =
		usePrepareContractWrite({
			address: zakatToken.address,
			abi: zakatToken.abi,
			functionName: "setUserZakatRecipient",
			args: ["0x36dbF91095e771E290c3d6BC2A3332b04257c6D7"],
		});
	const {
		data: setUserZakatRecipientAsStudentResult,
		write: setUserZakatRecipientAsStudentWrite,
	} = useContractWrite(setUserZakatRecipientAsStudentConfig);
	const {
		isLoading: isSetUserZakatRecipientAsStudentLoading,
		isSuccess: isSetUserZakatRecipientAsStudentSuccess,
	} = useWaitForTransaction({
		hash: setUserZakatRecipientAsStudentResult?.hash,
	});

	useEffect(() => {
		fetchCourses();
	}, []);

	const fetchCourses = async () => {
		const resp = await fetch(`${CONFIG.BACKEND_ADDRESS}/courses`);
		const respData = await resp.json();
		setCourses(respData.data);
	};

	const addTokenToMetamask = async () => {
		const result = await window.ethereum?.request({
			method: "wallet_watchAsset",
			params: {
				type: "ERC20",
				options: {
					address: zakatToken.address,
					decimals: 18,
					name: "Zakat",
					symbol: "ZAKAT",
				},
			},
		});
		console.log("hey add token to mm result:", result);
	};

	return (
		<div className="container">
			<h1 className={styles.title}>Courses</h1>
			<CourseGrid courses={courses} />
			<button type="button" onClick={() => addTokenToMetamask()}>
				add token to mm
			</button>
			<button
				type="button"
				onClick={() => setUserZakatRecipientAsEducatorWrite()}
			>
				set zakat recipient as educator
			</button>
			<button
				type="button"
				onClick={() => setUserZakatRecipientAsStudentWrite()}
			>
				set zakat recipient as student
			</button>
		</div>
	);
}
