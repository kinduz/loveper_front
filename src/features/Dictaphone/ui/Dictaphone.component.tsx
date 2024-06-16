import React from "react";
import { DictaphoneStyled } from "./Dictaphone.styled";
import { Typography } from "@mui/material";
import { useChangeTitle } from "../../../shared/lib/hooks/useChangeTitle";
import { Recorder } from "./Recorder";

export const DictaphoneComponent = () => {
  useChangeTitle("Диктофон");
  return (
    <DictaphoneStyled>
      <Typography variant={"h4"}>Диктофон</Typography>
      <Recorder />
    </DictaphoneStyled>
  );
};
