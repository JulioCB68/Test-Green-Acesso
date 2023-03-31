import React from "react";

import { Container } from "./styles";
import { EpisodeI } from "api/@types/episode";

interface ICardProps {
	data?: EpisodeI;
}

const Card: React.FC<ICardProps> = ({ data }) => {
	return (
		<Container>
			{data && (
				<>
					<strong>{data.name}</strong>
					<p>{data.air_date}</p>
					<p>{data.episode}</p>
				</>
			)}
		</Container>
	);
};

export default Card;
