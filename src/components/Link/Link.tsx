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
  const classes = useLinkClasses();

  return (
    <a
      href={props.to}
      target={props.external ? "_blank" : "_self"}
      title={props.title}
      className={cx(classes.root, props.className)}
    >
      {props.children}
    </a>
  );
}
