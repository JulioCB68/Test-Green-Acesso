import { CharacterI } from "./@types/character";
import { api } from "./api";

export const getAllCharacters = async (
	name: string,
	page: number
): Promise<CharacterI[]> => {
	const response = await api.get(`character/?name=${name}&page=${page}`);
	return response.data.results;
};

export const getSingleCharacter = async (id: number): Promise<CharacterI[]> => {
	const response = await api.get(`character/${id}`);
	return response.data;
};

export const getMultipleCharacters = async (
	id: string[]
): Promise<CharacterI[]> => {
	const response = await api.get(`character/${id}`);
	return response.data;
};
