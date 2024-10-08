// Local Components
import Logo from "../components/logo";
import Button from "../components/Button";

// MUI
import { Box } from "@mui/material";

// React Router
import { useNavigate } from "react-router";

const dashboard = () => {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate(-1);
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
			<Button label="Voltar" onClick={handleBack}></Button>
		</Box>
	);
};

export default dashboard;
