import { memo } from "react";

function wait(ms) {
  let start = Date.now();
  let end = start + ms;

  while (Date.now() - end < 0) {
    // wait
  }
}

function VerySlowComponent1() {
  wait(200);
  return <div className="slowComponents">Slow component1</div>;
}
function VerySlowComponent2() {
  wait(200);
  return <div className="slowComponents">Slow component2</div>;
}

const Memoized1 = memo(VerySlowComponent1);
const Memoized2 = memo(VerySlowComponent2);

export { Memoized1, Memoized2 };
