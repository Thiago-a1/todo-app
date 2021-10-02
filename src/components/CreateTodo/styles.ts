import styled from 'styled-components';

export const InputContainer = styled.form`
	display: flex;
	flex-direction: row;

	width: 100%;
	height: 48px;
	align-items: center;
	justify-content: space-between;

	background-color: ${props => props.theme.secondaryBackground};
	border-radius: 6px;

	div {
		width: 64px;
		height: 100%;
	}

	input {
		font-size: 0.8rem;

		width: 100%;
		height: 1rem;

		padding-top: 4px;

		background-color: ${props => props.theme.secondaryBackground};
		color: ${props => props.theme.primaryFontColor};

		outline: none;
		border: none;
	}
`;