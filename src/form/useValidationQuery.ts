import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {useDebounce} from '@hooks';

interface Param<T extends {length: number}> {
  value: T;
  enabled: boolean;
  fieldName: string;
  isAvailableFunc: (value: T) => Promise<boolean>;
}

export function useValidationQuery<T extends {length: number}>({
  value,
  enabled,
  isAvailableFunc,
  fieldName,
}: Param<T>) {
  const debouncedValue = useDebounce(value, 1500);

  const {data, isFetching} = useQuery({
    queryKey: [QueryKeys.AsyncValidation, fieldName, debouncedValue],
    queryFn: () => isAvailableFunc(debouncedValue),
    retry: false,
    staleTime: 20000,
    enabled: enabled && debouncedValue.length > 0,
  });

  const isDebouncing = debouncedValue !== value;

  return {
    isUnavailable: data === false,
    isFetching: isFetching || isDebouncing,
  };
}
