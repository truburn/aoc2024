import { Global, css, useTheme } from "@emotion/react";

export default function GlobalStyles() {
  const theme = useTheme();
  return (
    <Global
      styles={css({
        "html, body": {
          margin: 0,
          padding: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          fontFamily: theme.font.standard.family,
          fontSize: theme.font.standard.size.regular,
          background: theme.color.bg,
          color: theme.color.fg,
        },
        "#app-root": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
      })}
    />
  );
}
