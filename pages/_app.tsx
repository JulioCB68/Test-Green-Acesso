import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import { GlobalStyles } from "styles/global";
import "styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	});
	return (
		<>
			<GlobalStyles />
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</>
	);
}
