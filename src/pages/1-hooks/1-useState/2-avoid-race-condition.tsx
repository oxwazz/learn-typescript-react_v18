import { useState } from 'react';
import Title from '../../../components/title';

export default function AvoidRaceCondition() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCountRaceCondition = (
    type: 'usePrevState' | 'notUsePrevState'
  ) => {
    if (type === 'usePrevState') {
      setCount1(0);
    } else if (type === 'notUsePrevState') {
      setCount2(0);
    }
    [...new Array(5)].forEach((_, idx) => {
      console.log(idx);
      setTimeout(() => {
        if (type === 'usePrevState') {
          setCount1((old) => old + idx);
        } else if (type === 'notUsePrevState') {
          setCount2(count2 + 1);
        }
      }, 100);
    });
  };

  return (
    <>
      <Title className="mb-4">2. AvoidRaceCondition</Title>

      <div className="flex gap-6">
        <div className="flex flex-col items-center justify-center text-sm">
          <p className="mb-2 font-medium text-base underline">
            With Previous State
          </p>
          <p>Total: {count1}</p>
          <p className="text-slate-400">(Total must be 10)</p>
          <button
            onClick={() => handleCountRaceCondition('usePrevState')}
            className="btn btn-sm mt-4"
          >
            count
          </button>
        </div>

        <div className="flex flex-col items-center justify-center text-sm">
          <p className="mb-2 font-medium text-base underline">
            Without Previous State
          </p>
          <p>Total: {count2}</p>
          <p className="text-slate-400">(Total must be 10)</p>
          <button
            onClick={() => handleCountRaceCondition('notUsePrevState')}
            className="btn btn-sm mt-4"
          >
            count
          </button>
        </div>
      </div>
    </>
  );
}
