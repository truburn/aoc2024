import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { marginMixin, paddingMixin } from "@styles/mixins";

export function useFooterClasses() {
  const theme = useTheme();

  const root = css({
    ...paddingMixin({ vertical: 8, horizontal: 24 }),
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    background: theme.color.fg,
    color: theme.color.bg,
    fontSize: theme.font.standard.size.medium,
    lineHeight: 1,
    "& > div": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "1ch",
    },
  });

  const link = css({
    color: theme.color.muted,
    "& svg": {
      fontSize: theme.font.standard.size.large,
      ...marginMixin(4),
    },
    "&:hover": {
      color: theme.color.bg,
    },
  });

  return { root, link };
}
