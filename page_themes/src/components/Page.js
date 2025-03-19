import React, { useContext } from 'react';
import Header from './Header';
import { ThemeContext } from '../ThemeContext';

const Page = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="app" className={theme}>
      <Header />
      <article>
        <h2>React Course</h2>
        <p>A course that teaches you React.</p>
      </article>
    </div>
  );
};

export default Page;