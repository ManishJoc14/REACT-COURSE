import { useMemo, useState } from "react";
import { Memoized1, Memoized2 } from "./slowcomponensts";

export default function Problem({ child }) {
  const [topPosition, setTopPosition] = useState(300);

  const onScroll = (e) => {
    const calculatedTopPosition = 300 - e.target.scrollTop / 2;
    setTopPosition(calculatedTopPosition);
  };

  // const memoized1 = useMemo(() => <VerySlowComponent1 />, []);
  // const memoized2 = useMemo(() => <VerySlowComponent2 />, []);

  return (
    <div className="scrollable-block" onScroll={onScroll}>
      <div className="movable-block" style={{ top: topPosition }}>
        {topPosition}
        {/* NOTE - i mistakely used these here inside movable-block 
        so there was layout shift earlier */}
        {/* <Memoized1 />
        <Memoized2 /> */}
      </div>

      {/* NOTE - correct place */}
      <Memoized1 />
      <Memoized2 />
    </div>
  );
}
