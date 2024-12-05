import { cx } from "@emotion/css";
import { useHeadingStyles } from "@typography/Heading";
import { useExtractProps } from "@utils/hooks";
import { ReactNode } from "react";

export interface HeadingProps {
  /** The main content of the heading element */
  title: ReactNode;
  /** Secondary content */
  subtitle?: ReactNode;
  /** Level of the heading tag to use. Level 1 is reserved for the page title and is not available here. */
  depth?: 2 | 3 | 4 | 5 | 6;
  /**
   * Unique identifier for the root element. If not provided, one will be
   * generated with the prefix of `heading`.
   */
  id?: string;
  /** Class names to overrides styles for specific elements in the component */
  overrideClasses?: {
    root?: string;
    subtitle?: string;
    title?: string;
  };
}

/**
 * Heading component
 */
export const Heading = (_props: HeadingProps) => {
  const { overrideClasses, id, props } = useExtractProps<HeadingProps>(_props, {
    prefix: "heading",
  });
  const { title, subtitle, depth = 2 } = props satisfies HeadingProps;
  const classes = useHeadingStyles();
  const Tag = `h${depth}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      id={id}
      className={cx(`level-${depth}`, classes.root, overrideClasses?.root)}
    >
      <span className={cx(classes.title, overrideClasses?.title)}>
        {title ?? `Heading level ${depth}`}
      </span>
      {subtitle && (
        <small className={cx(classes.subtitle, overrideClasses?.subtitle)}>
          {subtitle}
        </small>
      )}
    </Tag>
  );
};
