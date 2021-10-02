import styled, {css} from "styled-components";

import CheckIcon from '../../assets/icon-check.svg';

interface CheckboxProps {
	checked?: Boolean;
	onClick?: (event: any) => void;
}

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Icon = styled.svg`
	width: 11px;
	height: 11px;
	border-radius: 50%;

	background-image: url(${CheckIcon});
	background-size: 12px;
	background-repeat: no-repeat;
`;

export const StyledCheckbox = styled.div<CheckboxProps>`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 22px !important;
	height: 22px !important;
	background: ${props => props.checked ? props.theme.gradient : 'transparent' };
	border: 1px solid ${props => props.checked ? props.theme.gradient : props.theme.secondaryColor};
	border-radius: 50%;

	${props => !props.onClick ? '' : 'cursor: pointer;'}

	&:hover {
		${props => !props.onClick ? '' : props.checked === false && css`
			position: relative;

			&::after {
				position: absolute;
				content: '';

				width: 21px;
				height: 21px;
				z-index: 2;

				background: ${props => props.theme.secondaryBackground};

				border-radius: inherit;
			}

			&::before {
				position: absolute;
				content: '';

				width: 23px;
				height: 23px;
				z-index: 1;

				border-radius: inherit;
				background-image: ${props => props.theme.gradient};
			}
		`}
	}

	${Icon} {
		visibility: ${props => props.checked ? 'visible' : 'hidden'};
	}
`;