import { SidebarStyled } from "./Sidebar.styled";
import { SidebarLinks } from "../lib/Sidebar.links";
import SidebarLink from "./SidebarLink";
import { Stack } from "@mui/material";
import { ThemeSwitcher } from "../../../features";
import { CollapseButton } from "./CollapseSidebar/Collapse.button";
import { useCollapseSidebar } from "../lib/useCollapseSidebar";

export const Sidebar = () => {
  const { isCollapsed, handleCollapse } = useCollapseSidebar();

  return (
    <SidebarStyled isCollapsed={isCollapsed}>
      <CollapseButton
        isCollapsed={isCollapsed}
        handleCollapse={handleCollapse}
      />
      <Stack gap={4}>
        {SidebarLinks.map(({ icon, label, path }) => (
          <SidebarLink
            isCollapsed={isCollapsed}
            path={path}
            icon={icon}
            label={label}
            key={label}
          />
        ))}
      </Stack>
      <ThemeSwitcher />
    </SidebarStyled>
  );
};
