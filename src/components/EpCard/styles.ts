import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	cursor: pointer;
	margin: 1rem 0;
	transition: all ease-in-out 300ms;

	:hover {
		transform: scale(0.95);
	}

	.background-EP {
		/* background: linear-gradient(150deg, #516395 0%, #614385 100%); */
		/* background: linear-gradient(150deg, #614385 0%, #516395 100%); */
		width: 100%;
		height: 10rem;
		object-fit: cover;
		opacity: 0.7;
		border-radius: 0.75rem 0.75rem 0 0;
	}

	.info {
		background: white;
		color: #000;
		padding: 1rem 2rem;
		border-radius: 0 0 0.75rem 0.75rem;
		min-height: 7.5rem;
		max-height: 7.5rem;

		p {
			color: gray;
			padding: 0.5rem 0 0;

			:first-of-type {
				padding: 1rem 0 0;
			}
		}
	}
`;
