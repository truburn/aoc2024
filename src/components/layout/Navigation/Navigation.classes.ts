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

  const title = css({
    fontFamily: theme.font.header.family,
    fontSize: theme.font.header.size.xlarge,
    ...marginMixin({ bottom: 8 }),
    color: theme.color.secondary,
  });

  const calendar = css({
    ...marginMixin(),
    ...paddingMixin(),
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: "space-evenly",
    gap: 4,
    "& li": {
      ...marginMixin(),
      ...paddingMixin(),
      display: "flex",
      alignItems: "stretch",
      justifyContent: "stretch",
      aspectRatio: 1,
      width: "calc(20% - 4px)",
    },
  });

  const day = css({
    width: "100%",
    ...borderMixin(theme.border),
    background: theme.color.tertiary,
    color: theme.color.muted,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: theme.font.monospace.family,
    fontSize: theme.font.monospace.size.large,
    fontVariationSettings: `"wght" ${theme.font.monospace.weight.semibold}`,
    lineHeight: 1,
    ...paddingMixin({ top: 2 }),
    "&:hover": {
      background: theme.color.secondary,
      color: theme.color.muted,
    },
  });

  const disabledDay = css({
    opacity: 0.5,
    pointerEvents: "none",
    cursor: "not-allowed",
  });

  const activeDay = css({
    background: theme.color.primary,
    color: theme.color.bg,
  });

  return { root, nav, title, calendar, day, disabledDay, activeDay };
}
