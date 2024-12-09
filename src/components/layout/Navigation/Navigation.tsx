import Header from "@layout/Header";
import { useNavigationClasses } from "@layout/Navigation";
import entries from "@entries/index";
import { useMemo } from "react";
import Link from "@components/Link";
import { cx } from "@emotion/css";

export function Navigation() {
  const classes = useNavigationClasses();

  const existingEntries = useMemo<Array<[number, boolean]>>(() => {
    return new Array(25).fill(0).map((_, idx) => {
      const day = idx + 1;

      return [day, Boolean(entries[`day${day}`])];
    });
  }, []);

  return (
    <div className={classes.root}>
      <Header />
      <nav className={classes.nav}>
        <h2 className={classes.title}>Daily Entries</h2>
        <ul className={classes.calendar}>
          {existingEntries.map(([day, hasEntry]) => (
            <li key={day}>
              <Link
                to={`/entry/${day}`}
                className={cx(classes.day, {
                  [classes.disabledDay]: !hasEntry
                })}
              >
                {day}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
