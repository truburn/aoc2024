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
    alignItems: "stretch",
    justifyContent: "stretch",
    overflow: "hidden",
    "& > div": {
      flex: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "stretch",
      justifyContent: "space-between",
      overflow: "hidden",
    },
  });

  return { root, content };
}
