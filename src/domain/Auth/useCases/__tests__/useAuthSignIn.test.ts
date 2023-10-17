import {renderHook} from '@testing-library/react-native';
import {AllTheProviders} from 'test-utils';

import {useAuthSignIn} from '../useAuthSignIn';
describe('useAuthSignIn', () => {
  it('saves credentials if the sign-in successfully', () => {
    const {result} = renderHook(() => useAuthSignIn(), {
      wrapper: AllTheProviders,
    });
  });
  it('calls the onError function with a message if sign-in fails', () => {
    const {result} = renderHook(() => useAuthSignIn(), {
      wrapper: AllTheProviders,
    });
  });
});
