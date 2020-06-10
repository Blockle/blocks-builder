export interface Spacing {
  gutter: string | number;
  xsmall: string | number;
  small: string | number;
  medium: string | number;
  large: string | number;
  xlarge: string | number;
}

export interface Typography {
  xsmall: string | number;
  small: string | number;
  medium: string | number;
  large: string | number;
  xlarge: string | number;
}

export interface Colors {
  // black: string;
  // danger: string;
  // dark: string;
  // gray: string;
  // info: string;
  // light: string;
  // primary: string;
  // secondary: string;
  // success: string;
  // warning: string;
  // white: string;
  [key: string]: string;
}

export interface BlockleStyle {
  [value: string]: Record<string | number, string | number>;
}

export interface BlockleStyles {
  [name: string]: BlockleStyle;
}

export type Breakpoints = number[];

export interface BlockleTokens {
  breakpoints: Breakpoints;
  colors: Colors;
  spacing: Spacing;
  typography: Typography;
}

export interface BlockleTheme extends BlockleTokens {
  styles: BlockleStyles;
}
