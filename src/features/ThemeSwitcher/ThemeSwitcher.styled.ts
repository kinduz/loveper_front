import styled from "styled-components";

type Props = {
  theme: "light" | "dark";
};

export const ThemeWrapper = styled.div<Props>`
  padding: 8px;
  width: fit-content;
  cursor: pointer;
  border-radius: 12px;
  display: flex;
  align-items: center;
  transition: 0.3s all;
  & svg {
    transition: 0.3s all;
    color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
    font-size: 42px !important;
  }
  &:hover {
    transform: rotate(45deg);
  }
`;
