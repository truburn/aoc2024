import { useEntryClasses } from "@entries/entryClasses";

// The demo components for each day
import Demo1 from "@entries/day1/Demo";

const mapping: any = {
  day1: Demo1
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
