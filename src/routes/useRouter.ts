import {useEffect} from 'react';

import {
  settingsService,
  useAuthCredentials,
  useShowOnboarding,
} from '@services';

export type Stacks = 'Loading' | 'Auth' | 'App' | 'Onboarding';

export function useRouter(): Stacks {
  const showOnboarding = useShowOnboarding();
  const {authCredentials, isLoading} = useAuthCredentials();

  useEffect(() => {
    if (!isLoading) {
      settingsService.hideSplashScreen();
    }
  }, [isLoading]);

  if (isLoading) {
    return 'Loading';
  }

  if (showOnboarding) {
    return 'Onboarding';
  }

  if (authCredentials) {
    return 'App';
  }

  return 'Auth';
}
