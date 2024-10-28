'use client';
import React, { useState } from 'react';
import { DualRangeSlider } from '@/components/core/slider';

export default function index() {
  const [celPer, setCelPer] = useState(70);
  const [values, setValues] = useState([0, 100]);
  return (
    <>
      <div className=' w-3/5 mx-auto py-8'>
        <DualRangeSlider
          label={() => <>℃</>}
          value={[celPer]}
          labelPosition='static'
          onValueChange={([celPer]) => celPer != null && setCelPer(celPer)}
          min={0}
          max={100}
          step={1}
        />
      </div>
    </>
  );
}
