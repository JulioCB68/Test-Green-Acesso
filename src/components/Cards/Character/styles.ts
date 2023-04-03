import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	padding: 1rem 1rem 0.5rem;
	background: #535c70;
	cursor: pointer;
	border-radius: 0.25rem;
	transition: all ease-in-out 300ms;

	:hover {
		transform: scale(0.95);
	}

	h3 {
		padding: 0.5rem 1rem;
		color: #ffffff;
	}

	p {
		color: #e5e5e5;
		opacity: 0.7;
		padding: 0.5rem 1rem;
		text-transform: capitalize;
	}

	> div {
		display: flex;
		align-items: center;
	}

	button {
		background: transparent;
		border: none;
		outline: none;
		color: #ffffff;
		cursor: pointer;
	}

	img {
		min-width: 15rem;
		width: 100%;
		max-height: 15rem;
		object-fit: cover;
		cursor: pointer;
		border-radius: 0.25rem;
	}

	.status {
		display: flex;
		padding: 0.5rem 1rem;

		p {
			padding: 0 0.75rem;
		}
	}
`;
