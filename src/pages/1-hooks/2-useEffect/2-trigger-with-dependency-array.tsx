import { useEffect, useState } from 'react';
import '../../../global.css';
import { logInfo } from '../../../utilities/log';
import Title from '../../../components/title';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export function TriggerWithDependencyArray() {
  const [todoId, setTodoId] = useState(1);
  const [todoDynamic, setTodoDynamic] = useState<Todo | null>();

  useEffect(() => {
    logInfo('2. TriggerWithDependencyArray:', 'useEffect Triggered');

    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((response) => response.json())
      .then((json) => setTodoDynamic(json))
      .catch(() => setTodoDynamic(null));
  }, [todoId]);

  function onChangeTodoId(type: 'increment' | 'decrement') {
    if (todoId === 1 && type === 'decrement') return;

    if (type === 'increment') {
      setTodoId((prev) => prev + 1);
    } else if (type === 'decrement') {
      setTodoId((prev) => prev - 1);
    }
  }

  return (
    <>
      <Title className="mb-4">2. TriggerWithDependencyArray</Title>

      <div className="flex flex-col items-center justify-center text-sm">
        <pre>{JSON.stringify(todoDynamic, null, 2)}</pre>

        <div className="flex gap-2 justify-center items-center">
          <button
            onClick={() => onChangeTodoId('decrement')}
            className="btn btn-sm"
          >
            -
          </button>
          <span>{todoId}</span>
          <button
            onClick={() => onChangeTodoId('increment')}
            className="btn btn-sm"
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
