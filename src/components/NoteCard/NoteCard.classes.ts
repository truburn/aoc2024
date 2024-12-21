import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { borderMixin, marginMixin, paddingMixin } from "@styles/mixins";

export function useNoteCardClasses() {
  const theme = useTheme();
  const lineSpacing = 19;

  const randomRotation =
    Math.random() * 3 * (Math.round(Math.random()) === 1 ? 1 : -1);

  const root = css({
    height: "90%",
    maxWidth: 500,
    transform: `rotate(${randomRotation}deg)`,
    background: `repeating-linear-gradient(to bottom, lightblue, lightblue 1px, ${
      theme.color.card
    } 1px, ${theme.color.card} ${lineSpacing + 1}px)`,
    boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.25)",
    ...borderMixin({
      color: theme.color.cardBorder,
      width: 1,
    }),
  });

  const title = css({
    ...marginMixin(),
    ...paddingMixin({ vertical: 4, horizontal: 16 }),
    lineHeight: 1,
    height: (lineSpacing + 1) * 4 + 1,
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "flex-start",
    justifyContent: "center",
    fontFamily: theme.font.header.family,
    fontWeight: theme.font.header.weight.normal,
    fontSize: theme.font.header.size.xlarge - 4,
    color: theme.color.primary,
    background: theme.color.card,
    gap: 6,
    boxSizing: "border-box",
    ...borderMixin({
      color: "red",
      width: { bottom: 1 },
    }),
  });

  const subtitle = css({
    fontFamily: theme.font.monospace.family,
    fontSize: theme.font.monospace.size.medium,
    color: theme.color.secondary,
    ...marginMixin({ left: -8 }),
  });

  const content = css({
    ...marginMixin({ horizontal: 16, top: lineSpacing + lineSpacing / 3 }),
    lineHeight: 1.25,
    "& > p": {
      ...marginMixin({ bottom: lineSpacing + 1 }),
    },
  });

  return { root, title, subtitle, content };
}
