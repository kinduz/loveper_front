import React, { FC, ReactNode } from "react";
import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

type TSidebarLinkProps = {
  icon: ReactNode;
  label: string;
};

const SidebarLink: FC<TSidebarLinkProps> = ({ label, icon }) => {
  return (
    <NavLink to={"/"}>
      <Stack
        textAlign={"center"}
        direction={"column"}
        alignItems={"center"}
        gap={2}
      >
        {icon}
        <span>{label}</span>
      </Stack>
    </NavLink>
  );
};

export default SidebarLink;
