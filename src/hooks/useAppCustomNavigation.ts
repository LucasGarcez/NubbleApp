import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAuthCredentials} from '@services';

import {AppStackParamList} from '@routes';

export function useAppCustomNavigation() {
  const authCredentials = useAuthCredentials();
  // https://reactnavigation.org/docs/navigating/#navigate-to-a-route-multiple-times
  // https://github.com/react-navigation/react-navigation/issues/8664#issuecomment-701017858
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  function toProfile(userId: number): void {
    if (authCredentials) {
      if (authCredentials.userId === userId) {
        navigation.navigate('AppTabNavigator', {screen: 'MyProfileScreen'});
      } else {
        navigation.push('ProfileScreen', {userId});
      }
    }
  }

  type Params = Omit<AppStackParamList['PostCommentScreen'], 'showPost'>;
  function toPostDetails(params: Params): void {
    navigation.push('PostCommentScreen', {
      ...params,
      showPost: true,
    });
  }
  function toPostComment(params: Params): void {
    navigation.push('PostCommentScreen', {
      ...params,
    });
  }

  const navigate = {
    toProfile,
    toPostDetails,
    toPostComment,
  };

  return navigate;
}
