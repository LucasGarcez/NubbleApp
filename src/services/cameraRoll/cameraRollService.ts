import {CameraRoll} from '@react-native-camera-roll/camera-roll';

import {PhotoListPaginated} from './cameraRollTypes';

async function getPhotos(cursor?: string): Promise<PhotoListPaginated> {
  const photoPage = await CameraRoll.getPhotos({first: 12, after: cursor});

  const photoList = photoPage.edges.map(edge => edge.node.image.uri);

  return {
    photoList,
    cursor: photoPage.page_info.end_cursor,
    hasNextPage: photoPage.page_info.has_next_page,
  };
}

export const cameraRollService = {
  getPhotos,
};
