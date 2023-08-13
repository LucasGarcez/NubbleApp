import {useCallback, useEffect, useState} from 'react';

import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {userService} from '../userService';
import {User} from '../userTypes';

export function useUserGetById(id: number) {
  // const [user, setUser] = useState<User>();
  // const [error, setError] = useState<boolean | null>(null);
  // const [loading, setLoading] = useState(false);

  const {data, isLoading, isError} = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => userService.getById(id),
  });

  // const getUserById = useCallback(async () => {
  //   try {
  //     setLoading(true);
  //     const _user = await userService.getById(id);
  //     setUser(_user);
  //   } catch (er) {
  //     setError(true);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [id]);

  // useEffect(() => {
  //   getUserById();
  // }, [getUserById]);

  return {
    user: data,
    isLoading,
    isError,
  };
}
