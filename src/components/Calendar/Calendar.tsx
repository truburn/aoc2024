import { useCalendarClasses } from "@components/Calendar";
import entries from "@entries/entryTitles.json";
import { useMemo } from "react";
import { cx } from "@emotion/css";
import Link from "@components/Link";
import { useParams } from "react-router";

const entryTitles: Record<string, string> = entries;

export function Calendar() {
  const classes = useCalendarClasses();
  const params = useParams();

  const existingEntries = useMemo<Array<[number, boolean]>>(() => {
    return new Array(25).fill(0).map((_, idx) => {
      const day = idx + 1;

      return [day, Boolean(entryTitles[`day${day}`])];
    });
  }, []);

  return (
    <>
      <h2 className={classes.title}>Daily Entries</h2>
      <ul className={classes.calendar}>
        {existingEntries.map(([day, hasEntry]) => (
          <li key={day}>
            <Link
              to={`/entry/${day}`}
              className={cx(classes.day, {
                [classes.disabledDay]: !hasEntry,
                [classes.activeDay]: params.day === day.toString()
              })}
            >
              {day}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
