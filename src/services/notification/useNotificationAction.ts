import {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {notificationService} from './notificationService';
import {NotificationToNavigate} from './notificationTypes';

export function useNotificationAction() {
  const navigation = useNavigation();

  function handleNavigation(action: NotificationToNavigate | null) {
    if (action) {
      navigation.navigate<any>(action.screen, action.params);
    }
  }

  useEffect(() => {
    notificationService.getInitialNotification().then(handleNavigation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return notificationService.onNotificationOpenedApp(handleNavigation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
