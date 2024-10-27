'use client';
import React, { useState } from 'react';
import Slider from '@/components/website/ui/slider';

export default function index() {
  const [widthPercentage, setWidthPercentage] = useState(70);
  const [heightPercentage, setHeightPercentage] = useState(70);

  return (
    <>
      <div className='grid grid-cols-2  px-10 gap-10'>
        <div>
          <h1>Width</h1>
          <Slider
            value={[widthPercentage]}
            onValueChange={([widthPercentage]) =>
              widthPercentage != null && setWidthPercentage(widthPercentage)
            }
            min={0}
            max={100}
            step={1}
          />
        </div>
        <div>
          <h1>Height</h1>
          <Slider
            value={[heightPercentage]}
            onValueChange={([heightPercentage]) =>
              heightPercentage != null && setHeightPercentage(heightPercentage)
            }
            tooltip={false}
            min={0}
            max={100}
            step={1}
          />
        </div>
      </div>
    </>
  );
}
