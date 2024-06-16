/* eslint-disable import/no-extraneous-dependencies */
import { ReactNode } from "react";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { CiMicrophoneOn } from "react-icons/ci";
import { LuSplit } from "react-icons/lu";

type TLinkProps = {
  icon: ReactNode;
  label: string;
};

export const SidebarLinks: TLinkProps[] = [
  {
    label: "Диктофон",
    icon: <MdOutlineKeyboardVoice />,
  },
  {
    label: "Караоке",
    icon: <CiMicrophoneOn />,
  },
  {
    label: "Удалить вокал/музыку",
    icon: <LuSplit />,
  },
];
