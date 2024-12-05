import "@emotion/react";
import { ElTheme } from "@styles/types";

declare module "@emotion/react" {
  export interface Theme extends ElTheme {}
}
