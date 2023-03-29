/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { CharacterI } from "api/@types/character";

import { Container } from "./styles";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import StatusIcon from "components/StatusIcon";
import Modal from "components/Modal";

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
				<p className="teste">
					<AiFillStar color="gold" />
				</p>
			</Container>
			{openModal && <Modal data={data} handleModal={setOpenModal} />}
		</>
	);
};

export default Character;
