import NoteCard from "@components/NoteCard";
import Entry1 from "./day1/Entry";

const mapping: any = {
  day1: Entry1
};

interface DynamicEntryProps {
  day?: string;
  title: string;
}

export default function DynamicEntry(props: DynamicEntryProps) {
  if (!props.day) return <p>Entry not found.</p>;

  const Component = mapping[`day${props.day}`];
  return (
    <NoteCard title={props.title} subtitle={`Day ${props.day}`}>
      <Component />
    </NoteCard>
  );
}
