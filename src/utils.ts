import { ScreenSize, SMALL_SCREEN_BREAKPOINT } from "./constants/constants";

/**
* Returns "LARGE" if the screen width larger than SMALL_SCREEN_BREAKPOINT, otherwise returens "SMALL"
* @returns {ScreenSize}
*/
export const getScreenSize = () => {
  return window.matchMedia(`(min-width: ${SMALL_SCREEN_BREAKPOINT})`).matches ? ScreenSize.Desktop : ScreenSize.Mobile;
};
