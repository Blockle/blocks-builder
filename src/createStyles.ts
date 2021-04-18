import { styles } from './styles';
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

  for (const key in styles) {
    const entry = styles[key];

    switch (entry.type) {
      case 'static':
        extraStyles[key] = entry.values;
        break;
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

  for (const key in styles) {
    const entry = styles[key];

    if (entry.type === 'static') {
      typedStyles[key] = Object.keys(entry.values);
    } else {
      typedStyles[key] = entry.type;
    }
  }

  return {
    breakpoints,
    styles: extraStyles,
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
