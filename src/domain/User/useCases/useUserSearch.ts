import {QueryKeys, usePaginatedList} from '@infra';

import {useDebounce} from '@hooks';

import {userService} from '../userService';
import {User} from '../userTypes';

export function useUserSearch(search: string) {
  const debouncedSearch = useDebounce(search);

  return usePaginatedList<User>([QueryKeys.UserList, debouncedSearch], () =>
    userService.searchUser(search),
  );
}
