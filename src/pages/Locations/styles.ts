import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	display: grid;

	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-auto-rows: 100px;

	gap: 1rem;
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	cursor: pointer;

	:hover {
		opacity: 0.5;
	}
`;
