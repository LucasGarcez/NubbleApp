import React, {useRef, useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {Camera, useCameraDevice} from 'react-native-vision-camera';

import {Box, Icon, PermissionManager, PressableBox} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const CAMERA_VIEW_SIZE = Dimensions.get('screen').width;
const CONTROL_AREA = SCREEN_HEIGHT - CAMERA_VIEW_SIZE;

export function CameraScreen({navigation}: AppScreenProps<'CameraScreen'>) {
  const [isReady, setIsReady] = useState(false);
  const [flashOn, setFlashOn] = useState(false);
  const camera = useRef<Camera>(null);
  const safeArea = useAppSafeArea();

  const device = useCameraDevice('back', {
    physicalDevices: [
      'ultra-wide-angle-camera',
      'wide-angle-camera',
      'telephoto-camera',
    ],
  });

  async function takePhoto() {
    if (camera.current) {
      const photoFile = await camera?.current.takePhoto({
        flash: flashOn ? 'on' : 'off',
        qualityPrioritization: 'quality',
      });

      navigation.navigate('PublishPostScreen', {
        imageUri: `file://${photoFile.path}`,
      });
    }
  }

  function toggleFlash() {
    setFlashOn(prev => !prev);
  }

  return (
    <PermissionManager
      permissionName="camera"
      description="Permita o Nubble acessar a sua camera">
      <Box flex={1}>
        {device != null && (
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo={true}
            onInitialized={() => setIsReady(true)}
          />
        )}

        <Box flex={1} justifyContent="space-between">
          <Box
            style={[
              {paddingTop: safeArea.top + 12},
              styles.controlArea,
              styles.topArea,
            ]}>
            <Icon
              size={30}
              color="grayWhite"
              name="arrowLeft"
              onPress={navigation.goBack}
            />
            {device?.hasFlash && (
              <Icon
                size={30}
                color="grayWhite"
                name={flashOn ? 'flashOn' : 'flashOff'}
                onPress={toggleFlash}
              />
            )}
            <Box width={30} />
          </Box>

          <Box style={[styles.controlArea, styles.bottomArea]}>
            {isReady && (
              <PressableBox
                onPress={takePhoto}
                backgroundColor="grayWhite"
                height={80}
                width={80}
                style={{borderRadius: 40}}
              />
            )}
          </Box>
        </Box>
      </Box>
    </PermissionManager>
  );
}

const styles = StyleSheet.create({
  controlArea: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    height: CONTROL_AREA / 2,
  },
  topArea: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  bottomArea: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
