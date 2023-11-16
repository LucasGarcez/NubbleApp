import {User} from '@domain';

export type SearchHistoryData = {
  userList: User[];
};

export type SearchHistoryService = {
  addUser: (user: User) => void;
  deleteUser: (userId: number) => void;
  clearUserList: () => void;
};

export type SearchHistory = SearchHistoryService & SearchHistoryData;
