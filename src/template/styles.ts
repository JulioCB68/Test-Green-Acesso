import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 7rem 1fr;
	background: #f6f5f3;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column-reverse;
	}
`;

export const Aside = styled.div`
	width: 100%;
	background: linear-gradient(180deg, #374151 100%, #111827 0%);

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	.side-icons {
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;

		margin: 1rem;
		padding: 1rem 0;

		cursor: pointer;

		svg {
			color: #f6f5f3;
		}

		:hover {
			background: #27325c;
			svg {
				color: #e5e5e5;
			}
		}
	}

	@media (max-width: 768px) {
		flex-direction: row;

		.side-icons {
			width: 100%;

			display: flex;
			align-items: center;
			justify-content: center;

			margin: 0;
			padding: 1.5rem 0;
		}
	}
`;

export const Content = styled.div`
	padding: 0 2rem;
	width: 100%;
	background: linear-gradient(180deg, #374151 0%, #111827 100%);
`;
