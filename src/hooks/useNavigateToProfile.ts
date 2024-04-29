import {useNavigation} from '@react-navigation/native';
import {useAuthCredentials} from '@services';

export function useNavigateToProfile() {
  const authCredentials = useAuthCredentials();
  const navigation = useNavigation();

  function navigateToProfile(userId: number): void {
    if (authCredentials) {
      if (authCredentials.userId === userId) {
        navigation.navigate('AppTabNavigator', {screen: 'MyProfileScreen'});
      } else {
        navigation.navigate('ProfileScreen', {userId});
      }
    }
  }

  return navigateToProfile;
}
