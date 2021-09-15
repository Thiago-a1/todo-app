import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		title: string,

		primaryColor: string,
		secondaryColor: string,
		tertiaryColor: string,

		primaryBackground: string,
		secondaryBackground: string,

		primaryFontColor: string,
		secondaryFontColor: string,
		tertiaryFontColor: string,

		primaryFontColorHover: string,

		gradient: string,
	}
}