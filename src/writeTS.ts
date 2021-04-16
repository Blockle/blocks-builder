import { GeneratedStyles } from './types';

const { writeFileSync } = require('fs');

function quoteify(value: string | number) {
  if (typeof value === 'number') {
    return value;
  }

  return `'${value}'`;
}

export function writeTS(filename: string, theme: GeneratedStyles): void {
  console.log(`writeTS ${filename}`);

  const buffer: string[] = [];
  const { dynamic } = theme.types;

  buffer.push('declare global {');
  buffer.push('  interface Window {');
  buffer.push('    BlocksStyles: {');

  for (const key in dynamic) {
    buffer.push(`      ${key}: ${dynamic[key].map(quoteify).join(' | ')};`);
  }

  buffer.push('    };');
  buffer.push('  }');
  buffer.push('}');
  buffer.push('');
  buffer.push('export {};');
  buffer.push('');

  writeFileSync(filename, buffer.join('\n'));
}
