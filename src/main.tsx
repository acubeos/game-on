import React from "react"
import ReactDOM from "react-dom/client"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import App from "./App"
import "./index.css"
import theme from "./theme"

const queryCLient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<QueryClientProvider client={queryCLient}>
				<App />
				<ReactQueryDevtools />
			</QueryClientProvider>
		</ChakraProvider>
	</React.StrictMode>
)
