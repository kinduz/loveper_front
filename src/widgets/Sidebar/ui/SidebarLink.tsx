import React, { FC } from "react";
import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ILinkProps } from "../lib/Sidebar.links";
import { LinkLabel } from "./Sidebar.styled";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Tooltip } from "antd";

interface ISidebarLinkProps extends ILinkProps {
  isCollapsed: boolean;
}

const SidebarLink: FC<ISidebarLinkProps> = ({
  label,
  icon,
  path,
  isCollapsed,
}) => {
  return (
    <NavLink to={path}>
      <Stack
        textAlign={"center"}
        direction={"column"}
        alignItems={"center"}
        gap={2}
      >
        {isCollapsed ? <Tooltip title={label}>{icon}</Tooltip> : <>{icon}</>}
        <LinkLabel isCollapsed={isCollapsed}>{label}</LinkLabel>
      </Stack>
    </NavLink>
  );
};

export default SidebarLink;
