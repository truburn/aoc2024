import { useHomeClasses } from "@pages/Home";

export function Home() {
  const classes = useHomeClasses();

  return <div className={classes.root}>Home Page</div>;
}
