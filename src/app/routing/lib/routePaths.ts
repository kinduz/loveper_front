/* eslint-disable no-unused-vars */

export enum AppRoutes {
  REGISTRATION = "registration",
  AUTHORIZATION = "auth",
  ABOUT = "about",
  NOT_FOUND = "notFound",
  PRIVACY = "privacy",
  MAIN = "main",
  WELCOME = "welcome",
  KARAOKE = "karaoke",
  DICTAPHONE = "dictaphone",
  VOCAL_REMOVER = "vocalRemover",
  AUDIO_PLAYER = "audioPlayer",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/main",
  [AppRoutes.DICTAPHONE]: "/dictaphone",
  [AppRoutes.KARAOKE]: "/karaoke",
  [AppRoutes.VOCAL_REMOVER]: "/vocal-remover",
  [AppRoutes.AUDIO_PLAYER]: "/audio-player",

  [AppRoutes.WELCOME]: "/welcome",
  [AppRoutes.REGISTRATION]: "/registration",
  [AppRoutes.AUTHORIZATION]: "/auth",
  [AppRoutes.ABOUT]: "/about",
  [AppRoutes.NOT_FOUND]: "/*",
  [AppRoutes.PRIVACY]: "/privacy",
};
