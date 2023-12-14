import {useEffect, useState} from 'react';

import {PermissionStatus, PermissionName, permissionService} from '@services';

export function usePermission(permissionName: PermissionName) {
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus] = useState<PermissionStatus>();

  async function checkPermission() {
    try {
      setIsLoading(true);
      const initialStatus = await permissionService.check(permissionName);
      if (initialStatus === 'denied') {
        const requestedStatus = await permissionService.request(permissionName);
        console.log('requestedStatus:', requestedStatus);
        setStatus(requestedStatus);
      } else {
        setStatus(initialStatus);
      }
    } catch (error) {
      //TODO: report error
      console.log('error status:', error);
      setStatus('unavailable');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    checkPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    status,
    isLoading,
  };
}
