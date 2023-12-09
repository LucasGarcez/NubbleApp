import {useEffect, useState} from 'react';

import {useInfiniteQuery} from '@tanstack/react-query';

import {cameraRollService} from './cameraRollService';

/**
 * return a paginated list of image uri
 */
// TODO: check if has image. (Test with android no Image)
// TODO: add reload (refetch)
export function useCameraRoll(onInitialLoad?: (image: string) => void) {
  const [list, setList] = useState<string[]>([]);

  const query = useInfiniteQuery({
    queryKey: ['CameraRoll'],
    queryFn: ({pageParam}) => cameraRollService.getPhotos(pageParam),
    getNextPageParam: ({cursor}) => cursor,
  });

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<string[]>((prev, curr) => {
        return [...prev, ...curr.photoList];
      }, []);
      setList(newList);

      if (query.data.pages.length === 1 && onInitialLoad) {
        onInitialLoad(newList[0]);
      }
    }
  }, [onInitialLoad, query.data]);

  return {
    photoList: list,
    hasNextPage: query.hasNextPage,
    fetchNextPage: () => query.fetchNextPage(),
  };
}
