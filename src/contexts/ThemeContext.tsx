import { createContext, useState, ReactNode, useEffect } from 'react';

type Theme = 'dark' | 'light';

interface ThemeProviderProps {
	children: ReactNode;
}

interface ThemeContextData {
	currentTheme: Theme;
	toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider = ({children}: ThemeProviderProps) => {
	const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
		const storageTheme = localStorage.getItem('theme');

		return (storageTheme ?? 'dark') as Theme;
	});

	useEffect(() => {
		localStorage.setItem('theme', currentTheme);
	}, [currentTheme]);

	function toggleTheme () {
		setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark');
	}

	return (
		<ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}