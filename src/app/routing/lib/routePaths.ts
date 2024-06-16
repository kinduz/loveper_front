/* eslint-disable no-unused-vars */

export enum AppRoutes {
  REGISTRATION = "registration",
  AUTHORIZATION = "auth",
  ABOUT = "about",
  NOT_FOUND = "notFound",
  PRIVACY = "privacy",
  MAIN = "main",
  WELCOME = "welcome",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/main",

  [AppRoutes.WELCOME]: "/welcome",
  [AppRoutes.REGISTRATION]: "/registration",
  [AppRoutes.AUTHORIZATION]: "/auth",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOT_FOUND]: "/*",
  [AppRoutes.PRIVACY]: "/privacy",
};
