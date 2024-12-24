import { cx } from "@emotion/css";
import {
  getSimilarityScore,
  getTotalDistance,
  useInputData
} from "@entries/day1/solution";
import { useEntryClasses } from "@entries/entryClasses";
import { useState } from "react";

export default function Demo() {
  const classes = useEntryClasses();
  const inputData = useInputData();
  const [lines, setLines] = useState<Array<number[]>>(inputData.display);
  const [totalDistance, setTotalDistance] = useState<number>(0);
  const [similarityScore, setSimilarityScore] = useState<number>(0);

  const handleGetTotalDistance = () => {
    const distance = getTotalDistance(inputData);
    setTotalDistance(distance.total);
    setLines(distance.display);
  };

  const handleGetSimilarityScore = () => {
    const score = getSimilarityScore(inputData);
    setSimilarityScore(score.total);
    setLines(score.display);
  };

  const handleReset = () => {
    setTotalDistance(0);
    setSimilarityScore(0);
    setLines(inputData.display);
  };

  return (
    <>
      <div className={classes.actions}>
        <div>
          <p className={classes.actionTitle}>Total Distance</p>
          <p className={classes.actionResult}>{totalDistance}</p>
          <button className={classes.button} onClick={handleGetTotalDistance}>
            Calculate
          </button>
        </div>
        <div>
          <p className={classes.actionTitle}>Similarity Score</p>
          <p className={classes.actionResult}>{similarityScore}</p>
          <button className={classes.button} onClick={handleGetSimilarityScore}>
            Calculate
          </button>
        </div>
      </div>
      <div className={classes.output}>
        <ul className={classes.outputList}>
          {lines.map((line, idx) => (
            <li key={idx} className={classes.outputListItem}>
              {line.map((val, vIdx) => (
                <span key={vIdx}>{val}</span>
              ))}
            </li>
          ))}
        </ul>
      </div>
      <button
        className={cx(classes.button, classes.reset)}
        onClick={handleReset}
      >
        Reset
      </button>
    </>
  );
}
