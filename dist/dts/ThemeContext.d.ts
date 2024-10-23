import React, { ReactNode } from 'react';
type ThemeMode = 'auto' | 'light' | 'dark';
type ColorSet = {
    background?: string;
    text?: string;
    shadow?: string;
    primaryActionBackground?: string;
    primaryActionHoverBackground?: string;
    primaryActionText?: string;
    secondaryActionBackground?: string;
    secondaryActionText?: string;
    secondaryActionHoverBackground?: string;
};
type Theme = {
    mode: ThemeMode;
    light: ColorSet;
    dark: ColorSet;
};
declare const ThemeProvider: ({ theme: providedTheme, children }: {
    theme?: Theme;
    children: ReactNode;
}) => React.JSX.Element;
declare const useTheme: () => Theme;
export default ThemeProvider;
export { Theme, useTheme };
