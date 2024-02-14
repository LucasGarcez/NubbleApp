import {PostImage} from '@domain';
import {PhotoIdentifier} from '@react-native-camera-roll/camera-roll';

function toPostImage(edge: PhotoIdentifier): PostImage {
  const name = edge.node.image.filename || Date.now().toString();
  const extension = edge.node.image.extension || 'png';
  return {
    name: name,
    type: extension,
    uri: edge.node.image.uri,
  };
}

export const cameraRollAdapter = {toPostImage};
