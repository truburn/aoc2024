import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { borderMixin, marginMixin, paddingMixin } from "@styles/mixins";

export function useNavigationClasses() {
  const theme = useTheme();

  const root = css({
    ...borderMixin({
      color: theme.color.primary,
      width: { right: 1 },
    }),
    background: theme.color.muted,
    maxWidth: 250,
    "& > p": {
      ...paddingMixin({ horizontal: 16 }),
      textAlign: "center",
    },
  });

  const nav = css({
    ...paddingMixin(8),
    ...marginMixin({ horizontal: 8 }),
    ...borderMixin({
      color: theme.color.secondary,
      width: { top: 1 },
    }),
  });
  return { root, nav };
}
