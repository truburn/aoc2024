import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { borderMixin, paddingMixin } from "@styles/mixins";

export function useEntryClasses() {
  const theme = useTheme();

  const demo = css({
    flex: 1,
    height: "100%",
    background: "white",
    ...borderMixin(theme.border),
    ...paddingMixin(16),
  });

  return { demo };
}
