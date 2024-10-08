import { TextField } from "@mui/material";

const Input = ({ type = "text", label, onChange }) => {
	return (
		<TextField
			variant="outlined"
			fullWidth
			type={type}
			label={label}
			margin="normal"
			onChange={onChange}
			sx={{
				width: "300px",
				height: "47px",
				"& .MuiOutlinedInput-root": {
					borderRadius: "15px",
				},
				"& .MuiInputBase-input": {
					color: "primary.main",
				},
				"& .MuiOutlinedInput-notchedOutline": {
					borderColor: "primary.main",
				},
			}}
		/>
	);
};

export default Input;
