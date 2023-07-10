import {useEffect, useReducer} from 'react';

import {postService} from '../../postService';

import {fetchDataReducer, initialState} from './fetchDataReducer';

export function usePostList() {
  const [state, dispatch] = useReducer(fetchDataReducer, initialState);

  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getList() {
    try {
      if (!state.hasMoreData) {
        return;
      }
      dispatch({type: 'SET_STATUS', payload: 'loading'});
      const paginationPost = await postService.getList(state.page);
      dispatch({type: 'ADD_DATA', payload: paginationPost});
    } catch (error) {
      dispatch({type: 'SET_STATUS', payload: 'error'});
    }
  }

  function refetch() {
    dispatch({type: 'RESET'});
    getList();
  }

  function fetchNextPage() {
    if (state.status !== 'loading' && state.hasMoreData) {
      getList();
    }
  }

  return {
    postList: state.data,
    loading: state.status === 'loading',
    error: state.status === 'error',
    refetch,
    fetchNextPage: fetchNextPage,
  };
}
