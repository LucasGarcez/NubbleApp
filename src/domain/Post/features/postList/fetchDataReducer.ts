import {Pagination} from '@types';

import {Post} from '../../postTypes';

export type PaginationState = {
  page: number;
  data: Post[];
  status: 'loading' | 'error' | 'success';
  hasMoreData: boolean;
};

export type PaginationAction = 'SET_STATUS' | 'ADD_DATA' | 'RESET';

type SetStatusAction = {
  type: 'SET_STATUS';
  payload: PaginationState['status'];
};

type AddDataAction = {
  type: 'ADD_DATA';
  payload: Pagination<Post>;
};

type ResetAction = {
  type: 'RESET';
};

export const initialState: PaginationState = {
  page: 1,
  data: [],
  status: 'loading',
  hasMoreData: true,
};

// https://react.dev/learn/extracting-state-logic-into-a-reducer
export function fetchDataReducer(
  state: PaginationState,
  action: SetStatusAction | AddDataAction | ResetAction,
): PaginationState {
  switch (action.type) {
    case 'SET_STATUS': {
      return {
        ...state,
        status: action.payload,
      };
    }
    case 'ADD_DATA': {
      return {
        ...state,
        page: state.page + 1,
        status: 'success',
        hasMoreData: action.payload.meta.hasNextPage,
        data: [...state.data, ...action.payload.data],
      };
    }
    case 'RESET': {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
}
