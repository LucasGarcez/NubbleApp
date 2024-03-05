import {Appearance, Platform, StatusBar} from 'react-native';

import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {colors} from '@theme';

import {storage} from '../storage';

import {AppTheme, SettingsService} from './settingsType';

function handleStatusBar(appTheme: AppTheme) {
  StatusBar.setBarStyle(appTheme === 'dark' ? 'light-content' : 'dark-content');
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(
      appTheme === 'dark' ? colors.palette.grayBlack : colors.palette.grayWhite,
    );
  }
}

const useSettingsStore = create<SettingsService>()(
  persist(
    (set, get) => ({
      appTheme: 'light',
      userPreference: 'system',
      onSystemChange: systemTheme => {
        const userPreference = get().userPreference;
        if (userPreference === 'system' && systemTheme) {
          set({appTheme: systemTheme});
          handleStatusBar(systemTheme);
        }
      },
      setUserPreference: newUserPreference => {
        let appTheme: AppTheme;
        if (newUserPreference === 'system') {
          const systemScheme = Appearance.getColorScheme();
          appTheme = systemScheme || 'light';
        } else {
          appTheme = newUserPreference;
        }
        set({appTheme, userPreference: newUserPreference});
        handleStatusBar(appTheme);
      },
    }),
    {
      name: '@Settings',
      storage: storage,
    },
  ),
);

export function useAppColorScheme(): SettingsService['appTheme'] {
  return useSettingsStore(state => state.appTheme);
}
export function useUsePreference(): SettingsService['userPreference'] {
  return useSettingsStore(state => state.userPreference);
}
export function useSettingsService(): Pick<
  SettingsService,
  'onSystemChange' | 'setUserPreference'
> {
  const onSystemChange = useSettingsStore(state => state.onSystemChange);
  const setUserPreference = useSettingsStore(state => state.setUserPreference);

  return {
    onSystemChange,
    setUserPreference,
  };
}
