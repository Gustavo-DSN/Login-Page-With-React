import { AppBar, Typography } from "@mui/material";
import FormControlSwitch from "./formControlSwitch";
import { useState } from "react";

const TopBar = () => {
	const [listStatus, setListStatus] = useState("Mostrando todas as tarefas");

	const handleSwitchChange = (checked) => {
		if (checked) {
			setListStatus("Mostrando as tarefas concluídas");
		} else {
			setListStatus("Mostrando todas as tarefas");
		}
	};

	return (
		<AppBar
			sx={{
				padding: "10px",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				width: "100%",
				boxSizing: "border-box",
			}}
		>
			<Typography variant="h6">Lista de tarefas</Typography>
			<FormControlSwitch
				onChange={handleSwitchChange}
				label={listStatus}
			/>
		</AppBar>
	);
};

export default TopBar;
