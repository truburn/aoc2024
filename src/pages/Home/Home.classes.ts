import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { borderMixin, paddingMixin } from "@styles/mixins";

export function useHomeClasses() {
  const theme = useTheme();

  const root = css({
    "&&": {
      ...borderMixin(theme.border),
      ...paddingMixin(16),
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
