import React, { useState } from "react";

import { useQuery } from "react-query";
import { getAllEpisodes } from "api/episodes";

import { EpisodeI } from "api/@types/episode";

import EpCard from "../../components/EpCard";
import LastEpCard from "./components/LastEpCard";

import { Container } from "./styles";

const Episodes: React.FC = () => {
	const [lastEpisode, setLastEpisode] = useState<EpisodeI>();

	const [page, setPage] = useState<number>(3);

	const { data, isLoading } = useQuery(
		["late-release", page],
		() => getAllEpisodes(page),
		{
			onSuccess: (data) => {
				const lastEP = data[data.length - 1];
				setLastEpisode(lastEP);
			},
		}
	);

	const { data: listEp } = useQuery(["episodes", page], () =>
		getAllEpisodes(1)
	);

	return (
		<Container>
			<h1>Last releases</h1>
			<div className="last">
				<LastEpCard data={lastEpisode} />
			</div>

			<div className="see-all">
				<h1>All episodes</h1>
			</div>
			<div className="all">
				{isLoading && <div>Loading...</div>}
				{listEp && listEp.map((item) => <EpCard key={item.id} data={item} />)}
			</div>
		</Container>
	);
};

export default Episodes;
