import {ColorSchemeName} from 'react-native';

export type AppTheme = 'dark' | 'light';

export type UserPreference = AppTheme | 'system';

export type SettingsService = {
  appTheme: AppTheme;
  onSystemChange: (systemTheme: ColorSchemeName) => void;
  userPreference: UserPreference;
  setUserPreference: (pref: UserPreference) => void;
};
