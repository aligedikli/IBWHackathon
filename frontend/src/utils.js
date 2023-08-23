export const cn = (...args) => {
	return args.filter((arg) => typeof arg === "string").join(" ");
};

export const formatMoney = (money) => `${money} ISLMT`;
