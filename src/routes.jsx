import { createBrowserRouter } from "react-router-dom";

import Tasklist from "./pages/tasklist";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Tasklist />,
	},
]);

export default router;
