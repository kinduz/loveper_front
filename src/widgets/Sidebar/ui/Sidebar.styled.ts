import styled from "styled-components";

export const SidebarStyled = styled("nav")`
  display: flex;
  padding: 12px;
  max-width: 160px;
  background: var(--bg-color);
  box-shadow: 4px 4px 10px 1px var(--navbar-shadow-color);
  font-size: 16px;
  flex-direction: column;
  justify-content: space-around;

  & svg {
    font-size: 48px;
  }

  & a {
    all: unset;
    cursor: pointer;
    transition: color 0.1s;

    &:hover {
      color: #7171cb;
    }
  }
`;
