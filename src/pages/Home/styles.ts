import styled from "styled-components";

export const Container = styled.div`
	.actions {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 3rem 14rem;

		input {
			width: 75%;
			padding: 1rem;
			outline: 0;
			border: 0;
			border-radius: 0.5rem;
		}

		button {
			cursor: pointer;
			padding: 1rem 2rem;
			border-radius: 0.5rem;
			border: 0;

			:first-of-type {
				margin: 0 1rem 0 0;
			}
		}
	}
`;

export const Wrapper = styled.div`
	width: 100%;

	display: grid;

	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	grid-auto-rows: 1fr;

	padding: 2rem 7rem;
	gap: 1rem;

	@media (max-width: 768px) {
		padding: 2rem 5rem;
	}
`;
