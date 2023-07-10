import {useState, useEffect} from 'react';

import {postService} from '../postService';
import {Post} from '../postTypes';

// https://react.dev/learn/extracting-state-logic-into-a-reducer
export function usePostList() {
  const [page, setPage] = useState(1);
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [error, setError] = useState<unknown | null>(null);

  async function getList() {
    try {
      if (!hasMoreData) {
        return;
      }
      setLoading(true);
      const {data, meta} = await postService.getList(page);
      setPostList(prev => [...prev, ...data]);
      setPage(prev => prev + 1);
      setHasMoreData(meta.hasNextPage);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  function refetch() {
    if (!loading) {
      setPostList([]);
      setPage(1);
      getList();
    }
  }

  function fetchNextPage() {
    console.log('fetchNextPage');
    if (!loading) {
      console.log('INSIDER');
      getList();
    }
  }

  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    postList,
    loading,
    error,
    refetch,
    fetchNextPage: fetchNextPage,
  };
}
