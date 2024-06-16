import React from "react";
import { Stack } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Stack direction="column" spacing={2} useFlexGap>
      <span>Oops...</span>
      <span>
        It seems you&apos;re here &apos;cause this page does not exist...
      </span>
    </Stack>
  );
};

export default NotFoundPage;
