import { useLinkClasses } from "@components/Link";
import { cx } from "@emotion/css";
import { PropsWithChildren } from "react";

export interface LinkProps {
  to: string;
  className?: string;
  external?: boolean;
  title?: string;
}

export function Link(props: PropsWithChildren<LinkProps>) {
  const { to = "#", className, external = false, title, children } = props;
  const classes = useLinkClasses();

  return (
    <a
      href={to}
      target={external ? "_blank" : "_self"}
      title={title}
      className={cx(classes.root, className)}
    >
      {children ?? to}
    </a>
  );
}
