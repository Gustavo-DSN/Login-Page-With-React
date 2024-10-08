import Button from "@mui/material/Button";

const LogButton = ({ label, sx, onClick }) => {
	return (
		<div>
			<Button
				onClick={onClick}
				variant="contained"
				color="primary"
				sx={{
					width: "300px",
					height: "47px",
					borderRadius: "15px",
					marginTop: "15px",
					...sx,
				}}
			>
				{label}
			</Button>
		</div>
	);
};

export default LogButton;
