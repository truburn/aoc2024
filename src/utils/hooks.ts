import { generateUUID } from "@utils/generate";
import { useMemo } from "react";

/**
 * Hook to extract the base props from a component
 */
export interface ExtractedProps<T = any, S = any> {
  props: Omit<T, "overrideClasses" | "id">;
  id?: string;
  overrideClasses?: any;
  styleProps?: S;
}

export const useExtractProps = <T = any, S = any>(
  _props: T &
    S & {
      overrideClasses?: any;
      id?: string;
    },
  options: {
    prefix?: string;
    suffix?: string;
    styles?: string[];
  } = {}
): ExtractedProps<T, S> => {
  const extracted = useMemo<ExtractedProps<T, S>>(() => {
    const { prefix, suffix, styles = [] } = options;
    const defaultID = generateUUID({ prefix, lengths: [8], suffix });
    const { id = defaultID, overrideClasses, ...rest } = _props ?? {};

    const props: any = {};
    const styleProps: any = {};

    Object.entries(rest).forEach(([key, val]) => {
      if (styles.includes(key)) {
        styleProps[key] = val;
      } else {
        props[key] = val;
      }
    });

    return { id, overrideClasses, props, styleProps };
  }, [_props, options]);

  return extracted;
};
