import { useEffect, useRef, useState } from 'react';
import '../../../global.css';
import { logInfo } from '../../../utilities/log';
import Title from '../../../components/title';

export function ReferenceValue() {
  const triggerCountPrimitiveData = useRef<number>(0);
  const triggerCountNonPrimitiveData = useRef<number>(0);
  const [primitiveData, setPrimitiveData] = useState<string | number | boolean>(
    'Tes'
  );
  const [nonPrimitiveData, setNonPrimitiveData] = useState<
    Array<any> | Record<any, any>
  >([]);

  useEffect(() => {
    logInfo('4. ReferenceValue:', 'useEffect Triggered primitiveData');
    triggerCountPrimitiveData.current++;
  }, [primitiveData]);

  useEffect(() => {
    logInfo('4. ReferenceValue:', 'useEffect Triggered nonPrimitiveData');
    triggerCountNonPrimitiveData.current++;
  }, [nonPrimitiveData]);

  return (
    <>
      <Title className="mb-4">4. ReferenceValue</Title>
      <div className="flex gap-6">
        <div className="flex flex-col items-center justify-center text-sm">
          <p className="mb-2 font-medium text-base underline">
            Primitive Data as a Reference Value
          </p>
          <p>trigger useEffect count: {triggerCountPrimitiveData.current}</p>
          <p className="text-slate-400">(look console log)</p>
          <button
            onClick={() => setPrimitiveData('Tes')}
            className="btn btn-sm mt-4"
          >
            setPrimitiveData with same value
          </button>
        </div>
        <div className="flex flex-col items-center justify-center text-sm">
          <p className="mb-2 font-medium text-base underline">
            Non Primitive Data as a Reference Value
          </p>
          <p>trigger useEffect count: {triggerCountNonPrimitiveData.current}</p>
          <p className="text-slate-400">(look console log)</p>
          <button
            onClick={() => setNonPrimitiveData([])}
            className="btn btn-sm mt-4"
          >
            setNonPrimitiveData with same value
          </button>
        </div>
      </div>
    </>
  );
}
