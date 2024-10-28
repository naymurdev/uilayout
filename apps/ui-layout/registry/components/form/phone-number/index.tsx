import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PhoneInput } from '@/components/core/phone-input';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { z } from 'zod';

// Zod schema for phone validation
const FormSchema = z.object({
  phone: z
    .string()
    .refine(isValidPhoneNumber, { message: 'Invalid phone number' }),
});

type FormData = z.infer<typeof FormSchema>;

export default function Hero() {
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
    <div className='relative mt-2 flex   justify-center'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col items-start space-y-3'
      >
        {/* Phone Input Field */}
        <div className='flex flex-col items-start'>
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
