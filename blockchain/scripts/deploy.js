const hre = require("hardhat");

const islmtTokenAddress = "0x7b2Ed4b8ebD606A1d5326e6a0eafA1BB41713db6";

async function main() {
	const [deployer] = await hre.ethers.getSigners();

	const token = await hre.ethers.deployContract("NFTEducationContract", [
		islmtTokenAddress,
	]);

	await token.waitForDeployment();

	console.log(`Token deployed to ${token.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
