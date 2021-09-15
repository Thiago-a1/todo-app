import React, {useContext} from 'react';

import { ThemeProvider } from 'styled-components';
import { TodosProvider } from '../../contexts/TodoContext';
import { ThemeContext } from '../../contexts/ThemeContext';

import GlabalStyle from '../../styles/global';
import { light } from '../../styles/themes/light';
import { dark } from '../../styles/themes/dark';

import { Header } from '../Header/index';
import { CreateTodo } from '../CreateTodo/index';
import { TodoList } from '../TodoList';
import { Filter } from '../Filter';

import { Container } from './styles';

export const Dashboard:React.FC = () => {
	const { currentTheme } = useContext(ThemeContext); 

	return (
		<ThemeProvider theme={currentTheme === 'dark' ? dark : light}>
			<TodosProvider>
				<GlabalStyle />
				<Container>
					<Header />

					<CreateTodo />

					<TodoList />

					<Filter />
				</Container>
			</TodosProvider>
		</ThemeProvider>
	)
}