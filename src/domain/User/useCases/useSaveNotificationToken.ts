import {useEffect} from 'react';

import {notificationService} from '@services';
import {useMutation} from '@tanstack/react-query';

import {userService} from '../userService';

export function useSaveNotificationToken() {
  const mutation = useMutation<string, Error, string>({
    mutationFn: userService.addNotificationToken,
    retry: false,
  });

  async function saveNotificationToken() {
    try {
      const token = await notificationService.getToken();
      mutation.mutate(token);
    } catch (error) {
      // Handle error
    }
  }

  useEffect(() => {
    saveNotificationToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    isLoading: mutation.isLoading,
    saveNotificationToken,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
}
