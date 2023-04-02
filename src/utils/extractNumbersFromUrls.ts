export const extractNumbersFromUrls = (urls: string[]): string[] => {
	const regex = /\/(\d+)$/; // Regex para pegar o número no final da URL
	const numbers = urls.map((url) => url.match(regex)?.[1] ?? ""); // Mapeia as URLs e extrai os números usando a regex
	return numbers;
};
