import {Appearance} from 'react-native';

import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../storage';

import {SettingsService} from './settingsType';

const useSettingsStore = create<SettingsService>()(
  persist(
    (set, get) => ({
      appColorScheme: 'light',
      colorSchemePreference: 'system',
      onSystemChange: value => {
        if (get().colorSchemePreference === 'system' && value) {
          set({appColorScheme: value});
        }
      },
      setColorSchemePreference: pref => {
        if (pref === 'system') {
          const color = Appearance.getColorScheme();
          if (color) {
            set({appColorScheme: color});
          }
        }
      },
    }),
    {
      name: '@Settings',
      storage: storage,
    },
  ),
);

export function useAppColorScheme(): SettingsService['appColorScheme'] {
  return useSettingsStore(state => state.appColorScheme);
}
export function useSettingsService(): Pick<
  SettingsService,
  'onSystemChange' | 'setColorSchemePreference'
> {
  const onSystemChange = useSettingsStore(state => state.onSystemChange);
  const setColorSchemePreference = useSettingsStore(
    state => state.setColorSchemePreference,
  );

  return {
    onSystemChange,
    setColorSchemePreference,
  };
}
