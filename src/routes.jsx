import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/loginScreen";
import Dashboard from "./pages/dashboard";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
]);

export default router;
