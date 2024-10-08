// Local Components
import Input from "../components/input";
import Button from "../components/Button";
import Logo from "../components/logo";

// Import Hooks
import { useState, useEffect } from "react";

// Import MUI
import { Box, Typography } from "@mui/material";

// Import React Router
import { useNavigate } from "react-router";

const loginScreen = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		if (errorMessage) {
			const timer = setTimeout(() => {
				setErrorMessage("");
			}, 2500);

			return () => clearTimeout(timer);
		}
	}, [errorMessage]);

	const handleLogin = () => {
		if (!email || !password) {
			setErrorMessage("Todos os campos devem ser preenchidos");
		} else {
			navigate("/dashboard");
		}
	};

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			alignItems="center"
			height="100vh"
			textAlign="center"
		>
			<Logo />
			<Input label="Email" onChange={(e) => setEmail(e.target.value)} />
			<Input
				label="Senha"
				type="password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<Button label="Log-in" onClick={handleLogin} />
			<Typography color="red" marginTop="10px">
				{errorMessage}
			</Typography>
		</Box>
	);
};

export default loginScreen;
