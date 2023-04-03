import styled from "styled-components";

export const Container = styled.div`
	padding: 2rem 7rem;
	min-height: 100vh;
	height: 100%;

	@media (max-width: 768px) {
		padding: 2rem 3rem 7rem;
	}
`;

export const Wrapper = styled.div`
	width: 100%;

	display: grid;

	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	grid-auto-rows: 1fr;

	gap: 1rem;
`;
