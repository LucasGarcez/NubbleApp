import {useAuthCredentials, useOnboarding} from '@services';

export type Stacks = 'App' | 'Auth' | 'Onboarding' | 'Loading';
export function useRoute(): Stacks {
  const {authCredentials, isLoading: authIsLoading} = useAuthCredentials();
  const {showOnboarding, isLoading: onboardingIsLoading} = useOnboarding();

  if (authIsLoading || onboardingIsLoading) {
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
