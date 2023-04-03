/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import { useQuery } from "react-query";
import { getMultipleCharacters } from "api/characters";

import { EpisodeI } from "api/@types/episode";
import { extractNumbersFromUrls } from "utils/extractNumbersFromUrls";

import Favorite from "components/Favorites";
import Modal from "components/Modal";

import { Container } from "./styles";

interface ICardProps {
	data: EpisodeI;
}

const EpCard: React.FC<ICardProps> = ({ data }) => {
	const [openModal, setOpenModal] = useState(false);
	const [numbers, setNumbers] = useState<string[]>([]);

	const { data: dataCharacters, isLoading } = useQuery(
		["episode-characters-data", numbers],
		() => getMultipleCharacters(numbers),
		{
			onSuccess: () => {
				if (data?.characters) {
					const extractedNumbers = extractNumbersFromUrls(data.characters);
					setNumbers(extractedNumbers);
				}
			},
		}
	);

	return (
		<>
			<Container>
				<img
					src="https://images.unsplash.com/photo-1592564630984-7410f94db184?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800"
					alt="Banner"
					className="background-EP"
					onClick={() => setOpenModal(true)}
				/>
				<div className="info" onClick={() => setOpenModal(true)}>
					<strong>{data?.name}</strong>
					<p>{data?.air_date}</p>
					<p>{data?.episode}</p>
				</div>
				<Favorite favoriteId={data?.id ?? 0} category="episode" />
			</Container>
			{openModal && (
				<Modal
					isEpisodeModal
					dataEp={data}
					handleModal={setOpenModal}
					characters={dataCharacters}
				/>
			)}
		</>
	);
};

export default EpCard;
