import {notificationService} from '@services';
import {useMutation} from '@tanstack/react-query';

import {userService} from '..';

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

  return {
    isLoading: mutation.isLoading,
    saveNotificationToken,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
}
