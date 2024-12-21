import messaging from '@react-native-firebase/messaging';

async function getToken(): Promise<string> {
  const token = await messaging().getToken();
  console.log('Token:', token);
  return token;
}

export const notificationService = {
  getToken,
};
