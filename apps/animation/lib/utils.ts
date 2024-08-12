import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function debounce(
  func: (...args: any[]) => any,
  wait: number,
  immediate: boolean = false
) {
  let timeout: number | undefined

  return function executedFunction(this: any, ...args: any[]) {
    const context: any = this

    const later = () => {
      timeout = undefined
      if (!immediate) {
        func.apply(context, args)
      }
    }

    const callNow: boolean = immediate && !timeout

    clearTimeout(timeout)

    timeout = window.setTimeout(later, wait)

    if (callNow) {
      func.apply(context, args)
    }
  }
}

export function throttle(fn: (...args: any[]) => any, wait: number) {
  let shouldWait = false

  return function throttledFunction(this: any, ...args: any[]) {
    if (!shouldWait) {
      fn.apply(this, args)
      shouldWait = true
      setTimeout(() => (shouldWait = false), wait)
    }
  }
}
