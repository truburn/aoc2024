import { useNoteCardClasses } from "@components/NoteCard";
import { cx } from "@emotion/css";
import { PropsWithChildren } from "react";

export interface NoteCardProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

export function NoteCard(props: PropsWithChildren<NoteCardProps>) {
  const { title, subtitle, className, children } = props;
  const classes = useNoteCardClasses();

  return (
    <section className={cx(classes.root, className)}>
      {title && (
        <h2 className={classes.title}>
          {title}
          {subtitle && <small className={classes.subtitle}>{subtitle}</small>}
        </h2>
      )}
      <div className={classes.content}>{children}</div>
    </section>
  );
}
