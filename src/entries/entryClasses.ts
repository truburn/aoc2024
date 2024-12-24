import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { borderMixin, marginMixin, paddingMixin } from "@styles/mixins";

export function useEntryClasses() {
  const theme = useTheme();

  const demo = css({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
    gap: 8,
    height: "100%",
    background: "white",
    ...borderMixin(theme.border),
    ...paddingMixin(16),
    overflow: "hidden",
  });

  const actions = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    "& > div": {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      ...paddingMixin(4),
      ...borderMixin({
        color: theme.color.muted,
        width: { right: 1 },
      }),
      "&:last-child": {
        border: "none",
      },
    },
  });

  const button = css({
    ...borderMixin({ radius: 16 }),
    flex: 1,
    fontFamily: theme.font.monospace.family,
    lineHeight: 1,
    textTransform: "uppercase",
    ...paddingMixin({ top: 8, bottom: 4, horizontal: 16 }),
    cursor: "pointer",
    background: theme.color.muted,
    color: theme.color.secondary,
    transition: "ease all 0.5s",
    "&:hover": {
      background: theme.color.secondary,
      color: theme.color.bg,
    },
  });

  const actionTitle = css({
    ...marginMixin(),
    fontFamily: theme.font.monospace.family,
    fontSize: theme.font.monospace.size.regular,
    color: theme.color.secondary,
  });

  const actionResult = css({
    ...marginMixin(),
    fontFamily: theme.font.monospace.family,
    fontSize: theme.font.monospace.size.xlarge,
    color: theme.color.primary,
  });

  const output = css({
    flex: 1,
    ...marginMixin(8),
    ...paddingMixin(8),
    ...borderMixin({
      radius: 4,
    }),
    background: theme.color.fg,
    color: theme.color.bg,
    overflow: "auto",
  });

  const outputList = css({
    ...marginMixin(),
    ...paddingMixin(),
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "stretch",
    justifyContent: "flex-start",
    gap: 16,
    listStyle: "none",
  });

  const outputListItem = css({
    flex: 1,
    display: "flex",
    flexDirection: "row",
    gap: 16,
    ...paddingMixin(4),
    fontFamily: theme.font.monospace.family,
    minWidth: 150,
  });

  const reset = css({
    width: "100%",
    flex: "none",
  });

  return {
    demo,
    actions,
    button,
    actionTitle,
    actionResult,
    output,
    outputList,
    outputListItem,
    reset,
  };
}
