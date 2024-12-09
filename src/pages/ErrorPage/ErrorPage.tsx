import { useErrorPageClasses } from "@pages/ErrorPage";

export function ErrorPage() {
  const classes = useErrorPageClasses();

  return <div className={classes.root}>Error Page</div>;
}
