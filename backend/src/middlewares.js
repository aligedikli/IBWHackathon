export const parseAuthHeader = (req, res, next) => {
	const walletAddress = req.headers["authorization"]?.split(" ")[1];
	req.walletAddress = walletAddress;
	next();
};
