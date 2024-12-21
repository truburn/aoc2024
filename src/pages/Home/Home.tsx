import Calendar from "@components/Calendar";
import Link from "@components/Link";
import NoteCard from "@components/NoteCard";
import { useHomeClasses } from "@pages/Home";

export function Home() {
  const classes = useHomeClasses();

  return (
    <div className={classes.root}>
      <NoteCard
        title="The Chief Historian is Missing!"
        subtitle="Advent of Code 2024"
      >
        <p>
          The Chief Historian for the North Pole has gone missing and he needs
          to be found before the big Sleigh Ride.
        </p>
        <p>
          There are 25 days left until the big day, and each day I find a new
          clue that needs to be solved.
        </p>
        <p>Follow along on my journey to find him and get him back in time!</p>
        <p>For each clue I solve, a journal entry will be available.</p>
        <p>
          If you are interested in learning more or giving it a try, visit{" "}
          <Link to="https://adventofcode.com/" external>
            Advent of Code
          </Link>
          .
        </p>
      </NoteCard>
      <div className={classes.calendar}>
        <Calendar />
      </div>
    </div>
  );
}
