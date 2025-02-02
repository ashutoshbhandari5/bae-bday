import { useEffect, useRef, useState } from 'react';

import Basic from './Basic';

import { getScreenSize } from './modules/helpers';

import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CelebrationPage from './Celebrate';

function App() {
  const [breakpoint, setBreakpoint] = useState(getScreenSize());
  const debounceTimeout = useRef(0);

  const handleResize = useRef(() => {
    clearTimeout(debounceTimeout.current);

    debounceTimeout.current = window.setTimeout(() => {
      setBreakpoint(getScreenSize());
    }, 250);
  });

  useEffect(() => {
    const { current } = handleResize;

    window.addEventListener('resize', current);

    return () => {
      window.removeEventListener('resize', current);
    };
  });

  return (
    <main role="main">
      <main role="main">
        <Basic breakpoint={breakpoint} />
      </main>
    </main>
  );
}

export default App;
