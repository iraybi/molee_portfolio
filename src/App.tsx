import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-8 p-8'>
      <div className='flex gap-8'>
        <a href='https://vite.dev' target='_blank'>
          <img
            src={viteLogo}
            className='h-24 hover:drop-shadow-[0_0_2em_#646cffaa]'
            alt='Vite logo'
          />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img
            src={reactLogo}
            className='h-24 animate-spin [animation-duration:20s] hover:drop-shadow-[0_0_2em_#61dafbaa]'
            alt='React logo'
          />
        </a>
      </div>
      <h1 className='text-5xl font-bold'>Vite + React</h1>
      <div className='flex flex-col items-center gap-4'>
        <button
          className='px-4 py-2 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 transition-colors cursor-pointer'
          onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='text-zinc-500'>
          Edit <code className='bg-zinc-800 px-2 py-1 rounded text-zinc-300'>src/App.tsx</code> and
          save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
