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
  });

  const nav = css({
    ...paddingMixin({ vertical: 24, horizontal: 16 }),
  });

  const title = css({
    fontFamily: theme.font.header.family,
    fontWeight: theme.font.header.weight.normal,
    fontSize: theme.font.header.size.xlarge,
    ...marginMixin({ top: 24, bottom: 8 }),
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
    width: 225,
    "& li": {
      ...marginMixin(),
      ...paddingMixin(),
      display: "flex",
      alignItems: "stretch",
      justifyContent: "stretch",
      aspectRatio: 1,
      width: 40,
    },
  });

  const day = css({
    width: "100%",
    ...borderMixin(theme.border),
    background: theme.color.primary,
    color: theme.color.fg,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: theme.font.monospace.family,
    fontWeight: theme.font.monospace.weight.bold,
    fontSize: theme.font.monospace.size.large,
  });

  const disabledDay = css({
    opacity: 0.25,
    pointerEvents: "none",
    cursor: "not-allowed",
  });

  const activeDay = css({
    background: theme.color.secondary,
  });

  return { root, nav, title, calendar, day, disabledDay, activeDay };
}
