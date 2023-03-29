import { CharacterI } from "./@types/character";
import { api } from "./api";

export const getAllCharacters = async (): Promise<CharacterI[]> => {
	const response = await api.get(`character`);
	return response.data;
};

export const getSingleCharacter = async (id: number): Promise<CharacterI[]> => {
	const response = await api.get(`character/${id}`);
	return response.data;
};
