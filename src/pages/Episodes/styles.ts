import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	height: 100%;
	.banner {
		width: 100%;
		height: 20rem;
		object-fit: cover;
		background-position: center;
		opacity: 0.4;
		margin: 0 0 3rem;

		@media (max-width: 768px) {
			height: 10rem;
		}
	}
`;

export const Wrapper = styled.div`
	width: 100%;
	padding: 0 7rem;

	@media (max-width: 768px) {
		padding: 0 2rem;
	}
	.banner {
		width: 100%;
		height: 20rem;
		object-fit: cover;
		background-position: center;
		opacity: 0.4;
		margin: 0 0 3rem;
		border-radius: 0.75rem;
	}

	.see-all {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.all {
		width: 100%;

		display: grid;

		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-auto-rows: 1fr;

		padding: 2rem 0rem 5rem;
		gap: 1rem;
	}
`;

export const Title = styled.h1`
	text-align: center;
	padding: 0 0 5rem;
`;
