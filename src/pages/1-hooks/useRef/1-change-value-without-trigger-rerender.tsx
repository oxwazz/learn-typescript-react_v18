import { useEffect, useMemo, useRef, useState } from 'react';
import Title from '../../../components/title';

export default function C() {
  const count = useRef(0);
  const [date, setDate] = useState(new Date().getTime());

  return (
    <>
      <Title className="mb-4">Change Value Without Trigger Re-Render</Title>

      <div className="flex gap-6">
        <div className="flex flex-col items-center justify-center text-sm">
          {/*<p>Result Expensive Calculation: {expensiveCalculationResult_1}</p>*/}
          <p>Count: {count.current}</p>
        </div>
      </div>
      <button className="btn btn-sm mt-2" onClick={() => count.current++}>
        count + 1
      </button>

      <div className="mt-4">
        <p className="text-sm">Date: {date}</p>
        <button
          onClick={() => setDate(new Date().getTime())}
          className="btn btn-sm mt-2"
        >
          trigger re-render
        </button>
      </div>
    </>
  );
}
