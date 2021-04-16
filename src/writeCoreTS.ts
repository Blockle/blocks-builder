import { GeneratedStyles } from './types';

const { writeFileSync } = require('fs');

function quoteify(value: string | number) {
  if (typeof value === 'number') {
    return value;
  }

  return `'${value}'`;
}

export function writeCoreTS(filename: string, theme: GeneratedStyles): void {
  console.log(`writeTS ${filename}`);

  const buffer: string[] = [];
  const { dynamic, styles } = theme.types;

  buffer.push('export type ResponsiveStyleProp<T extends string | number> = T | T[];');
  buffer.push('');

  buffer.push('export interface BlocksStyles {');

  Object.keys(dynamic).forEach((key) => {
    const value = dynamic[key];

    buffer.push(`  ${key}: ${value.map(quoteify).join(' | ')};`);
  });

  buffer.push('}');
  buffer.push('');

  buffer.push(
    "type ExtendedStyles = 'BlocksStyles' extends keyof Window ? Window['BlocksStyles'] : BlocksStyles;",
  );
  buffer.push('');

  buffer.push(
    'type GetStyleValue<K extends keyof BlocksStyles> = ExtendedStyles[K] extends string',
  );
  buffer.push('  ? ExtendedStyles[K]');
  buffer.push('  : BlocksStyles[K];');
  buffer.push('');

  buffer.push('export interface StyleProps {');

  Object.keys(styles).forEach((key) => {
    const value = styles[key];

    if (typeof value === 'string') {
      buffer.push(`  ${key}?: ResponsiveStyleProp<GetStyleValue<'${value}'>>;`);
      return;
    }

    buffer.push(`  ${key}?: ResponsiveStyleProp<${value.map(quoteify).join(' | ')}>;`);
  });

  buffer.push('}');
  buffer.push('');
  buffer.push(
    'export type PickStyleProps<T extends keyof StyleProps> = Partial<Pick<StyleProps, T>>;',
  );
  buffer.push('');

  writeFileSync(filename, buffer.join('\n'));
}
