import {QueryKeys, usePaginatedList} from '@infra';

import {userService} from '../userService';

export function useUserSearch(search: string) {
  return usePaginatedList(
    [QueryKeys.UserList, search],
    () => userService.searchUser(search),
    {
      enabled: search.length > 0,
      staleTime: 30000,
    },
  );
}
