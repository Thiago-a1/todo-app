import styled from 'styled-components';

export const Container = styled.ul`
	display: flex;
	flex-direction: column;

	width: 100%;
	border-radius: 6px;
	margin-top: 16px;

	background-color: ${props => props.theme.secondaryBackground};

	.footer-todolist {
		display: flex;
		justify-content: space-between;
		align-items: center;

		width: 100%;
		height: 48px;
		padding: 0 20px;

		span {
			font-size: 0.8rem;

			height: 0.8rem;

			color: ${props => props.theme.secondaryFontColor};

			@media (min-width: 620px) {
				flex: 1;
			}
		}

		.filter-desktop {
			display: none;
		}

		.active {
			color: ${props => props.theme.primaryColor} !important;
		}

		@media (min-width: 620px) {
			.filter-desktop {
				display: flex;
				flex: 4;
				flex-direction: row;
				justify-content: center;
				align-items: center;

				button {
					text-align: center;
					font-weight: 700;
					font-size: 0.8rem;

					margin: 0 16px;

					border: none;
					background-color: transparent;
					color: ${props => props.theme.secondaryFontColor};

					&:hover {
						color: ${props => props.theme.primaryFontColorHover};
					}
				}
			}
		}

		button {
			font-size: 0.8rem;
			text-align: end;

			border: none;
			background-color: transparent;
			color: ${props => props.theme.secondaryFontColor};

			&:hover {
				color: ${props => props.theme.primaryFontColorHover};
			}

			@media (min-width: 620px) {
				text-align: end;
			}
		}
	}
`;