import { baseStyles, dynamicStyles } from './styles';
import { GeneratedStyles, StyleProp, Styles, StylesConfig } from './types';

function createStyle(
  variants: Record<string, string>,
  processor: (value: string) => StyleProp,
): Record<string | number, StyleProp> {
  const style: Record<string | number, StyleProp> = {};

  for (const key in variants) {
    style[key] = processor(variants[key]);
  }

  return style;
}

export function createStyles({
  breakpoints,
  color,
  fontSize,
  fontWeight,
  spacing,
}: StylesConfig): GeneratedStyles {
  const extraStyles: Styles = {};

  for (const key in dynamicStyles) {
    const entry = dynamicStyles[key];

    switch (entry.type) {
      case 'color':
        extraStyles[key] = createStyle(color, entry.processor);
        break;
      case 'fontSize':
        extraStyles[key] = createStyle(fontSize, entry.processor);
        break;
      case 'fontWeight':
        extraStyles[key] = createStyle(fontWeight, entry.processor);
        break;
      case 'spacing':
        extraStyles[key] = createStyle(spacing, entry.processor);
        break;
    }
  }

  const typedStyles: GeneratedStyles['types']['styles'] = {};

  for (const key in baseStyles) {
    typedStyles[key] = Object.keys(baseStyles[key]);
  }

  for (const key in dynamicStyles) {
    typedStyles[key] = dynamicStyles[key].type;
  }

  return {
    breakpoints,
    styles: {
      ...baseStyles,
      ...extraStyles,
    },
    types: {
      dynamic: {
        color: Object.keys(color),
        fontSize: Object.keys(fontSize),
        fontWeight: Object.keys(fontWeight),
        spacing: Object.keys(spacing),
      },
      styles: {
        ...typedStyles,
      },
    },
  };
}
