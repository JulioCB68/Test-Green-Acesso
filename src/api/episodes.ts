import { api } from "./api";
import { EpisodeI } from "./@types/episode";

export const getAllEpisodes = async (page: number): Promise<EpisodeI[]> => {
	const response = await api.get(`episode?page=${page}`);
	return response.data.results;
};

export const getSingleEpisodes = async (id: number): Promise<EpisodeI> => {
	const response = await api.get(`episode/${id}`);
	return response.data;
};
