import { BlockleTheme, BlockleTokens } from './types';
import { createProp } from './utils';

export const createTheme = ({
  breakpoints,
  spacing,
  typography,
  colors,
}: BlockleTokens): BlockleTheme => {
  return {
    breakpoints,
    colors,
    spacing,
    typography,
    styles: {
      alignItems: {
        stretch: {
          'align-items': 'stretch',
        },
        center: {
          'align-items': 'center',
        },
        'flex-start': {
          'align-items': 'flex-start',
        },
        'flex-end': {
          'align-items': 'flex-end',
        },
        baseline: {
          'align-items': 'baseline',
        },
      },
      display: {
        block: {
          display: 'block',
        },
        inline: {
          display: 'inline',
        },
        'inline-block': {
          display: 'inline-block',
        },
        flex: {
          display: 'flex',
        },
        'inline-flex': {
          display: 'inline-flex',
        },
        grid: {
          display: 'grid',
        },
        'inline-grid': {
          display: 'inline-grid',
        },
        none: {
          display: 'none',
        },
      },
      flexDirection: {
        row: {
          'flex-direction': 'row',
        },
        'row-reverse': {
          'flex-direction': 'row-reverse',
        },
        column: {
          'flex-direction': 'column',
        },
        'column-reverse': {
          'flex-direction': 'column-reverse',
        },
      },
      flexGrow: {
        0: {
          'flex-grow': 0,
        },
        1: {
          'flex-grow': 1,
        },
      },
      flexShrink: {
        0: {
          'flex-shrink': 0,
        },
      },
      flexWrap: {
        nowrap: {
          'flex-wrap': 'nowrap',
        },
        wrap: {
          'flex-wrap': 'wrap',
        },
        'wrap-reverse': {
          'flex-wrap': 'wrap-reverse',
        },
      },
      height: {
        full: {
          height: '100%',
        },
      },
      justifyContent: {
        'flex-start': {
          'justify-content': 'flex-start',
        },
        'flex-end': {
          'justify-content': 'flex-end',
        },
        center: {
          'justify-content': 'center',
        },
        'space-between': {
          'justify-content': 'space-between',
        },
        'space-around': {
          'justify-content': 'space-around',
        },
      },
      overflow: {
        auto: {
          overflow: 'auto',
        },
        scroll: {
          overflow: 'scroll',
        },
        hidden: {
          overflow: 'hidden',
        },
        visible: {
          overflow: 'visible',
        },
      },
      overflowX: {
        auto: {
          'overflow-x': 'auto',
        },
        scroll: {
          'overflow-x': 'scroll',
        },
        hidden: {
          'overflow-x': 'hidden',
        },
        visible: {
          'overflow-x': 'visible',
        },
      },
      overflowY: {
        auto: {
          'overflow-y': 'auto',
        },
        scroll: {
          'overflow-y': 'scroll',
        },
        hidden: {
          'overflow-y': 'hidden',
        },
        visible: {
          'overflow-y': 'visible',
        },
      },
      padding: createProp(spacing, (value) => ({ padding: value })),
      paddingBottom: createProp(spacing, (value) => ({ 'padding-bottom': value })),
      paddingLeft: createProp(spacing, (value) => ({ 'padding-left': value })),
      paddingRight: createProp(spacing, (value) => ({ 'padding-right': value })),
      paddingTop: createProp(spacing, (value) => ({ 'padding-top': value })),
      paddingX: createProp(spacing, (value) => ({ 'padding-left': value, 'padding-right': value })),
      paddingY: createProp(spacing, (value) => ({ 'padding-top': value, 'padding-bottom': value })),
      position: {
        relative: {
          position: 'relative',
        },
        fixed: {
          position: 'fixed',
        },
        absolute: {
          position: 'absolute',
        },
        sticky: {
          position: 'sticky',
        },
      },
      textAlign: {
        left: {
          'text-align': 'left',
        },
        right: {
          'text-align': 'right',
        },
        center: {
          'text-align': 'center',
        },
        justify: {
          'text-align': 'justify',
        },
      },
      textTransform: {
        capitalise: {
          'text-transform': 'capitalize',
        },
        none: {
          'text-transform': 'none',
        },
        uppercase: {
          'text-transform': 'uppercase',
        },
        lowercase: {
          'text-transform': 'lowercase',
        },
      },
      width: {
        full: {
          width: '100%',
        },
      },
      fontSize: {
        xsmall: {
          'font-size': typography.xsmall,
        },
        small: {
          'font-size': typography.small,
        },
        medium: {
          'font-size': typography.medium,
        },
        large: {
          'font-size': typography.large,
        },
        xlarge: {
          'font-size': typography.xlarge,
        },
      },
      fontWeight: {
        regular: {
          'font-weight': 'var(--weight-normal, 400)',
        },
        bold: {
          'font-weight': 'var(--weight-bold, 700)',
        },
      },
      color: createProp(colors, (value) => ({ color: value })),
      backgroundColor: createProp(colors, (value) => ({ 'background-color': value })),
      gridGap: createProp(spacing, (value) => ({ 'grid-gap': value })),
      negativeMarginTop: createProp(spacing, (value) => ({ 'margin-top': `calc(${value} * -1)` })),
      negativeMarginLeft: createProp(spacing, (value) => ({
        'margin-left': `calc(${value} * -1)`,
      })),
    },
  };
};
