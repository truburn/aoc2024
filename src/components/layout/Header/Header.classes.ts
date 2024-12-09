import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { marginMixin, paddingMixin } from "@styles/mixins";

export function useHeaderClasses() {
  const theme = useTheme();

  const root = css({
    ...paddingMixin(16),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    "& p": {
      textAlign: "center",
      ...marginMixin(),
    },
  });

  const title = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    fontFamily: theme.font.monospace.family,
    lineHeight: 1,
    fontSize: theme.font.monospace.size.xlarge + 4,
    fontVariationSettings: `"wght" ${theme.font.monospace.weight.semibold}`,
    ...marginMixin({ bottom: 8 }),
    color: theme.color.primary,
    "& > small": {
      fontSize: theme.font.monospace.size.large,
      fontVariationSettings: `"wght" ${theme.font.monospace.weight.normal}`,
      color: theme.color.secondary,
    },
  });

  const intro = css({
    textAlign: "center",
    fontSize: theme.font.standard.size.large,
    fontVariationSettings: `"wght" ${theme.font.standard.weight.light}`,
    color: theme.color.accent,
  });

  return { root, title, intro };
}
