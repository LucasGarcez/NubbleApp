import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../../storage';
import {SearchHistory} from '../searchHistoryTypes';

export const useSearchHistoryZustand = create<SearchHistory>()(
  persist(
    (set, get) => ({
      userList: [],
      addUser: user => {
        const userList = get().userList;
        const updatedList = [...userList, user];
        set({userList: updatedList});
      },
      deleteUser: userId => {
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
