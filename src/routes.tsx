import { createBrowserRouter } from "react-router-dom"
import Layout from "./pages/Layout"
import HomePage from "./pages/HomePage"
import GameDetailsPage from "./pages/GameDetailsPage"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "games/:id", element: <GameDetailsPage /> },
		],
	},
])

export default router
