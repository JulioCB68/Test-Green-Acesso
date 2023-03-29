import { EpisodeI } from "./@types/episode";
import { api } from "./api";

export const getAllEpisodes = async (): Promise<EpisodeI[]> => {
	const response = await api.get(`episode`);
	return response.data;
};

export const getSingleEpisodes = async (id: number): Promise<EpisodeI[]> => {
	const response = await api.get(`episode/${id}`);
	return response.data;
};
