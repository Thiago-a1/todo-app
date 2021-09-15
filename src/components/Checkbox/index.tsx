import { Container, StyledCheckbox, Icon } from "./styles"; 

interface CheckboxProps {
	checked?: Boolean;
	onClick?: (event: any) => void;
}

export const Checkbox = ({checked, onClick}: CheckboxProps) => {
	return (
		<Container>
			<StyledCheckbox onClick={onClick} checked={checked}>
				<Icon />
			</StyledCheckbox>
		</Container>
	)
}