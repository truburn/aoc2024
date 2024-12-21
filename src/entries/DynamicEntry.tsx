import NoteCard from "@components/NoteCard";

// The demo components for each day
import Entry1 from "@entries/day1/Entry";
import Entry2 from "@entries/day2/Entry";
import Entry3 from "@entries/day3/Entry";
import Entry4 from "@entries/day4/Entry";
import Entry5 from "@entries/day5/Entry";
import Entry6 from "@entries/day6/Entry";
import Entry7 from "@entries/day7/Entry";
import Entry8 from "@entries/day8/Entry";
import Entry9 from "@entries/day9/Entry";
import Entry10 from "@entries/day10/Entry";
import Entry11 from "@entries/day11/Entry";
import Entry12 from "@entries/day12/Entry";
import Entry13 from "@entries/day13/Entry";
import Entry14 from "@entries/day14/Entry";
import Entry15 from "@entries/day15/Entry";
import Entry16 from "@entries/day16/Entry";
import Entry17 from "@entries/day17/Entry";
import Entry18 from "@entries/day18/Entry";
import Entry19 from "@entries/day19/Entry";
import Entry20 from "@entries/day20/Entry";
import Entry21 from "@entries/day21/Entry";
import Entry22 from "@entries/day22/Entry";
import Entry23 from "@entries/day23/Entry";
import Entry24 from "@entries/day24/Entry";
import Entry25 from "@entries/day25/Entry";

const mapping: any = {
  day1: Entry1,
  day2: Entry2,
  day3: Entry3,
  day4: Entry4,
  day5: Entry5,
  day6: Entry6,
  day7: Entry7,
  day8: Entry8,
  day9: Entry9,
  day10: Entry10,
  day11: Entry11,
  day12: Entry12,
  day13: Entry13,
  day14: Entry14,
  day15: Entry15,
  day16: Entry16,
  day17: Entry17,
  day18: Entry18,
  day19: Entry19,
  day20: Entry20,
  day21: Entry21,
  day22: Entry22,
  day23: Entry23,
  day24: Entry24,
  day25: Entry25
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
