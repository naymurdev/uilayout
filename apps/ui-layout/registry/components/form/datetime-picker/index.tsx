'use client';

import { SmartDatetimeInput } from '@/components/core/dateTime-input';
import React, { useState } from 'react';

export default function index() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    console.log('Selected date:', date);
  };

  return (
    <div className='p-4 max-w-md mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Smart DateTime Input Example</h1>
      <SmartDatetimeInput
        value={selectedDate}
        onValueChange={handleDateChange}
        placeholder='Enter a date and time'
      />
      {selectedDate && (
        <p className='mt-4'>Selected Date: {selectedDate.toLocaleString()}</p>
      )}
    </div>
  );
}
