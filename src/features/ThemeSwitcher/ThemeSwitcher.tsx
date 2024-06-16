import React from "react";
/* eslint-disable import/no-extraneous-dependencies */
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { ThemeWrapper } from "./ThemeSwitcher.styled";
import { Theme, useTheme } from "../../shared";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <ThemeWrapper theme={theme} onClick={toggleTheme}>
      <Tooltip title={"Поменять тему"}>
        {theme === Theme.LIGHT ? (
          <SunOutlined />
        ) : (
          <MoonOutlined color={"#000"} />
        )}
      </Tooltip>
    </ThemeWrapper>
  );
};
