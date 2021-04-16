import { GeneratedStyles } from './types';

const { writeFileSync } = require('fs');

function shorten(name: string, breakpointIndex: number) {
  if (process.env.NODE_ENV !== 'production') {
    return breakpointIndex ? `bb-${name}-bp${breakpointIndex}` : `bb-${name}`;
  }

  const parts: string[] = [];
  const matches = name.match(/(^[a-z])|([A-Z])|(?<=[-])([a-z0-9])|([a-z0-9]$)/g);

  matches?.forEach((match) => {
    parts.push(match);
  });

  if (breakpointIndex !== 0) {
    parts.push(`${breakpointIndex}`);
  }

  return parts.join('');
}

export function writeCSS(filename: string, theme: GeneratedStyles): void {
  console.log(`writeCSS ${filename}`);

  const buffer: string[] = [];
  const breakpointsBuffer: { [key: string]: string[] } = {};
  const breakpoints = [...theme.breakpoints];
  const styles = Object.keys(theme.styles);

  styles.forEach((name) => {
    const style = theme.styles[name];
    const values = Object.keys(style);

    buffer.push(`/* ${name} */`);

    values.forEach((key) => {
      const styling = style[key];
      buffer.push(`.${shorten(`${name}-${key}`, 0)} {`);

      Object.keys(styling).forEach((key) => {
        buffer.push(`  ${key}: ${styling[key]};`);
      });

      buffer.push('}');
      buffer.push('');

      // Breakpoints
      breakpoints.forEach((breakpoint, i) => {
        if (i === 0) {
          return;
        }
        const index = String(breakpoint);

        if (!breakpointsBuffer[index]) {
          breakpointsBuffer[index] = [];
        }

        breakpointsBuffer[index].push(`  .${shorten(`${name}-${key}`, i)} {`);

        Object.keys(styling).forEach((key) => {
          breakpointsBuffer[index].push(`    ${key}: ${styling[key]};`);
        });

        breakpointsBuffer[index].push('  }');
        breakpointsBuffer[index].push('');
      });
    });
  });

  Object.keys(breakpointsBuffer).forEach((breakpoint) => {
    buffer.push('');
    buffer.push(`@media (min-width: ${breakpoint}px) {`);
    buffer.push(breakpointsBuffer[breakpoint].join('\n'));
    buffer.push(`}`);
  });

  writeFileSync(filename, buffer.join('\n'));
}
