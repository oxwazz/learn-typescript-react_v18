import { useEffect, useMemo, useRef, useState } from 'react';
import Title from '../../../components/title';

export default function ReferencingAValue() {
  const intervalId = useRef(0);
  const renderCount = useRef(0);

  const startStopwatch = () => {
    renderCount.current++;
    if (intervalId.current !== 0) return;
    intervalId.current = setInterval(() => {
      console.log(new Date().getTime());
    }, 500);
  };

  useEffect(() => {
    startStopwatch();
  }, []);

  const stopInterval = () => {
    clearInterval(intervalId.current);
    intervalId.current = 0;
  };

  return (
    <>
      <Title className="mb-4">Referencing a Value</Title>

      <div className="flex gap-6">
        <div className="flex flex-col items-center justify-center text-sm">
          <p>re-render count: {renderCount.current}</p>
          <p>(look console.log)</p>
        </div>
      </div>

      <div className="mt-4 flex gap-2 flex-col">
        <button onClick={() => stopInterval()} className="btn btn-sm">
          stop interval
        </button>
        <button onClick={() => startStopwatch()} className="btn btn-sm">
          start interval
        </button>
      </div>
    </>
  );
}
