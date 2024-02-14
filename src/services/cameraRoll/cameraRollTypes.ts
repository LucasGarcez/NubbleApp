import {PostImage} from '@domain';

export type PhotoType = {
  uri: string;
  filename: string | null;
  extension: string | null;
};

export type PhotoListPaginated = {
  photoList: PostImage[];
  cursor?: string;
  hasNextPage: boolean;
};
