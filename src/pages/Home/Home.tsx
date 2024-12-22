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
          The Chief Historian for the North Pole has been missing for months and
          he needs to be found before the big Sleigh Ride. He decided to check
          out some locations that have historically significance to the North
          Pole, but didn't tell anyone where he was going.
        </p>
        <p>
          There are 25 days left until the big day, so the Senior Historians
          have asked me to help them find him. There are 50 possible locations
          to check. This is going to be interesting.
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
