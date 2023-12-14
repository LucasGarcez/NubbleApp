import {CameraRoll} from '@react-native-camera-roll/camera-roll';

import {PhotoListPaginated} from './cameraRollTypes';

async function getPhotos(cursor?: string): Promise<PhotoListPaginated> {
  const result = await CameraRoll.getPhotos({
    first: 40,
    after: cursor,
  });
  const photoList = result.edges.map(item => item.node.image.uri);

  return {
    photoList,
    cursor: result.page_info.end_cursor,
    hasNextPage: result.page_info.has_next_page,
  };
}

export const cameraRollService = {getPhotos};
