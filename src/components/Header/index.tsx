import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { Container, Toggle } from './styles';

export const Header: React.FC = () => {
	const { currentTheme, toggleTheme } = useContext(ThemeContext);

	function handleToggleTheme () {
		toggleTheme();
	}

	return (
		<Container>
			<h1>TODO</h1>

			<div>
				<Toggle 
					onClick={() => handleToggleTheme()} 
					currentTheme={currentTheme}
				/>
			</div>
		</Container>
	)
}