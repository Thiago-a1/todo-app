import styled from 'styled-components';

export const Container = styled.main`
	width: 375px;
	margin: 96px auto;

	@media (min-width: 620px) {
		width: 580px;
	}

	.message {
		display: flex;
		justify-content: center;
		font-size: 1rem;
		font-weight: 700;
		width: 100%;
		color: ${props => props.theme.secondaryFontColor};
		margin-top: 64px;
	}
`;