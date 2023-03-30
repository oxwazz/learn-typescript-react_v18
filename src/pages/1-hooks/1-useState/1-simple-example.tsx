import { useState } from 'react';
import Title from '../../../components/title';

export default function SimpleExample() {
  const [name, setName] = useState('');
  const [show, setShow] = useState(false);

  return (
    <>
      <Title className="mb-4">1. RunOnlyOnce</Title>

      <div className="flex flex-col items-center justify-center text-sm">
        <p>Name: {name}</p>
        <input
          placeholder="Enter your name"
          className="mt-4 input input-bordered input-sm w-full max-w-xs"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <p className="mt-4">Toggle: {JSON.stringify(show)}</p>
        <button
          onClick={() => setShow((old) => !old)}
          className="btn btn-sm mt-4"
        >
          Toggle
        </button>
      </div>
    </>
  );
}
