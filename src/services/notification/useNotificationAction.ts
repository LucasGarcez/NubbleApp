import {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {notificationService} from './notificationService';
import {NotificationToNavigate} from './notificationTypes';

export function useNotificationAction() {
  const navigation = useNavigation();

  function handleNavigation(navigateAction: NotificationToNavigate | null) {
    console.log('handleNavigation', navigateAction);
    if (navigateAction) {
      navigation.navigate<any>(navigateAction.screen, navigateAction.params);
    }
  }

  useEffect(() => {
    notificationService.getInitialNotification().then(handleNavigation);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return notificationService.onNotificationOpenedApp(handleNavigation);
  });
}
