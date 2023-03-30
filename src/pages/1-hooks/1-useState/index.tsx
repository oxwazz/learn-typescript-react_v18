import '../../../global.css';
import SimpleExample from './1-simple-example';
import AvoidRaceCondition from './2-avoid-race-condition';

export default function HooksUseState() {
  return (
    <div className="flex flex-col justify-center items-center p-4 w-full">
      <SimpleExample />
      <hr className="my-10 w-full bg-red-500" />
      <AvoidRaceCondition />
      <hr className="my-10 w-full bg-red-500" />
    </div>
  );
}
