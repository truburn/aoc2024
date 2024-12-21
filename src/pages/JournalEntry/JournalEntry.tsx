import DynamicDemo from "@entries/DynamicDemo";
import DynamicEntry from "@entries/DynamicEntry";
import { useJournalEntryClasses } from "@pages/JournalEntry";
import { useLoaderData, useParams } from "react-router";

export function JournalEntry() {
  const classes = useJournalEntryClasses();
  const title = useLoaderData();
  const params = useParams();

  return (
    <div className={classes.root}>
      <DynamicEntry title={title} day={params.day} />
      <DynamicDemo day={params.day} />
    </div>
  );
}
