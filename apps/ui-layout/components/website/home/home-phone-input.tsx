'use client';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PhoneInput } from '@/components/core/phone-input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { z } from 'zod';

// Zod schema for phone validation
const FormSchema = z.object({
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .refine((value) => value && isValidPhoneNumber(value), {
      message: 'Invalid phone number',
    }),
});
type FormData = z.infer<typeof FormSchema>;

export default function HomePhoneInput() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: { phone: '' },
  });

  const onSubmit = (data: FormData) => {
    alert(`You submitted the following values: ${JSON.stringify(data)}`);
  };

  return (
    <div className='relative  p-2 2xl:w-[85%] w-[90%] mx-auto flex h-full items-center justify-center'>
      <form onSubmit={handleSubmit(onSubmit)} className=' space-y-3 w-full'>
        {/* Phone Input Field */}
        <div className=''>
          <label htmlFor='phone' className='text-left'>
            Phone Number
          </label>
          <Controller
            name='phone'
            control={control}
            render={({ field }) => (
              <PhoneInput
                {...field}
                id='phone'
                placeholder='Enter a phone number'
                className='w-full border rounded-lg'
              />
            )}
          />
          {errors.phone && (
            <p className='text-red-500 text-sm mt-1'>{errors.phone.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='p-2 bg-primary text-background rounded-md text-sm'
        >
          Submit
        </button>
      </form>
    </div>
  );
}
