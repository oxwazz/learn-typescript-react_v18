/**
 * Reference:
 * - https://react.dev/reference/react/useEffect
 * */

import '../../../global.css';
import { RunOnlyOnce } from './1-run-only-once';
import { TriggerWithDependencyArray } from './2-trigger-with-dependency-array';
import { WithoutDependencyArray } from './3-without-dependency-array';
import { ReferenceValue } from './4-reference-value';
import { CleanUp } from './5-clean-up';

export default function HooksUseState() {
  return (
    <div className="flex flex-col justify-center items-center p-4 w-full">
      <RunOnlyOnce />
      <hr className="my-10 w-full bg-red-500" />
      <TriggerWithDependencyArray />
      <hr className="my-10 w-full bg-red-500" />
      <WithoutDependencyArray />
      <hr className="my-10 w-full bg-red-500" />
      <ReferenceValue />
      <hr className="my-10 w-full bg-red-500" />
      <CleanUp />
      <hr className="my-10 w-full bg-red-500" />
    </div>
  );
}
