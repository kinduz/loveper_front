import styled from "styled-components";
import { GoSidebarCollapse } from "react-icons/go";

type TProps = {
  isCollapsed: boolean;
};

export const CollapseButtonStyled = styled(GoSidebarCollapse)<TProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  font-size: 70px !important;
  left: -8px;
  top: -8px;
  cursor: pointer;
  padding: 16px;
  transition: 0.3s transform ease-in-out;
  transform: ${(props) => (props.isCollapsed ? "scale(1, 1)" : "scale(-1, 1)")};
`;
