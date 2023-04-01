import {useCallback, useEffect, useRef, useState} from 'react';
import Title from '../../../components/title';

function SomeComponent({callback}: { callback: Function }) {
  const count = useRef(0)

  useEffect(() => {
    count.current++
  },[callback])

  return <>
    <p>SomeComponent Mounted</p>
    <p>re-render count: {count.current}</p>
  </>
}

export default function SimpleExample() {
  const [date, setDate] = useState(new Date().getTime());
  const fn_add_1 = (a: number, b: number) => {
    console.log(111111, "Sdf")
    return a + b
  }
  const fn_add_2 = useCallback((a: number, b: number) => {
    console.log(111111, "Sdf333")
    return a + b
  }, []);

  return (
    <>
      <Title className="mb-4">1. Simple Example</Title>

      <div className="flex gap-6">
        <div className="flex flex-col items-center justify-center text-sm">
          <p className="mb-2 font-medium text-base underline">
            Passing function without useCallback
          </p>
         <SomeComponent callback={fn_add_1}/>
        </div>

        <div className="flex flex-col items-center justify-center text-sm">
          <p className="mb-2 font-medium text-base underline">
            Passing function with useCallback
          </p>
          <SomeComponent callback={fn_add_2}/>
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm">Date: {date}</p>
        <button
            onClick={() => setDate(new Date().getTime())}
            className="btn btn-sm mt-2"
        >trigger render</button>
      </div>

    </>
  );
}
