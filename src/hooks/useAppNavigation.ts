import {useNavigation} from '@react-navigation/native';
import {useAuthCredentials} from '@services';

import {AppStackParamList} from '@routes';

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

  type Params = Omit<AppStackParamList['PostCommentScreen'], 'showPost'>;
  function toPostComment(params: Params): void {
    navigation.navigate('PostCommentScreen', params);
  }

  function toPostDetails(params: Params): void {
    navigation.navigate('PostCommentScreen', {...params, showPost: true});
  }

  const navigate = {
    toProfile,
    toPostComment,
    toPostDetails,
  };

  return navigate;
}
