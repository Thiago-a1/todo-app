import styled from "styled-components";

import IconCross from '../../assets/icon-cross.svg';

interface ContainerProps {
	checked: boolean
}

export const Container = styled.div<ContainerProps>`
	display: flex;
	flex-direction: row;

	width: 100%;
	height: 48px;
	border-bottom: 1px solid ${props => props.theme.tertiaryColor};

	align-items: center;
	justify-content: space-between;

	@media (min-width: 620px) {
		.exclude-container {
			visibility: hidden;
		}

		&:hover .exclude-container {
				visibility: visible;
		}
		
	}

	div {
		width: 78px;
		height: 100%;
	}

	span {
		font-size: 0.8rem;

		width: 100%;
		height: 0.8rem;

		background-color: ${props => props.theme.secondaryBackground};
		color: ${props => props.checked === true ? props.theme.secondaryFontColor : props.theme.primaryFontColor};

		${props => props.checked === true && 
			'text-decoration: line-through;'
		}
	}
`;

export const ExcludeContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 64px;
	height: 100%;
`;

export const Exclude = styled.button`
	border: none;

	width: 14px;
	height: 14px;

	background: url(${IconCross});
	background-size: 14px;
`;