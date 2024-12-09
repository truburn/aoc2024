import { useHeaderClasses } from "@layout/Header";

export function Header() {
  const classes = useHeaderClasses();

  return (
    <header className={classes.root}>
      <h1 className={classes.title}>
        <small>Advent of Code</small>
        {`<2024/>`}
      </h1>
      <p className={classes.intro}>
        The Chief Historian for the North Pole is missing!
      </p>
      <p>
        Follow my journey to find him and get him back in time for the big
        Christmas sleigh launch.
      </p>
    </header>
  );
}
