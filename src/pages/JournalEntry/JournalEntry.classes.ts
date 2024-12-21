import { css } from "@emotion/css";
import { paddingMixin } from "@styles/mixins";

export function useJournalEntryClasses() {
  const root = css({
    ...paddingMixin(24),
    "&&": {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: 64,
    },
  });

  return { root };
}
