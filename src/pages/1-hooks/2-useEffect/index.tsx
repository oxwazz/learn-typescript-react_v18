import '../../../global.css';
import { RunOnlyOnce } from './1-run-only-once';
import { TriggerWithDependencyArray } from './2-trigger-with-dependency-array';
import { WithoutDependencyArray } from './3-without-dependency-array';

export default function HooksUseState() {
  return (
    <div className="flex flex-col justify-center items-center p-4 w-full">
      <RunOnlyOnce />
      <hr className="my-4 w-full bg-red-500" />
      <TriggerWithDependencyArray />
      <hr className="my-4 w-full bg-red-500" />
      <WithoutDependencyArray />
      <hr className="my-4 w-full bg-red-500" />
      {/*  reference*/}
      {/*  cleanup*/}
    </div>
  );
}
