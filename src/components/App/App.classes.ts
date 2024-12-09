import { css } from "@emotion/css";

export function useAppClasses() {
  const root = css({
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    overflow: "hidden",
  });

  const content = css({
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "auto",
  });

  return { root, content };
}
