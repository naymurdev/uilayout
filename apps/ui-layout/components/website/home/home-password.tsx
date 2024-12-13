'use client';
import React, { useState, useMemo } from 'react';
import { Check, Eye, EyeOff, Info, X } from 'lucide-react';
// shaadcn hover card
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/website/ui/hover-card';

// Constants
const PASSWORD_REQUIREMENTS = [
  { regex: /.{8,}/, text: 'At least 8 characters' },
  { regex: /[0-9]/, text: 'At least 1 number' },
  { regex: /[a-z]/, text: 'At least 1 lowercase letter' },
  { regex: /[A-Z]/, text: 'At least 1 uppercase letter' },
  { regex: /[!-\/:-@[-`{-~]/, text: 'At least 1 special characters' },
] as const;

type StrengthScore = 0 | 1 | 2 | 3 | 4 | 5;

const STRENGTH_CONFIG = {
  colors: {
    0: 'text-red-500',
    1: 'text-orange-500',
    2: 'text-yellow-500',
    3: 'text-green-500',
    4: 'text-amber-700',
    5: 'text-emerald-500',
  } satisfies Record<StrengthScore, string>,
  texts: {
    0: 'Enter a password',
    1: 'Weak password',
    2: 'Medium password!',
    3: 'Strong password!!',
    4: 'Very Strong password!!!',
  } satisfies Record<Exclude<StrengthScore, 5>, string>,
} as const;

// Types
type Requirement = {
  met: boolean;
  text: string;
};

type PasswordStrength = {
  score: StrengthScore;
  requirements: Requirement[];
};

const HomePasswordInput = () => {
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const calculateStrength = useMemo((): PasswordStrength => {
    const requirements = PASSWORD_REQUIREMENTS.map((req) => ({
      met: req.regex.test(password),
      text: req.text,
    }));

    return {
      score: requirements.filter((req) => req.met).length as StrengthScore,
      requirements,
    };
  }, [password]);

  return (
    <div className='w-[80%] mx-auto py-8'>
      <form className='space-y-2'>
        <div className='flex justify-between'>
          <label htmlFor='password' className='block font-medium'>
            Password*
          </label>
          <HoverCard openDelay={200}>
            <HoverCardTrigger>
              <Info
                size={20}
                className={`cursor-pointer  ${
                  STRENGTH_CONFIG.colors[calculateStrength.score]
                } transition-all `}
              />
            </HoverCardTrigger>
            <HoverCardContent className='bg-background'>
              <ul className='space-y-1.5' aria-label='Password requirements'>
                {calculateStrength.requirements.map((req, index) => (
                  <li key={index} className='flex items-center space-x-2'>
                    {req.met ? (
                      <Check size={16} className='text-emerald-500' />
                    ) : (
                      <X size={16} className='text-muted-foreground/80' />
                    )}
                    <span
                      className={`text-xs ${
                        req.met ? 'text-emerald-600' : 'text-muted-foreground'
                      }`}
                    >
                      {req.text}
                      <span className='sr-only'>
                        {req.met
                          ? ' - Requirement met'
                          : ' - Requirement not met'}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className='relative'>
          <input
            id='password'
            type={isVisible ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
            aria-invalid={calculateStrength.score < 4}
            aria-describedby='password-strength'
            className='w-full p-2 border-2 rounded-md bg-background outline-none focus-within:border-blue-700 transition'
          />
          <button
            type='button'
            onClick={() => setIsVisible((prev) => !prev)}
            aria-label={isVisible ? 'Hide password' : 'Show password'}
            className='absolute inset-y-0 right-0 outline-none flex items-center justify-center w-9 text-muted-foreground/80 hover:text-foreground  '
          >
            {isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </form>
      <div className='flex gap-2 w-full justify-between mt-2'>
        <span
          className={`${
            calculateStrength.score >= 1 ? 'bg-green-200' : 'bg-border'
          }  p-1 rounded-full w-full`}
        ></span>
        <span
          className={`${
            calculateStrength.score >= 2 ? 'bg-green-300' : 'bg-border'
          }  p-1 rounded-full w-full`}
        ></span>
        <span
          className={`${
            calculateStrength.score >= 3 ? 'bg-green-400' : 'bg-border'
          }  p-1 rounded-full w-full`}
        ></span>
        <span
          className={`${
            calculateStrength.score >= 4 ? 'bg-green-500' : 'bg-border'
          }  p-1 rounded-full w-full`}
        ></span>
        <span
          className={`${
            calculateStrength.score >= 5 ? 'bg-green-600' : 'bg-border'
          }  p-1 rounded-full w-full`}
        ></span>
      </div>
    </div>
  );
};

export default HomePasswordInput;
