import { DynamicStyles, Styles } from './types';

export const baseStyles: Styles = {
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
    start: {
      'align-items': 'start',
    },
    end: {
      'align-items': 'end',
    },
  },
  justifyItems: {
    stretch: {
      'justify-items': 'stretch',
    },
    center: {
      'justify-items': 'center',
    },
    start: {
      'justify-items': 'start',
    },
    end: {
      'justify-items': 'end',
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
  fontStyle: {
    normal: {
      'font-style': 'normal',
    },
    italic: {
      'font-style': 'italic',
    },
  },
  gridAutoFlow: {
    row: {
      'grid-auto-flow': 'row',
    },
    column: {
      'grid-auto-flow': 'column',
    },
  },
};

export const dynamicStyles: DynamicStyles = {
  fontSize: {
    type: 'fontSize',
    processor: (value) => ({ 'font-size': value }),
  },
  fontWeight: {
    type: 'fontWeight',
    processor: (value) => ({ 'font-weight': value }),
  },
  color: {
    type: 'color',
    processor: (value) => ({ color: value }),
  },
  backgroundColor: {
    type: 'color',
    processor: (value) => ({ 'background-color': value }),
  },
  padding: {
    type: 'spacing',
    processor: (value) => ({ padding: value }),
  },
  paddingBottom: {
    type: 'spacing',
    processor: (value) => ({ 'padding-bottom': value }),
  },
  paddingLeft: {
    type: 'spacing',
    processor: (value) => ({ 'padding-left': value }),
  },
  paddingRight: {
    type: 'spacing',
    processor: (value) => ({ 'padding-right': value }),
  },
  paddingTop: {
    type: 'spacing',
    processor: (value) => ({ 'padding-top': value }),
  },
  paddingX: {
    type: 'spacing',
    processor: (value) => ({ 'padding-left': value, 'padding-right': value }),
  },
  paddingY: {
    type: 'spacing',
    processor: (value) => ({ 'padding-top': value, 'padding-bottom': value }),
  },
  gridGap: {
    type: 'spacing',
    processor: (value) => ({ 'grid-gap': value }),
  },
  columnGap: {
    type: 'spacing',
    processor: (value) => ({ 'column-gap': value }),
  },
  rowGap: {
    type: 'spacing',
    processor: (value) => ({ 'row-gap': value }),
  },
  negativeMarginTop: {
    type: 'spacing',
    processor: (value) => ({ 'margin-top': `calc(${value} * -1)` }),
  },
  negativeMarginLeft: {
    type: 'spacing',
    processor: (value) => ({ 'margin-left': `calc(${value} * -1)` }),
  },
};
