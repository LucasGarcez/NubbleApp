import {useSearchHistoryZustand} from './implementation/useSearchHistoryZustand';
import {SearchHistoryData, SearchHistoryService} from './searchHistoryTypes';

export function useSearchHistoryService(): SearchHistoryService {
  const addUser = useSearchHistoryZustand(state => state.addUser);
  const deleteUser = useSearchHistoryZustand(state => state.deleteUser);
  const clearUserList = useSearchHistoryZustand(state => state.clearUserList);

  return {
    addUser,
    deleteUser,
    clearUserList,
  };
}

export function useSearchHistoryUserList(): SearchHistoryData['userList'] {
  const userList = useSearchHistoryZustand(state => state.userList);
  return userList;
}
