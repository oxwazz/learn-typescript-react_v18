import { useEffect, useRef, useState } from 'react';
import '../../../global.css';
import { logInfo } from '../../../utilities/log';
import Title from '../../../components/title';

function WithoutCleanUp() {
  useEffect(() => {
    logInfo('5. CleanUp:', 'WithoutCleanUp useEffect Triggered');
    setInterval(() => {
      // do something like update the state
      logInfo('5. CleanUp:', 'WithoutCleanUp interval triggered');
    }, 1000);
  }, []);

  return <p>useEffect Without Clean Up</p>;
}

function WithCleanUp() {
  useEffect(() => {
    logInfo('5. CleanUp:', 'WithCleanUp useEffect Triggered');
    let intervalId = setInterval(() => {
      // do something like update the state
      logInfo('5. CleanUp:', 'WithCleanUp interval triggered');
    }, 1000);

    // cleanup the timer when component unmount
    return () => clearInterval(intervalId);
  }, []);

  return <p>useEffect With Clean Up</p>;
}

export function CleanUp() {
  const [show, setShow] = useState({
    withCleanUp: false,
    withoutCleanUp: false
  });

  return (
    <>
      <Title className="mb-4">5. CleanUp</Title>
      <div className="flex gap-6">
        <div className="flex flex-col items-center justify-center text-sm">
          {show.withCleanUp ? <WithCleanUp /> : 'hide'}
          <p className="text-slate-400">(WithCleanUp: look console log)</p>
          <button
            onClick={() =>
              setShow((old) => ({
                ...old,
                withCleanUp: !old.withCleanUp
              }))
            }
            className="btn btn-sm mt-4"
          >
            show/hide WithCleanUp
          </button>
        </div>
        <div className="flex flex-col items-center justify-center text-sm">
          {show.withoutCleanUp ? <WithoutCleanUp /> : 'hide'}
          <p className="text-slate-400">(WithoutCleanUp: look console log)</p>
          <button
            onClick={() =>
              setShow((old) => ({
                ...old,
                withoutCleanUp: !old.withoutCleanUp
              }))
            }
            className="btn btn-sm mt-4"
          >
            show/hide WithoutCleanUp
          </button>
        </div>
      </div>
    </>
  );
}
