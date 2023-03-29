import styled from "styled-components";

export const Container = styled.div`
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
