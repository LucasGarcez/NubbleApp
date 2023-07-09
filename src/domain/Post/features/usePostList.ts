import {useState, useEffect} from 'react';

import {postService} from '../postService';
import {Post} from '../postTypes';

export function usePostList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);

  async function getList() {
    try {
      setLoading(true);
      const list = await postService.getList(1);
      setPostList(list);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  function refetch() {
    if (!loading) {
      getList();
    }
  }

  useEffect(() => {
    getList();
  }, []);

  return {
    postList,
    loading,
    error,
    refetch,
  };
}
