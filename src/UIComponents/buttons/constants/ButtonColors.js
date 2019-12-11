import * as Tokens from '../../../constants/tokens';

export default {
  primary: {
    background: {
      idle: Tokens.OZ,
      hover: Tokens.OZ_MEDIUM,
      active: Tokens.OZ_DARK
    }
  },
  secondary: {
    background: {
      idle: Tokens.OLAF,
      hover: Tokens.OZ_LIGHT,
      active: Tokens.OZ_MEDIUM
    },
    border: Tokens.OZ,
    text: Tokens.OZ
  },
  tertiary: {
    background: {
      idle: Tokens.OBSIDIAN,
      hover: Tokens.HEFFALUMP,
      active: Tokens.PANTERA
    }
  },
  'tertiary-light': {
    background: {
      idle: Tokens.GREAT_WHITE,
      hover: Tokens.KOALA,
      active: Tokens.FLINT
    },
    text: Tokens.SLINKY
  }
};
