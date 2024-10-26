import * as React from 'react'
import { DropdownMenuTriggerProps } from '@radix-ui/react-dropdown-menu'

import { Event, trackEvent } from '@/lib/events'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components//ui/dropdown-menu'
import { CheckCheck, Copy } from 'lucide-react'

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string
  src?: string
  event?: Event['name']
}

export async function copyToClipboardWithMeta(value: string, event?: Event) {
  navigator.clipboard.writeText(value)
  if (event) {
    trackEvent(event)
  }
}

export function CopyButton({
  value,
  className,
  src,
  event,
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  return (
    <Button
      size="icon"
      variant="ghost"
      className={cn(
        'relative z-10 h-6 w-6 bg-white hover:bg-white dark:bg-gray-600 dark:text-white dark:hover:bg-zinc-700 dark:hover:text-zinc-50',
        className
      )}
      onClick={() => {
        copyToClipboardWithMeta(
          value,
          event
            ? {
                name: event,
                properties: {
                  code: value,
                },
              }
            : undefined
        )
        setHasCopied(true)
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? (
        <CheckCheck className="h-3 w-3" />
      ) : (
        <Copy className="h-3 w-3" />
      )}
    </Button>
  )
}

interface CopyNpmCommandButtonProps extends DropdownMenuTriggerProps {
  commands: Required<any>
}

export function CopyNpmCommandButton({
  commands,
  className,
  ...props
}: CopyNpmCommandButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }, [hasCopied])

  const copyCommand = React.useCallback(
    (value: string, pm: 'npm' | 'pnpm' | 'yarn') => {
      copyToClipboardWithMeta(value, {
        name: 'copy_npm_command',
        properties: {
          command: value,
          pm,
        },
      })
      setHasCopied(true)
    },
    []
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className={cn(
            'relative z-10 h-6 w-6 bg-white/85 hover:bg-white dark:bg-gray-600 dark:text-zinc-50 dark:hover:bg-zinc-700 dark:hover:text-zinc-50',
            className
          )}
        >
          {hasCopied ? (
            <CheckCheck className="h-3 w-3" />
          ) : (
            <Copy className="h-3 w-3" />
          )}
          <span className="sr-only">Copy</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => copyCommand(commands.__npmCommand__, 'npm')}
        >
          npm
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => copyCommand(commands.__yarnCommand__, 'yarn')}
        >
          yarn
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => copyCommand(commands.__pnpmCommand__, 'pnpm')}
        >
          pnpm
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
