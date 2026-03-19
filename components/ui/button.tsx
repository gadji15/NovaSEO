import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--nr-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--nr-bg)]',
  {
    variants: {
      variant: {
        primary:
          'bg-[color:var(--nr-primary)] text-white hover:opacity-95 active:opacity-90',
        outline:
          'border border-[color:var(--nr-border)] bg-transparent hover:bg-black/5 dark:hover:bg-white/5',
        ghost: 'bg-transparent hover:bg-black/5 dark:hover:bg-white/5'
      },
      size: {
        sm: 'h-9 px-3',
        md: 'h-11 px-5',
        lg: 'h-12 px-6 text-base'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'
