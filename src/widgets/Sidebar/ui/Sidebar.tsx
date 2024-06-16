import React from "react";
import { SidebarStyled } from "./Sidebar.styled";
import { SidebarLinks } from "../lib/Sidebar.links";
import SidebarLink from "./SidebarLink";
import { Stack } from "@mui/material";

export const Sidebar = () => {
  return (
    <SidebarStyled>
      <Stack gap={4}>
        {SidebarLinks.map(({ icon, label }) => (
          <SidebarLink icon={icon} label={label} key={label} />
        ))}
      </Stack>
    </SidebarStyled>
  );
};
