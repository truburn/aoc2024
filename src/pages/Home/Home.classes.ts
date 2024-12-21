import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";

export function useHomeClasses() {
  const theme = useTheme();

  const root = css({
    "&&": {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 64,
    },
  });

  const calendar = css({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    maxWidth: 500,
    "& a": {
      fontSize: theme.font.monospace.size.xlarge,
    },
  });

  return { root, calendar };
}
