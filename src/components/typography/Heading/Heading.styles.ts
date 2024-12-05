import { css } from "@emotion/css";
import { borderMixin, marginMixin, paddingMixin } from "@styles/mixins";
import { useTheme } from "@emotion/react";

export const useHeadingStyles = () => {
  const theme = useTheme();

  const subtitle = css({
    display: "block",
    fontSize: "0.875em",
    fontStyle: "italic",
    fontFamily: theme.font.standard.family,
    fontVariationSettings: `"wght" ${theme.font.standard.weight.normal}`,
  });

  const title = css({
    ...borderMixin({
      color: theme.border.color,
      width: { bottom: 1 },
    }),
    ...paddingMixin({ bottom: "0.25em" }),
  });

  const root = css({
    display: "flex",
    flexDirection: "column",
    gap: 4,
    lineHeight: 1,
    ...marginMixin({ top: "2em", bottom: "0.75em" }),
    fontFamily: theme.font.header.family,
    fontVariationSettings: `"wght" ${theme.font.header.weight.bold}`,
    "&.level-2": {
      ...borderMixin({
        color: theme.color.primary,
        width: { top: 2 },
      }),
      gap: 0,
      ...paddingMixin({ top: "0.5em" }),
      [`& .${title}`]: {
        ...borderMixin(),
        ...paddingMixin(),
      },
      [`& .${subtitle}`]: {
        fontVariant: "all-small-caps",
        fontStyle: "normal",
        fontFamily: theme.font.header.family,
        fontVariationSettings: `"wght" ${theme.font.header.weight.light}`,
        ...paddingMixin({ left: 2 }),
        ...borderMixin(),
      },
      "&:first-of-type": {
        ...marginMixin({ bottom: 16 }),
        ...paddingMixin(),
        ...borderMixin(),
      },
    },
    "&.level-3": {
      [`& .${subtitle}`]: {
        fontVariationSettings: `"wght" ${theme.font.standard.weight.light}`,
        fontSize: "0.75em",
      },
    },
    "&.level-4": {
      [`& .${subtitle}`]: {
        fontVariationSettings: `"wght" ${theme.font.standard.weight.light}`,
      },
    },
  });

  return { root, subtitle, title };
};
