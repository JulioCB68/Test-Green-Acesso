import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	min-width: 20rem;
	background: white;
	border-radius: 0.75rem;
	color: #000;
	padding: 1rem 2rem;

	p {
		color: gray;
		padding: 1rem 0 0;

		:first-of-type {
			padding: 2rem 0 0;
		}
	}
`;
