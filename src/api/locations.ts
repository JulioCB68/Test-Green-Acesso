import { api } from "./api";
import { LocationI } from "./@types/location";

export const getAllLocations = async (
	name: string,
	page: number
): Promise<LocationI[]> => {
	const response = await api.get(`location/?name=${name}&page=${page}`);
	return response.data.results;
};

export const getSingleLocations = async (id: number): Promise<LocationI> => {
	const response = await api.get(`location/${id}`);
	return response.data;
};
