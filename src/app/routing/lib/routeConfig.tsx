import { RouteObject } from "react-router-dom";
import { RoutePaths } from "./routePaths";
import {
  AboutPageLazy,
  AuthorizationPageLazy,
  MainPageLazy,
  NotFoundPageLazy,
  PrivacyPageLazy,
  RegistrationPageLazy,
  WelcomePageLazy,
} from "../../../pages";

export const routeConfigPublic: RouteObject[] = [
  {
    path: RoutePaths.registration,
    element: <RegistrationPageLazy />,
  },
  {
    path: RoutePaths.auth,
    element: <AuthorizationPageLazy />,
  },
  {
    path: RoutePaths.welcome,
    element: <WelcomePageLazy />,
  },
];

export const routeConfigPrivate: RouteObject[] = [
  {
    path: RoutePaths.main,
    element: <MainPageLazy />,
  },
];

export const routeConfigCommon: RouteObject[] = [
  {
    path: RoutePaths.about,
    element: <AboutPageLazy />,
  },
  {
    path: RoutePaths.notFound,
    element: <NotFoundPageLazy />,
  },
  {
    path: RoutePaths.privacy,
    element: <PrivacyPageLazy />,
  },
];
