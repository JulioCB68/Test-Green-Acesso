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
	flex-direction: column;

	p,
	h4,
	svg {
		color: #000000;
	}
`;

export const Content = styled.div`
	background: #ffffff;
	padding: 2rem;
	border-radius: 0.5rem;
	box-shadow: 0px 97px 39px rgba(0, 0, 0, 0.01),
		0px 54px 33px rgba(0, 0, 0, 0.03), 0px 24px 24px rgba(0, 0, 0, 0.04),
		0px 6px 13px rgba(0, 0, 0, 0.05), 0px 0px 0px rgba(0, 0, 0, 0.05);
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 0 1rem;

	button {
		outline: none;
		border: none;
		background: transparent;
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
	padding-right: 1rem;

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
		color: #ffffff;
		text-align: center;
		padding: 0.5rem 0;
		margin: 2rem 0 0;
		font-weight: 400;
		font-size: 1rem;
		text-transform: uppercase;
	}

	.unknown {
		background: #9e9e9e;
		border-radius: 0.25rem;
	}

	.Dead {
		background: #d63d2e;
		border-radius: 0.25rem;
	}

	.Alive {
		background: #55cc44;
		border-radius: 0.25rem;
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
