
const validateString = (str, regex) => {
	const validoRegex = regex;
	return validoRegex.test(str);
}

export {validateString}