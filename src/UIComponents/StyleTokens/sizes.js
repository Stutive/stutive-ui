export const DEVICE_TYPE_ENUM = {
  PHONE: 'PHONE',
  PHABLET: 'PHABLET',
  TABLET: 'TABLET',
  LAPTOP: 'LAPTOP',
  DESKTOP: 'DESKTOP'
};

/**
 *  Device Breakpoints
 *
 *  Taken from Bootstrap 4:
 *  https://getbootstrap.com/docs/4.1/layout/overview/
 *
 */
export const DEVICE_BREAKPOINTS = {
  [DEVICE_TYPE_ENUM.PHONE]: 575.98,
  [DEVICE_TYPE_ENUM.PHABLET]: 767.98,
  [DEVICE_TYPE_ENUM.TABLET]: 991.98,
  [DEVICE_TYPE_ENUM.LAPTOP]: 1199.98
};

/*  Layers  */
export const IKE_LAYER = 1;
export const UGL_LAYER = 2;
export const QUAD_LAYER = 1000;
export const GRAINGER_LAYER = 1100;
export const SIEBEL_LAYER = 1200;
export const ECEB_LAYER = 1250;
export const FAR_LAYER = 1300;
