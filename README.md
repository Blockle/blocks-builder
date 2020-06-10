# @blockle/blocks-builder

## Install

```bash
yarn add --dev @blockle/blocks-builder
```

## Usage

```ts
import { createTheme, writeCSS, writeTS } from '@blockle/blocks/builder';

const theme = createTheme({
  breakpoints: [0, 500, 800],
  spacing: {
    gutter: 'var(--space-gutter)',
    xsmall: 'var(--space-xsmall)',
    small: 'var(--space-small)',
    medium: 'var(--space-medium)',
    large: 'var(--space-large)',
    xlarge: 'var(--space-xlarge)',
  },
  typography: {
    xsmall: 'var(--font-xsmall)',
    small: 'var(--font-small)',
    medium: 'var(--font-medium)',
    large: 'var(--font-large)',
    xlarge: 'var(--font-xlarge)',
  },
  colors: {
    danger: 'var(--color-danger)',
    dark: 'var(--color-dark)',
    info: 'var(--color-info)',
    light: 'var(--color-light)',
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
  },
});

writeCSS('./src/useStyles/blockle-blocks.css', theme);
writeTS('./src/useStyles/blocks.ts', theme);
```
