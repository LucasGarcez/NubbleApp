import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../storage';

import {SearchHistoryService} from './searchHistoryType';

const useSearchHistoryStore = create<SearchHistoryService>()(
  persist(
    (set, get) => ({
      userList: [],
      addUser: user => {
        const userList = get().userList;
        const updatedList = [...userList, user];
        set({userList: updatedList});
      },
      removeUser: userId => {
        const userList = get().userList;
        const updatedList = userList.filter(user => user.id !== userId);
        set({userList: updatedList});
      },
      clearUserList: () => {
        set({userList: []});
      },
    }),
    {
      name: '@SearchHistory',
      storage: storage,
    },
  ),
);

export function useSearchHistory(): SearchHistoryService['userList'] {
  const userList = useSearchHistoryStore(state => state.userList);
  return userList;
}

export function useSearchHistoryService(): Omit<
  SearchHistoryService,
  'userList'
> {
  const addUser = useSearchHistoryStore(state => state.addUser);
  const removeUser = useSearchHistoryStore(state => state.removeUser);
  const clearUserList = useSearchHistoryStore(state => state.clearUserList);

  return {
    addUser,
    removeUser,
    clearUserList,
  };
}
