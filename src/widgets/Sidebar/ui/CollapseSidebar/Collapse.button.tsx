import React, { FC } from "react";
import { CollapseButtonStyled } from "./Collapse.styled";

type TCollapseProps = {
  handleCollapse: () => void;
  isCollapsed: boolean;
};

export const CollapseButton: FC<TCollapseProps> = ({
  handleCollapse,
  isCollapsed,
}) => {
  return (
    <CollapseButtonStyled isCollapsed={isCollapsed} onClick={handleCollapse} />
  );
};
