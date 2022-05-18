import { ScreenSize, SMALL_SCREEN_BREAKPOINT } from "./constants/constants";

/**
* Returns "LARGE" if the screen width larger than SMALL_SCREEN_BREAKPOINT, otherwise returens "SMALL"
* @returns {ScreenSize}
*/
export const getScreenSize = () => {
  return window.matchMedia(`(min-width: ${SMALL_SCREEN_BREAKPOINT})`).matches ? ScreenSize.Desktop : ScreenSize.Mobile;
};

/**
 * Function to validate an email address
 * @param {string} email 
 */
export const validateEmail = (email: string) => {
  // eslint-disable-next-line no-useless-escape
  const regex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
  return regex.test(email);
};
