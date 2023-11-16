import {QueryKeys, usePaginatedList} from '@infra';

import {userService} from '../userService';
import {User} from '../userTypes';

export function useUserSearch(search: string) {
  const {list, isLoading, isError} = usePaginatedList<User>(
    [QueryKeys.UserList, search],
    () => userService.searchUser(search),
    {enabled: search.length > 1, staleTime: 30000},
  );

  return {
    list,
    isLoading,
    isError,
  };
}
