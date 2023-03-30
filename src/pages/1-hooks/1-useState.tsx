import { useState } from 'react';

export default function HooksUseState() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Name: {name}</p>
      <input
        type="text"
        placeholder="input your name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />

      {count}
      <button
        onClick={() => {
          console.log(3333, 'v');
          setCount(0);
          [...new Array(5)].forEach((v, idx) => {
            console.log(3333, idx);
            setTimeout(() => {
              setCount((old) => old + idx);
              // setCount(count + idx);
            }, 1000);
          });
        }}
      >
        tess
      </button>
      {/*    take old value*/}
    </div>
  );
}
