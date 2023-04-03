import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
	height: 100%;

	padding: 2rem 7rem;

	@media (max-width: 768px) {
		padding: 2rem 3rem 7rem;
	}
`;

export const Wrapper = styled.div`
	display: grid;

	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	grid-auto-rows: 1fr;

	gap: 1rem;

	padding: 0 0 2rem;

	@media (max-width: 768px) {
		padding: 0 0 7rem;
	}
`;
