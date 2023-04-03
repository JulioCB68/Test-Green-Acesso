import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	padding: 2rem 7rem;
	height: 100vh;

	@media (max-width: 768px) {
		padding: 2rem 3rem 7rem;
	}

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

	.residents {
		max-width: 75rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
		grid-auto-rows: 1fr;
		padding: 1rem 0;

		@media (max-width: 768px) {
			max-height: 35rem;
			overflow: auto;
		}
	}

	.character-image {
		width: 5rem;
		height: 5rem;
		border-radius: 100%;
		margin: 1rem 0;
	}
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem 2rem;

	> div {
		display: flex;
	}

	p {
		padding: 1rem 0.5rem 0 0;
	}
`;
