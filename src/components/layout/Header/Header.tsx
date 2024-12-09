import { useHeaderClasses } from "@layout/Header";

export function Header() {
  const classes = useHeaderClasses();

  return <div className={classes.root}>Header Component</div>;
}
