import { cn } from '@/lib/utils'

export function BlurryCircle({ className }: any) {
  return (
    <div
      className={cn('w-[216px] h-[216px] rounded-full blur-2xl', className)}
    />
  )
}
