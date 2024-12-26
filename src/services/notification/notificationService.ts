import messaging from '@react-native-firebase/messaging';

async function getToken(): Promise<string> {
  const token = await messaging().getToken();
  return token;
}

export const notificationService = {getToken};
