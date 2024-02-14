import {CameraRoll} from '@react-native-camera-roll/camera-roll';

import {cameraRollAdapter} from './cameraRollAdapter';
import {PhotoListPaginated} from './cameraRollTypes';

async function getPhotos(cursor?: string): Promise<PhotoListPaginated> {
  const photoPage = await CameraRoll.getPhotos({
    first: 12,
    after: cursor,
    include: ['filename', 'fileExtension', 'imageSize'],
  });

  const photoList = photoPage.edges.map(cameraRollAdapter.toPostImage);

  return {
    photoList,
    cursor: photoPage.page_info.end_cursor,
    hasNextPage: photoPage.page_info.has_next_page,
  };
}

export const cameraRollService = {
  getPhotos,
};
