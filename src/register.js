const register = user => {
	const { name, email } = user;
	const message = `${name} ${email} registered`;
	alert(message);
}

export default register;