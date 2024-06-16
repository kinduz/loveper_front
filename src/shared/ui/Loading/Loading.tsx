import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { LoadingStyled } from "./Loading.styled";

export const Loading = () => {
  return (
    <LoadingStyled>
      <CircularProgress />
    </LoadingStyled>
  );
};
