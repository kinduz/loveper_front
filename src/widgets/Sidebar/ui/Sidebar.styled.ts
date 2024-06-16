import styled from "styled-components";

type TProps = {
  isCollapsed: boolean;
};

export const SidebarStyled = styled("nav")<TProps>`
  position: relative;
  display: flex;
  padding: 12px;
  max-width: 160px;
  transition: 0.3s width;
  width: ${(props) => (props.isCollapsed ? "80px" : "120px")};
  background: var(--bg-color);
  box-shadow: 4px 4px 10px 1px var(--navbar-shadow-color);
  font-size: 16px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  & svg {
    font-size: 36px;
  }

  & a {
    all: unset;
    cursor: pointer;
    transition: color 0.1s;

    &:hover {
      color: #7171cb;
    }
  }

  & span {
    font-weight: 450;
  }
`;

export const LinkLabel = styled("span")<TProps>`
  display: ${(props) => props.isCollapsed && "none"};
  transition: 0.3s display;
`;
