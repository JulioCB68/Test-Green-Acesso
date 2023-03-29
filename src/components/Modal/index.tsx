/* eslint-disable @next/next/no-img-element */
import React from "react";
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

interface IModalProps {
	data?: CharacterI;
	handleModal: (arg: boolean) => void;
}

const Modal: React.FC<IModalProps> = ({ data, handleModal }) => {
	return (
		<>
			<Container key={data?.id}>
				<Content>
					<Header>
						<button onClick={() => handleModal(false)}>
							<FiArrowLeft size={24} />
						</button>
						<button onClick={() => handleModal(false)}>
							<img src={data?.image} alt="Rick Icon" className="icon" />
						</button>
					</Header>
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
								<p>
									<strong>{data?.status}</strong> at the moment
								</p>
							</div>
						</Info>
						<ImageContainer>
							<img src={data?.image} alt="Dog Image" />
						</ImageContainer>
					</SubContainer>
				</Content>
			</Container>
		</>
	);
};

export default Modal;
