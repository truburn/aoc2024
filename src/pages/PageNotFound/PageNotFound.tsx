import { usePageNotFoundClasses } from "@pages/PageNotFound";

export function PageNotFound() {
  const classes = usePageNotFoundClasses();

  return <div className={classes.root}>Page Not Found</div>;
}
