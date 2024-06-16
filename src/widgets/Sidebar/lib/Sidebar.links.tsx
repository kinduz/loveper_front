/* eslint-disable import/no-extraneous-dependencies */
import { ReactNode } from "react";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { FaItunesNote } from "react-icons/fa6";
import { LuSplit } from "react-icons/lu";
import { SiAudiomack } from "react-icons/si";
import { RoutePaths } from "../../../app/routing/lib";

// TODO: протипизировать path
export interface ILinkProps {
  icon: ReactNode;
  label: string;
  path: string;
}

export const SidebarLinks: ILinkProps[] = [
  {
    label: "Плеер",
    icon: <SiAudiomack />,
    path: RoutePaths.audioPlayer,
  },
  {
    label: "Диктофон",
    icon: <MdOutlineKeyboardVoice />,
    path: RoutePaths.dictaphone,
  },
  {
    label: "Караоке",
    icon: <FaItunesNote />,
    path: RoutePaths.karaoke,
  },
  {
    label: "Удалить вокал",
    icon: <LuSplit />,
    path: RoutePaths.vocalRemover,
  },
];
