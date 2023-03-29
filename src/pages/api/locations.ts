import { LocationI } from "./@types/location";
import { api } from "./api";

export const getAllCharacters = async (): Promise<LocationI[]> => {
	const response = await api.get(`location`);
	return response.data;
};

export const getSingleCharacter = async (id: number): Promise<LocationI[]> => {
	const response = await api.get(`location/${id}`);
	return response.data;
};
