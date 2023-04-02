import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	background: #535c70;
	border-radius: 0.25rem;
	cursor: pointer;
	transition: all ease-in-out 300ms;
	padding: 1rem;

	h3 {
		color: #ffffff;
		padding: 1rem 1rem 0;
	}

	p {
		color: #e5e5e5;
		opacity: 0.7;
		text-transform: capitalize;
		padding: 1rem 1rem 0;

		:not(:first-of-type) {
			padding: 0.5rem 1rem 0;
		}
	}

	:hover {
		transform: scale(0.95);
	}
`;
