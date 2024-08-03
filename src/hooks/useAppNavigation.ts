import {useNavigation} from '@react-navigation/native';
import {useAuthCredentials} from '@services';

export function useAppNavigation() {
  const {authCredentials} = useAuthCredentials();

  const navigation = useNavigation();

  function toProfile(userId: number) {
    if (authCredentials?.user.id === userId) {
      navigation.navigate('AppTabNavigator', {screen: 'MyProfileScreen'});
    } else {
      navigation.navigate('ProfileScreen', {userId});
    }
  }

  const navigate = {
    toProfile,
  };

  return navigate;
}
