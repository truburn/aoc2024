import DynamicDemo from "@entries/DynamicDemo";
import DynamicEntry from "@entries/DynamicEntry";
import { useJournalEntryClasses } from "@pages/JournalEntry";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";

export function JournalEntry() {
  const classes = useJournalEntryClasses();
  const title = useLoaderData();
  const params = useParams();

  useEffect(() => {
    console.log({ title, params });
  }, [title, params]);

  return (
    <div className={classes.root}>
      <DynamicEntry title={title} day={params.day} />
      <DynamicDemo day={params.day} />
    </div>
  );
}
