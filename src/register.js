const register = user => {
	const { name, email } = user;
	const message = `${name} ${email} registered`;
	console.log(message);
}

export default register;