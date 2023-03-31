import styled from "styled-components";

export const Container = styled.div`
	width: 100%;

	.last {
		width: 50%;
		display: grid;

		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		padding: 2rem 0 4rem;

		@media (max-width: 768px) {
			width: 100%;
			grid-template-columns: 1fr;
		}
	}

	.see-all {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.link {
			:hover {
				opacity: 0.6;
			}
		}
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
