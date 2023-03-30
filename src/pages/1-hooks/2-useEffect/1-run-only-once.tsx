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

export function RunOnlyOnce() {
  const [todo, setTodo] = useState<Todo | null>();

  useEffect(() => {
    logInfo('1. RunOnlyOnce:', 'useEffect Triggered');

    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setTodo(json))
      .catch(() => setTodo(null));
  }, []);

  return (
    <>
      <Title className="mb-4">1. RunOnlyOnce</Title>

      <div className="flex flex-col items-center justify-center text-sm">
        <pre>{JSON.stringify(todo, null, 2)}</pre>
      </div>
    </>
  );
}
