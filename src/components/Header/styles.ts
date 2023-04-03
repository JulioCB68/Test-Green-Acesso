import styled from "styled-components";

export const Container = styled.div`
	.actions {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 0 3rem;

		.mobile {
			display: none;
		}

		> div {
			display: flex;
			align-items: center;
			padding: 0 1rem;
		}

		input {
			width: 75%;
			padding: 1.25rem;
			outline: 0;
			border: 0;
			border-radius: 0.5rem;
			background: #535c70;
			color: #ffffff;
		}

		button {
			cursor: pointer;
			padding: 1rem 2rem;
			border-radius: 0.5rem;
			border: 0;
			background: #535c70;

			:first-of-type {
				margin: 0 1rem 0 0;
			}
		}

		@media (max-width: 768px) {
			flex-direction: column;
			align-items: flex-start;
			padding: 1rem 0;

			.mobile {
				display: block;
				width: ;

				button {
					margin: 1rem 1.05rem 0 0;

					:last-of-type {
						margin: 1rem 0;
					}
				}
			}

			> div {
				padding: 0;
			}

			.desk {
				display: none;
			}

			input {
				width: 100%;
			}
		}
	}
`;
