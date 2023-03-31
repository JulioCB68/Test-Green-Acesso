import React from "react";

import { EpisodeI } from "api/@types/episode";

import { Container } from "./styles";

interface ICardProps {
	data: EpisodeI;
}

const EpCard: React.FC<ICardProps> = ({ data }) => {
	return (
		<Container>
			<img
				src="https://images.unsplash.com/photo-1592564630984-7410f94db184?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800"
				alt="Banner"
				className="background-EP"
			/>
			<div className="info">
				<strong>{data?.name}</strong>
				<p>{data?.air_date}</p>
				<p>{data?.episode}</p>
			</div>
		</Container>
	);
};

export default EpCard;
