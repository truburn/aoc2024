import { useEntryClasses } from "@entries/entryClasses";

// The demo components for each day
import Demo1 from "@entries/day1/Demo";
import Demo2 from "@entries/day2/Demo";
import Demo3 from "@entries/day3/Demo";
import Demo4 from "@entries/day4/Demo";
import Demo5 from "@entries/day5/Demo";
import Demo6 from "@entries/day6/Demo";
import Demo7 from "@entries/day7/Demo";
import Demo8 from "@entries/day8/Demo";
import Demo9 from "@entries/day9/Demo";
import Demo10 from "@entries/day10/Demo";
import Demo11 from "@entries/day11/Demo";
import Demo12 from "@entries/day12/Demo";
import Demo13 from "@entries/day13/Demo";
import Demo14 from "@entries/day14/Demo";
import Demo15 from "@entries/day15/Demo";
import Demo16 from "@entries/day16/Demo";
import Demo17 from "@entries/day17/Demo";
import Demo18 from "@entries/day18/Demo";
import Demo19 from "@entries/day19/Demo";
import Demo20 from "@entries/day20/Demo";
import Demo21 from "@entries/day21/Demo";
import Demo22 from "@entries/day22/Demo";
import Demo23 from "@entries/day23/Demo";
import Demo24 from "@entries/day24/Demo";
import Demo25 from "@entries/day25/Demo";

const mapping: any = {
  day1: Demo1,
  day2: Demo2,
  day3: Demo3,
  day4: Demo4,
  day5: Demo5,
  day6: Demo6,
  day7: Demo7,
  day8: Demo8,
  day9: Demo9,
  day10: Demo10,
  day11: Demo11,
  day12: Demo12,
  day13: Demo13,
  day14: Demo14,
  day15: Demo15,
  day16: Demo16,
  day17: Demo17,
  day18: Demo18,
  day19: Demo19,
  day20: Demo20,
  day21: Demo21,
  day22: Demo22,
  day23: Demo23,
  day24: Demo24,
  day25: Demo25
};

interface DynamicDemoProps {
  day?: string;
}

export default function DynamicDemo(props: DynamicDemoProps) {
  const classes = useEntryClasses();
  const Component = mapping[`day${props.day}`];

  return (
    <div className={classes.demo}>
      {props.day ? <Component /> : <p>Demo not found.</p>}
    </div>
  );
}
