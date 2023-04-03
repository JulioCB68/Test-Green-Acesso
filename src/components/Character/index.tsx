/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext } from "react";

import { CharacterI } from "api/@types/character";
import FavoriteContext, { Favorite } from "context/FavoriteContext";

import StatusIcon from "components/StatusIcon";
import Modal from "components/Modal";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { Container } from "./styles";

interface ICharacterProps {
	data?: CharacterI;
}

const Character: React.FC<ICharacterProps> = ({ data }) => {
	const [openModal, setOpenModal] = useState(false);
	const { favorites, toggleFavorite } = useContext(FavoriteContext);

	const isFav = favorites.some(
		(favorite: Favorite) =>
			favorite.category === "character" && favorite.id === data?.id
	);

	const handleToggleFavorite = () => {
		toggleFavorite(data?.id as number, "character");
	};

	return (
		<>
			<Container>
				<img
					src={data?.image}
					alt="Character"
					onClick={() => setOpenModal(true)}
				/>
				<h3>{data?.name} </h3>
				<div className="status">
					<StatusIcon status={data?.status} />
					<p>
						{data?.status} - {data?.species}
					</p>
				</div>
				<p>Origin: {data?.origin.name}</p>
				<div
					className="teste"
					onClick={() => {
						handleToggleFavorite();
					}}
				>
					{isFav && <AiFillStar color="gold" />}
					{!isFav && <AiOutlineStar color="gold" />}
				</div>
			</Container>
			{openModal && <Modal data={data} handleModal={setOpenModal} />}
		</>
	);
};

export default Character;
