/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import { CharacterI } from "api/@types/character";

import StatusIcon from "components/StatusIcon";
import Favorite from "components/Favorites";
import Modal from "components/Modal";

import { Container } from "./styles";

interface ICharacterProps {
	data?: CharacterI;
}

const Character: React.FC<ICharacterProps> = ({ data }) => {
	const [openModal, setOpenModal] = useState(false);

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
				<Favorite favoriteId={data?.id ?? 0} category="character" />
			</Container>
			{openModal && <Modal data={data} handleModal={setOpenModal} />}
		</>
	);
};

export default Character;
