import { api } from "./api";
import { LocationI } from "./@types/location";

export const getAllLocations = async (): Promise<LocationI[]> => {
	const response = await api.get(`location`);
	return response.data.results;
};

export const getSingleLocations = async (id: number): Promise<LocationI> => {
	const response = await api.get(`location/${id}`);
	return response.data;
};
