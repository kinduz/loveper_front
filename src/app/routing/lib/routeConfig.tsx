import { RouteObject } from "react-router-dom";
import { RoutePaths } from "./routePaths";
import {
  AboutPageLazy,
  AuthorizationPageLazy,
  DictaphonePageLazy,
  KaraokePageLazy,
  MainPageLazy,
  NotFoundPageLazy,
  PrivacyPageLazy,
  RegistrationPageLazy,
  VocalRemoverPageLazy,
  WelcomePageLazy,
} from "../../../pages";
import { AudioPlayerPageLazy } from "../../../pages/AudioPlayerPage";

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
  {
    path: RoutePaths.karaoke,
    element: <KaraokePageLazy />,
  },
  {
    path: RoutePaths.vocalRemover,
    element: <VocalRemoverPageLazy />,
  },
  {
    path: RoutePaths.dictaphone,
    element: <DictaphonePageLazy />,
  },
  {
    path: RoutePaths.audioPlayer,
    element: <AudioPlayerPageLazy />,
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
