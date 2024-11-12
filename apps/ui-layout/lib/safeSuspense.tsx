'use client';
import React, { Suspense, SuspenseProps } from 'react';

import { useMounted } from '../hooks/useMouted';

export const SafeSuspense = (props: SuspenseProps) => {
  const mounted = useMounted();

  if (!mounted) return null;
  return <Suspense {...props} />;
};
