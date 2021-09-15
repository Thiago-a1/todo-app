import styled from 'styled-components'

import sun from '../../assets/icon-sun.svg';
import moon from '../../assets/icon-moon.svg';

interface ThemeProps {
	currentTheme: string;
}

export const Container = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;

	margin-bottom: 32px;

	h1 {
		font-size: 1.8rem;
		font-weight: 700;
		letter-spacing: 10px;
		color: ${props => props.theme.tertiaryFontColor};
	}

	div {
		width: 24px;
		height: 24px;
	}
`;

export const Toggle = styled.button<ThemeProps>`
	width: 100%;
	height: 100%;
	
	background: url(${props => props.currentTheme === 'dark' ? sun : moon});
	background-size: 22px;
	background-repeat: no-repeat;

	border: none;

	transition: ease-in 0.2s;
`;