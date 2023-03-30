import { useEffect, useRef, useState } from 'react';
import '../../../global.css';
import { logInfo } from '../../../utilities/log';
import Title from '../../../components/title';

export function WithoutDependencyArray() {
  const triggerCount = useRef<number>(0);
  const [_, setTrigger] = useState(new Date());

  useEffect(() => {
    logInfo('3. WithoutDependencyArray:', 'useEffect Triggered');
    triggerCount.current++;
  });

  return (
    <>
      <Title className="mb-4">3. WithoutDependencyArray</Title>
      <div className="flex flex-col items-center justify-center text-sm">
        <p>trigger useEffect count: {triggerCount.current}</p>
        <p className="text-slate-400">(look console log)</p>
        <button
          onClick={() => setTrigger(new Date())}
          className="btn btn-sm mt-4"
        >
          trigger useState
        </button>
      </div>
    </>
  );
}
