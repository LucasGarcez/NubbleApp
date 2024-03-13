import {useAuthCredentials, useOnboarding} from '@services';

export type Stacks = 'App' | 'Auth' | 'Onboarding' | 'Loading';
export function useRoute(): Stacks {
  const {showOnboarding} = useOnboarding();
  const {authCredentials, isLoading: authIsLoading} = useAuthCredentials();

  if (authIsLoading) {
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
