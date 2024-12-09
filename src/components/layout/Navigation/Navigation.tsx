import { useNavigationClasses } from "@layout/Navigation";

export function Navigation() {
  const classes = useNavigationClasses();

  return <div className={classes.root}>Navigation</div>;
}
