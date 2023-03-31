import React from "react";

import { EpisodeI } from "api/@types/episode";

import { Container } from "./styles";

interface ICardProps {
	data: EpisodeI;
}

const EpCard: React.FC<ICardProps> = ({ data }) => {
	return (
		<Container>
			<div className="background-EP" />
			<div className="info">
				<strong>{data?.name}</strong>
				<p>{data?.air_date}</p>
				<p>{data?.episode}</p>
			</div>
		</Container>
	);
};

export default EpCard;
