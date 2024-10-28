'use client';
import React, { useState } from 'react';
import { DualRangeSlider } from '@/components/core/slider';

export default function index() {
  const [celPer, setCelPer] = useState(70);
  const [values, setValues] = useState([0, 100]);
  return (
    <>
      <div className=' w-3/5 mx-auto space-y-20 '>
        <DualRangeSlider
          label={() => <>$</>}
          lableContenPos={'left'}
          value={values}
          onValueChange={setValues}
          min={0}
          max={100}
          step={1}
        />

        <DualRangeSlider
          label={() => <>℃</>}
          value={[celPer]}
          labelPosition='bottom'
          onValueChange={([celPer]) => celPer != null && setCelPer(celPer)}
          min={0}
          max={100}
          step={1}
        />
      </div>
    </>
  );
}
