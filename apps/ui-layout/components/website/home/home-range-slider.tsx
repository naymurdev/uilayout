'use client';
import React, { useState } from 'react';
import { DualRangeSlider } from '@/components/core/slider';

export default function HomeRangeSlider() {
  const [celPer, setCelPer] = useState(70);
  const [values, setValues] = useState([0, 100]);
  return (
    <>
      <div className='2xl:py-16 py-14 flex justify-center px-10 '>
        <DualRangeSlider
          label={() => <>℃</>}
          value={values}
          onValueChange={setValues}
          min={0}
          max={100}
          step={1}
        />
      </div>
    </>
  );
}
