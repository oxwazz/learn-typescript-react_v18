import { useEffect, useRef, useState } from 'react';
import '../../../global.css';
import { logInfo } from '../../../utilities/log';
import Title from '../../../components/title';

function WithoutCleanUp() {
  useEffect(() => {
    setInterval(() => {
      // do something like update the state
      logInfo('5. CleanUp - WithoutCleanUp:', ' interval triggered');
    }, 1000);
  }, []);

  return <p>component is mounted</p>;
}

function WithCleanUp() {
  useEffect(() => {
    let intervalId = setInterval(() => {
      // do something like update the state
      logInfo('5. CleanUp - WithCleanUp:', 'interval triggered');
    }, 1000);

    // cleanup the timer when component unmount
    return () => {
      clearInterval(intervalId);
      logInfo('5. CleanUp - WithCleanUp:', ' clean up function triggered');
    };
  }, []);

  return <p>component is mounted</p>;
}

export function CleanUp() {
  const [show, setShow] = useState({
    withCleanUp: false,
    withoutCleanUp: false
  });

  const handleToggleShow = (type: 'withCleanUp' | 'withoutCleanUp') => {
    setShow((old) => ({
      ...old,
      [type]: !old[type]
    }));
  };

  return (
    <>
      <Title className="mb-4">5. CleanUp</Title>

      <div className="flex gap-6">
        <div className="flex flex-col items-center justify-center text-sm">
          <p className="mb-2 font-medium text-base underline">With Clean Up</p>
          {show.withCleanUp ? <WithCleanUp /> : 'component is unmounted'}
          <p className="text-slate-400">(WithCleanUp: look console log)</p>
          <button
            onClick={() => handleToggleShow('withCleanUp')}
            className="btn btn-sm mt-4"
          >
            mount/unmount
          </button>
        </div>

        <div className="flex flex-col items-center justify-center text-sm">
          <p className="mb-2 font-medium text-base underline">
            Without Clean Up
          </p>
          {show.withoutCleanUp ? <WithoutCleanUp /> : 'component is unmounted'}
          <p className="text-slate-400">(WithoutCleanUp: look console log)</p>
          <button
            onClick={() => handleToggleShow('withoutCleanUp')}
            className="btn btn-sm mt-4"
          >
            mount/unmount
          </button>
        </div>
      </div>
    </>
  );
}
