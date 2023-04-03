import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	width: 100%;
	cursor: pointer;
	margin: 1rem 0;
	transition: all ease-in-out 300ms;

	:hover {
		transform: scale(0.95);
	}

	.background-EP {
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

	.favorites {
		position: absolute;
		top: 0;
		right: 0;
		background: #444b5c;
		border-radius: 0.25rem;
		opacity: 0.7;
		padding: 0.5rem 1rem;
	}
`;
