import { useJournalEntryClasses } from "@pages/JournalEntry";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";

export function JournalEntry() {
  const classes = useJournalEntryClasses();
  const data = useLoaderData();
  const params = useParams();

  useEffect(() => {
    console.log({ data, params });
  }, [data, params]);

  return <div className={classes.root}>Journal Entry</div>;
}
