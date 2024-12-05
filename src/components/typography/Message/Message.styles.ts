import { css } from "@emotion/css";
import { useTheme } from "@emotion/react";
import { borderMixin } from "@styles/mixins";

export const useMessageStyles = () => {
  const theme = useTheme();

  const root = css({
    ...borderMixin(theme.border),
    padding: 16,
  });

  return { root };
};
