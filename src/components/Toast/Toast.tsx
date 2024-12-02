import React, {useCallback, useEffect, useRef} from 'react';
import {Animated} from 'react-native';

import {useToast, useToastService} from '@services';

import {ToasContent} from './components/ToasContent';

const DEFAULT_DURATION = 4000;

export function Toast() {
  const toast = useToast();
  const {hideToast} = useToastService();

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const runEnteringAnimation = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const runExitingAnimation = useCallback(
    (callback: Animated.EndCallback) => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(callback);
    },
    [fadeAnim],
  );

  useEffect(() => {
    if (toast) {
      runEnteringAnimation();

      setTimeout(() => {
        runExitingAnimation(hideToast);
      }, toast.duration || DEFAULT_DURATION);
    }
  }, [hideToast, runEnteringAnimation, runExitingAnimation, toast]);

  if (!toast) {
    return null;
  }

  return (
    <Animated.View
      testID={'toast-message'}
      style={{position: 'absolute', alignSelf: 'center', opacity: fadeAnim}}>
      <ToasContent toast={toast} hideToast={hideToast} />
    </Animated.View>
  );
}
