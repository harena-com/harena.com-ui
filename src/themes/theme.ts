import {defaultDarkTheme, defaultLightTheme, RaThemeOptions} from "react-admin";

/**
 * Partial theme options for common components.
 *
 * This object is used to define and customize the theme options for common
 * components in the application. It extends the Partial type of RaThemeOptions["components"].
 *
 * @type {Partial<RaThemeOptions["components"]>}
 */
export const commonComponentsTheme: Partial<RaThemeOptions["components"]> = {
  /* Our own custom configuration of common MUI components come here */
};

export const lightTheme: RaThemeOptions = {
  ...defaultLightTheme,
  components: {
    ...defaultLightTheme.components,
    ...commonComponentsTheme,
  },
};

export const darkTheme = {
  ...defaultDarkTheme,
  components: {
    ...defaultDarkTheme.components,
    ...commonComponentsTheme,
  },
};
