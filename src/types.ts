export interface StyleProp {
  [key: string]: string | number;
}

export interface Styles {
  [key: string]: Record<string | number, StyleProp>;
}

export interface SpacingStyle {
  type: 'spacing';
  processor: (value: string) => StyleProp;
}

export interface ColorStyle {
  type: 'color';
  processor: (value: string) => StyleProp;
}

export interface FontSizeStyle {
  type: 'fontSize';
  processor: (value: string) => StyleProp;
}

export interface FontWeightStyle {
  type: 'fontWeight';
  processor: (value: string) => StyleProp;
}

export interface StaticStyle {
  type: 'static';
  values: Record<string, Record<string, string | number>>;
}

export type DynamicStyles = Record<
  string,
  SpacingStyle | ColorStyle | FontSizeStyle | FontWeightStyle | StaticStyle
>;

export interface StylesConfig {
  breakpoints: number[];
  spacing: Record<string, string>;
  fontSize: Record<string, string>;
  fontWeight: Record<string, string>;
  color: Record<string, string>;
}

export interface GeneratedStyles {
  breakpoints: number[];
  styles: Styles;
  types: {
    dynamic: {
      [key: string]: string[];
    };
    styles: {
      [key: string]: string | (string | number)[];
    };
  };
}
