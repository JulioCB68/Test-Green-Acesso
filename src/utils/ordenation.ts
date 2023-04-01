import { CharacterI } from "../api/@types/character";

export type OrdenationType = "ASC" | "DESC";

export const sortData = (
	data: Array<CharacterI>,
	ordenation?: OrdenationType
) => {
	if (!ordenation) {
		return data; // Retorna o array original sem ordenação
	}
	return ordenation === "ASC"
		? data.sort((a, b) => a.name.localeCompare(b.name))
		: data.sort((a, b) => b.name.localeCompare(a.name));
};
