'use client';
import React from 'react';
import { Next13ProgressBar } from 'next13-progressbar';
import { useTheme } from 'next-themes';

const Progressbar = ({ children }: { children: React.ReactNode }) => {
  const { theme, setTheme } = useTheme();
  // console.log(theme)

  return (
    <>
      {children}
      <Next13ProgressBar
        height='2px'
        color={theme === 'light' ? '#202020' : '#d8d8d8'}
        options={{ showSpinner: false }}
        showOnShallow
      />
    </>
  );
};

export default Progressbar;
