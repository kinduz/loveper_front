import { useState } from "react";

export const useCollapseSidebar = () => {
  const isCollapsedLS = Boolean(
    // @ts-ignore
    JSON.parse(localStorage.getItem("isCollapsedSidebar")),
  );
  const [isCollapsed, setIsCollapsed] = useState(isCollapsedLS);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    localStorage.setItem("isCollapsedSidebar", String(!isCollapsed));
  };

  return { isCollapsed, handleCollapse };
};
