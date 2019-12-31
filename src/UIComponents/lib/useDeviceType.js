import { useEffect, useState } from 'react';

import { DEVICE_BREAKPOINTS, DEVICE_TYPE_ENUM } from '../StyleTokens/sizes';

function getDeviceType(width) {
  const { PHONE, PHABLET, TABLET, LAPTOP, DESKTOP } = DEVICE_TYPE_ENUM;
  if (width < DEVICE_BREAKPOINTS[PHONE]) {
    return PHONE;
  }

  if (width < DEVICE_BREAKPOINTS[PHABLET]) {
    return PHABLET;
  }

  if (width < DEVICE_BREAKPOINTS[TABLET]) {
    return TABLET;
  }

  if (width < DEVICE_BREAKPOINTS[LAPTOP]) {
    return LAPTOP;
  }

  return DESKTOP;
}

export default function useDeviceType() {
  const [deviceType, setDeviceType] = useState(
    getDeviceType(window.innerWidth)
  );

  useEffect(() => {
    function handleResize() {
      setDeviceType(getDeviceType(window.innerWidth));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return deviceType;
}
