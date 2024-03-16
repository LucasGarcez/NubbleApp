import {ColorSchemeName} from 'react-native';

export type AppColorScheme = 'light' | 'dark';

export type ThemePreference = AppColorScheme | 'system';

export type SettingsStore = {
  appColor: AppColorScheme;
  themePreference: ThemePreference;
  showOnboarding: boolean;
  setThemePreference: (themePreference: ThemePreference) => void;
  onSystemChange: (color: ColorSchemeName) => void;
  finishOnboarding: () => void;
};
