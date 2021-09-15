import { createGlobalStyle } from 'styled-components';

import bgMobileDark from '../assets/bg-mobile-dark.jpg';
import bgMobileLight from '../assets/bg-mobile-light.jpg';

import bgDesktopDark from '../assets/bg-desktop-dark.jpg';
import bgDesktopLight from '../assets/bg-desktop-light.jpg';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		background-image: url(${props => props.theme.title === 'dark' ? bgMobileDark : bgMobileLight});
		background-size: 100vw 34vh;
		background-repeat: no-repeat;
		background-color: ${props => props.theme.primaryBackground};

		@media (min-width: 620px) {
			background-image: url(${props => props.theme.title === 'dark' ? bgDesktopDark : bgDesktopLight});
			background-size: 100vw 26vh;
		}
	}

	body, input, button, textarea {
		font-family: 'Josefin Sans', sans-serif;
		font-size: 18px;
		font-weight: 400;
	}

	button {
		cursor: pointer;
	}
`;