import { useMemo, useRef, useState } from 'react';
import Title from '../../../components/title';

function expensiveCalculation(a: number, b: number, callback: any) {
  let i = 0;
  while (i < 9999) i++;
  callback();
  return a + b;
}

export default function SimpleExample() {
  const [date, setDate] = useState(new Date().getTime());

  const count_1 = useRef(0);
  const count_2 = useRef(0);

  const expensiveCalculationResult_1 = expensiveCalculation(1, 2, () => {
    count_1.current++;
  });

  const expensiveCalculationResult_2 = useMemo(() => {
    return expensiveCalculation(1, 2, () => {
      count_2.current++;
    });
  }, []);

  return (
    <>
      <Title className="mb-4">1. Simple Example</Title>

      <div className="flex gap-6">
        <div className="flex flex-col items-center justify-center text-sm">
          <p className="mb-2 font-medium text-base underline">
            without useMemo
          </p>
          <p>Result Expensive Calculation: {expensiveCalculationResult_1}</p>
          <p>Recalculate count: {count_1.current}</p>
        </div>

        <div className="flex flex-col items-center justify-center text-sm">
          <p className="mb-2 font-medium text-base underline">with useMemo</p>
          <p>Result Expensive Calculation: {expensiveCalculationResult_2}</p>
          <p>Recalculate count: {count_2.current}</p>
        </div>
      </div>

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
