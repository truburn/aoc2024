import { useFooterClasses } from "@layout/Footer";

export function Footer() {
  const classes = useFooterClasses();

  return <div className={classes.root}>Footer Component</div>;
}
