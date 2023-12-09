import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

import {Box, Icon, Screen, Text} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const CAMERA_VIEW_SIZE = Dimensions.get('screen').width;
const CONTROL_AREA = SCREEN_HEIGHT - CAMERA_VIEW_SIZE;

export function CameraScreen({}: AppScreenProps<'CameraScreen'>) {
  const {requestPermission, hasPermission} = useCameraPermission();
  const [isReady, setIsReady] = useState(false);
  const camera = useRef<Camera>(null);

  const device = useCameraDevice('back', {
    physicalDevices: [
      'ultra-wide-angle-camera',
      'wide-angle-camera',
      'telephoto-camera',
    ],
  });

  const safeArea = useAppSafeArea();

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  if (!hasPermission) {
    <Screen flex={1}>
      <Text>Sem permissão</Text>
    </Screen>;
  }

  return (
    <Box flex={1}>
      {device != null && (
        <Camera
          ref={camera}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
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
          <Icon size={30} color="grayWhite" name="arrowLeft" />
          <Icon size={30} color="grayWhite" name="flashOff" />
          <Box width={30} />
        </Box>

        <Box style={[styles.controlArea, styles.bottomArea]}>
          {isReady && (
            <Box
              backgroundColor="grayWhite"
              height={80}
              width={80}
              style={{borderRadius: 40}}
            />
          )}
        </Box>
      </Box>
    </Box>
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
