export const palette = {
  greenPrimary: '#074C4E',
  greenPrimaryLight: '#EAF6F6',
  carrotSecondary: '#F86F2D',
  carrotSecondaryLight: '#FAE6DD',
  greenSuccess: '#4ABC86',
  greenSuccessLight: '#D8FFEC',
  redError: '#EA3838',
  redErrorLight: '#FBECEC',

  grayBlack: '#000000',
  black60: 'rgba(0,0,0,0.6)',
  gray1: '#636363',
  gray2: '#8E8E8E',
  gray3: '#B3B3B3',
  gray4: '#E1E1E1',
  gray5: '#F5F5F5',
  grayWhite: '#FFFFFF',
  white70: 'rgba(255,255,255,0.7)',
};

const lightTheme = {
  ...palette,
  primary: palette.greenPrimary,
  primaryContrast: palette.grayWhite,

  buttonPrimary: palette.greenPrimary,

  background: palette.grayWhite,
  backgroundContrast: palette.grayBlack,

  error: palette.redError,
  errorLight: palette.redErrorLight,

  success: palette.greenSuccess,
  successLight: palette.greenSuccessLight,

  market: palette.carrotSecondary,
  paragraph: palette.gray1,
};
const darkTheme: typeof lightTheme = {
  ...palette,
  primary: palette.carrotSecondary,
  primaryContrast: palette.grayWhite,

  buttonPrimary: palette.carrotSecondary,

  background: palette.grayBlack,
  backgroundContrast: palette.grayWhite,

  error: palette.redError,
  errorLight: palette.redErrorLight,

  success: palette.greenSuccess,
  successLight: palette.greenSuccessLight,

  market: palette.carrotSecondary,
  paragraph: palette.grayWhite,
};

export const colors = {palette, lightTheme, darkTheme};
