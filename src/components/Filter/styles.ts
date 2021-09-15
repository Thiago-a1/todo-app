import styled from "styled-components";

export const FilterContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 48px;
	margin-top: 16px;

	background-color: ${props => props.theme.secondaryBackground};

	border-radius: 6px;

	.active {
		color: ${props => props.theme.primaryColor} !important;
	}

	@media (min-width: 620px) {
		display: none;
	}
`;

export const Button = styled.button`
	font-size: 1rem;

	border: none;
	background-color: transparent;
	color: ${props => props.theme.secondaryFontColor};

	margin: 0 8px;


	&:hover {
		color: ${props => props.theme.primaryFontColorHover};
	}
`;