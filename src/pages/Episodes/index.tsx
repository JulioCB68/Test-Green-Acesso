import React, { useState } from "react";

import { useQuery } from "react-query";
import { getAllEpisodes } from "api/episodes";

import { EpisodeI } from "api/@types/episode";

import EpCard from "../../components/EpCard";

import { Container, Wrapper, Title } from "./styles";

const Episodes: React.FC = () => {
	const [page, setPage] = useState<number>(1);

	const { data, isLoading } = useQuery(["episodes", page], () =>
		getAllEpisodes(page)
	);

	return (
		<Container>
			<img
				src="https://images.unsplash.com/photo-1615986201152-7686a4867f30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"
				alt="Banner"
				className="banner"
			/>
			<Wrapper>
				<Title>List of episodes</Title>

				<div className="see-all">
					<h1>All episodes</h1>
				</div>
				<div className="all">
					{isLoading && <div>Loading...</div>}
					{data && data.map((item) => <EpCard key={item.id} data={item} />)}
				</div>
			</Wrapper>
		</Container>
	);
};

export default Episodes;
