/**
 * Reference:
 * - https://react.dev/reference/react/useEffect
 * */

import '../../../global.css';
import SimpleExample from "./1-avoid-expensive-recalculation";

export default function UseMemo() {
    return (
        <div className="flex flex-col justify-center items-center p-4 w-full">
            <SimpleExample/>
            <hr className="my-10 w-full bg-red-500" />
        </div>
    );
}
