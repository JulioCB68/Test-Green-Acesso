/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext } from "react";

import { useQuery } from "react-query";
import { getMultipleCharacters } from "api/characters";

import { EpisodeI } from "api/@types/episode";
import FavoriteContext, { Favorite } from "context/FavoriteContext";
import { extractNumbersFromUrls } from "utils/extractNumbersFromUrls";

import Modal from "components/Modal";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { Container } from "./styles";

interface ICardProps {
	data: EpisodeI;
}

const EpCard: React.FC<ICardProps> = ({ data }) => {
	const [openModal, setOpenModal] = useState(false);
	const [numbers, setNumbers] = useState<string[]>([]);
	const { favorites, toggleFavorite } = useContext(FavoriteContext);

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

	const isFav = favorites.some(
		(favorite: Favorite) =>
			favorite.category === "episode" && favorite.id === data?.id
	);

	const handleToggleFavorite = () => {
		toggleFavorite(data?.id as number, "episode");
	};

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
				<div
					className="favorites"
					onClick={() => {
						handleToggleFavorite();
					}}
				>
					{isFav && <AiFillStar color="gold" />}
					{!isFav && <AiOutlineStar color="gold" />}
				</div>
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
