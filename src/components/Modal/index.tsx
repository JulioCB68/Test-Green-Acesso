/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { CharacterI } from "api/@types/character";

import {
	Container,
	Content,
	Header,
	SubContainer,
	Info,
	ImageContainer,
} from "./styles";

import { FiArrowLeft } from "react-icons/fi";
import { EpisodeI } from "api/@types/episode";
import { getMultipleCharacters } from "api/characters";
import { useQuery } from "react-query";

import { extractNumbersFromUrls } from "utils/extractNumbersFromUrls";

interface IModalProps {
	data?: CharacterI;
	dataEp?: EpisodeI;
	handleModal: (arg: boolean) => void;
	isEpisodeModal?: boolean;
}

const Modal: React.FC<IModalProps> = ({
	data,
	dataEp,
	handleModal,
	isEpisodeModal,
}) => {
	const [numbers, setNumbers] = useState<string[]>([]);

	const { data: dataCharacters, isLoading } = useQuery(
		["episode-characters-data", dataEp, numbers],
		() => getMultipleCharacters(numbers),
		{
			onSuccess: () => {
				if (dataEp?.characters) {
					const extractedNumbers = extractNumbersFromUrls(dataEp.characters);
					setNumbers(extractedNumbers);
				}
			},
		}
	);

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
									<div className="teste">
										<h4> Characters: </h4>
										{/* Essa verificação 'Array.isArray(dataCharacters) &&'
										 garante que o método map() só será chamado se dataCharacters for um array
										 evitando o erro dataCharacters.map is not a function */}
										{Array.isArray(dataCharacters) &&
											dataCharacters.map((item, index) => (
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
