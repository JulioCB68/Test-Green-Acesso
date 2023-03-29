import { CharacterI } from "./@types/character";
import { api } from "./api";

export const getAllCharacters = async (): Promise<CharacterI[]> => {
	const response = await api.get(`character`);
	console.log(response.data);
	return response.data.results;
};

export const getSingleCharacter = async (id: number): Promise<CharacterI[]> => {
	const response = await api.get(`character/${id}`);
	return response.data;
};
