import {ColorSchemeName} from 'react-native';

export type AppColorScheme = 'dark' | 'light';

export type ColorSchemePreference = AppColorScheme | 'system';

export type SettingsService = {
  appColorScheme: AppColorScheme;
  onSystemChange: (value: ColorSchemeName) => void;
  colorSchemePreference: ColorSchemePreference;
  setColorSchemePreference: (pref: ColorSchemePreference) => void;
};
