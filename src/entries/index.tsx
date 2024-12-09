import { ReactElement } from "react";
import day1 from "@entries/day1";

export interface EntryProps {
  entry: ReactElement;
  demo?: ReactElement;
}

export default {
  day1
} as Record<string, EntryProps>;
