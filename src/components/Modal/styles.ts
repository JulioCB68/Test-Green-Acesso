import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	background-color: rgba(4, 9, 17, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;

	p,
	h4,
	svg {
		color: #000000;
	}
`;

export const Content = styled.div`
	background-color: #ffffff;
	padding: 2rem;
	border-radius: 0.5rem;
	box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1rem;

	button {
		outline: none;
		border: none;
		background-color: transparent;
		cursor: pointer;

		.icon {
			width: 35px;
			border-radius: 100%;
		}
	}
`;

export const SubContainer = styled.div``;

export const Info = styled.div`
	display: flex;
	flex-direction: column;

	> div {
		display: flex;

		h4 {
			padding: 0 0.25rem 0.75rem 0;
		}

		p {
			padding: 0 0.5rem 0 0;
		}
	}

	h3 {
		font-size: 1rem;
		letter-spacing: 0.2rem;
		text-transform: uppercase;
		color: #ffffff;
	}

	.unknown {
		color: #9e9e9e;
	}

	.Dead {
		color: #d63d2e;
	}

	.Alive {
		color: #55cc44;
	}

	.teste {
		width: 100%;
		max-width: 75rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
		grid-auto-rows: 1fr;

		@media (max-width: 1050px) {
			max-width: 25rem;
			grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
			max-height: 15rem;
			overflow: auto;
		}

		@media (min-width: 1051px) {
			max-width: 50rem;
		}

		@media (min-width: 1500px) {
			max-width: 75rem;
		}
	}

	.character-image {
		width: 4rem;
		height: 4rem;
		border-radius: 100%;
	}
`;

export const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 0 2rem;

	img {
		min-width: 7rem;
		max-width: 7rem;
		min-height: 7rem;
		max-height: 7rem;
		object-fit: cover;
		border-radius: 100%;
	}
`;
