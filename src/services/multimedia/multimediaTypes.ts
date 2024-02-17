export type PhotoType = {
  uri: string;
  filename: string | null;
  extension: string | null;
};

export type PhotoListPaginated = {
  photoList: string[];
  cursor?: string;
  hasNextPage: boolean;
};

export type ImageForUpload = {
  uri: string; // should include the "file:// at the beginning"
  type: 'image/png' | 'image/jpeg';
  name: string;
};
