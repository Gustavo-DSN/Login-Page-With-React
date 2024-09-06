import { FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

const FormControlSwitch = ({ onChange, label }) => {
	const [checked, setChecked] = useState(false);

	const handleChange = (e) => {
		setChecked(e.target.checked);
		if (onChange) {
			onChange(e.target.checked);
		}
	};

	return (
		<FormControlLabel
			control={
				<Switch
					color="secondary"
					checked={checked}
					onChange={handleChange}
				/>
			}
			label={label}
			labelPlacement="start"
		/>
	);
};

export default FormControlSwitch;
