import styled from "styled-components";

export const Container = styled.div`
	width: 100%;

	display: grid;

	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-auto-rows: 1fr;

	padding: 2rem 0;
	gap: 1rem;
`;
