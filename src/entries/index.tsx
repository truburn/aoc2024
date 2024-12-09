import { ReactElement } from "react";
import day1 from "./day1/index";

export interface EntryProps {
  entry: ReactElement;
  demo?: ReactElement;
}

export default {
  day1
} as Record<string, EntryProps>;
