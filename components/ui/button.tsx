import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive rounded-full cursor-pointer",
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border-3 bg-background shadow-none hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost:
          'text-brown hover:bg-accent/80 hover:text-brown/90 active:text-brown/70 overflow-anchor-none transition duration-300',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-3xl px-6 has-[>svg]:px-4',
        xl: 'h-12 rounded-3xl text-lg px-8 has-[>svg]:px-6',
        icon: 'size-9',
        custom: '' // For custom sizing via className
      },
      color: {
        cornsilk:
          'bg-cornsilk text-light-coral hover:bg-cornsilk/90 active:bg-cornsilk/80',
        'strong-cyan':
          'bg-strong-cyan text-white hover:bg-strong-cyan/80 active:bg-strong-cyan/70 shadow-none',
        'pale-turquoise':
          'bg-pale-turquoise text-brown hover:bg-pale-turquoise/80 active:bg-pale-turquoise/60 shadow-none',
        'light-coral':
          'bg-light-coral hover:bg-light-coral/90 active:bg-light-coral/70 shadow-none',
        'light-goldenrod-yellow':
          'bg-light-goldenrod-yellow hover:bg-light-goldenrod-yellow/70 active:bg-light-goldenrod-yellow/50',
        brown:
          'bg-brown text-white hover:bg-brown/80 active:bg-brown/70 shadow-none',
        coral:
          'bg-coral text-white hover:bg-coral/80 active:bg-coral/70 shadow-none'
      },
      fontFamily: {
        default: '',
        unbounded: 'font-unbounded'
      }
    },
    compoundVariants: [
      {
        variant: 'outline',
        color: 'cornsilk',
        className:
          'border-cornsilk bg-light-coral border-3 text-cornsilk hover:text-cornsilk hover:bg-light-coral-hovered/40'
      },
      {
        variant: 'outline',
        color: 'coral',
        className:
          'border-coral bg-white border-3 text-coral hover:text-coral hover:bg-light-coral-hovered/40'
      },
      {
        variant: 'outline',
        color: 'strong-cyan',
        className:
          'border-strong-cyan bg-transparent text-strong-cyan hover:bg-strong-cyan/10 hover:text-strong-cyan shadow-none'
      },
      {
        variant: 'ghost',
        color: 'light-goldenrod-yellow',
        className:
          'hover:bg-light-goldenrod-yellow/20 active:bg-light-goldenrod-yellow/10'
      },
      {
        variant: 'ghost',
        color: 'brown',
        className: 'hover:bg-brown/20 active:brown/10 bg-transparent text-brown'
      },
      {
        variant: 'ghost',
        color: 'strong-cyan',
        className:
          'hover:bg-strong-cyan/20 active:bg-strong-cyan/10 bg-transparent text-strong-cyan hover:text-strong-cyan active:text-strong-cyan/70'
      },
      {
        variant: 'secondary',
        color: 'light-goldenrod-yellow',
        className:
          'bg-light-goldenrod-yellow text-brown hover:bg-light-goldenrod-yellow/70 active:bg-light-goldenrod-yellow/50'
      },
      {
        size: 'icon',
        color: 'light-coral',
        className: 'h-14 w-14 rounded-full border border-brown'
      }
    ],
    defaultVariants: {
      variant: 'default',
      size: 'default',
      color: 'strong-cyan',
      fontFamily: 'unbounded'
    }
  }
)

function Button({
  className,
  variant,
  size,
  color,
  fontFamily,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, color, fontFamily, className })
      )}
      {...props}
    />
  )
}

export { Button, buttonVariants }
