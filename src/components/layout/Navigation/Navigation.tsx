import Header from "@layout/Header";
import { useNavigationClasses } from "@layout/Navigation";
import Link from "@components/Link";
import Calendar from "@components/Calendar";

export function Navigation() {
  const classes = useNavigationClasses();

  return (
    <div className={classes.root}>
      <Header />
      <nav className={classes.nav}>
        <Calendar />
      </nav>
      <p>
        Wanna join in on the fun? Visit{" "}
        <Link to="https://adventofcode.com/" external>
          Advent of Code
        </Link>{" "}
        to get started!
      </p>
    </div>
  );
}
