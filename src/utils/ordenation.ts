export type OrdenationType = "ASC" | "DESC" | undefined;

export const sortData = (data: Array<any>, ordenation?: OrdenationType) => {
	if (!ordenation) {
		return data; // Retorna o array original sem ordenação
	}
	return ordenation === "ASC"
		? data.sort((a, b) => a.name.localeCompare(b.name))
		: data.sort((a, b) => b.name.localeCompare(a.name));
};
