import { useEffect } from "react";
import { getSimilarityScore, getTotalDistance, useInputData } from "./solution";

export default function Demo() {
  const inputData = useInputData();

  useEffect(() => {
    const totalDistance = getTotalDistance(inputData);
    const similarityScore = getSimilarityScore(inputData);
    console.log({ inputData, totalDistance, similarityScore });
  }, [inputData]);

  return <div>The Demo for this day</div>;
}
