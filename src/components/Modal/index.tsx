/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import { CharacterI } from "api/@types/character";
import { EpisodeI } from "api/@types/episode";

import { FiArrowLeft } from "react-icons/fi";

import {
	Container,
	Content,
	Header,
	SubContainer,
	Info,
	ImageContainer,
} from "./styles";

interface IModalProps {
	isEpisodeModal?: boolean;
	data?: CharacterI;
	dataEp?: EpisodeI;
	characters?: CharacterI[];
	handleModal: (arg: boolean) => void;
}

const Modal: React.FC<IModalProps> = ({
	isEpisodeModal,
	data,
	dataEp,
	characters,
	handleModal,
}) => {
	return (
		<>
			<Container key={data?.id} onClick={() => handleModal(false)}>
				<Content>
					<Header>
						<button onClick={() => handleModal(false)}>
							<FiArrowLeft size={24} />
						</button>
					</Header>
					{!isEpisodeModal && (
						<>
							<ImageContainer>
								<img src={data?.image} alt="Dog Image" />
							</ImageContainer>
							<SubContainer>
								<Info>
									<div>
										<h4> Name: </h4>
										<p> {data?.name} </p>
									</div>
									<div>
										<h4> Gender: </h4>
										<p> {data?.gender} </p>
									</div>
									<div>
										<h4> Species: </h4>
										<p> {data?.species} </p>
										<h4> Origin: </h4>
										<p> {data?.origin.name} </p>
									</div>
									<div>
										<h4> Location: </h4>
										<p> {data?.location.name} </p>
									</div>
									<div>
										<h4> Status: </h4>
										<h3 className={data?.status}>
											{data?.status === "unknown" ? "(?)" : data?.status}
										</h3>
									</div>
								</Info>
							</SubContainer>
						</>
					)}

					{isEpisodeModal && (
						<>
							<SubContainer>
								<Info>
									<div>
										<h4> Name: </h4>
										<p> {dataEp?.name} </p>
									</div>
									<div>
										<h4> Episode: </h4>
										<p> {dataEp?.episode} </p>
									</div>
									<div>
										<h4> Air date: </h4>
										<p> {dataEp?.air_date} </p>
									</div>
									<h4> Characters: </h4>
									<div className="characters">
										{characters?.map((item, index) => (
											<div key={index}>
												<img
													className={`character-image`}
													src={item?.image}
													alt="Character"
												/>
											</div>
										))}
									</div>
								</Info>
							</SubContainer>
						</>
					)}
				</Content>
			</Container>
		</>
	);
};

export default Modal;
