'use client'

import * as React from 'react'
import { DayPicker } from 'react-day-picker'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      ISOWeek
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      classNames={{
        months: 'flex flex-col sm:flex-row gap-2',
        month: 'flex flex-col gap-4',
        caption: 'flex justify-center pt-1 relative items-center w-full',
        caption_label: 'text-md font-medium text-brown',
        nav: 'flex items-center gap-1',
        nav_button: cn(
          buttonVariants({ variant: 'ghost', color: 'brown' }),
          'size-7 bg-transparent p-0 text-brown shadow-none'
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-x-1',
        head_row: 'flex',
        head_cell:
          'text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]',
        row: 'flex w-full mt-2',
        cell: cn(
          'relative p-0 text-center text-sm focus-within:relative focus-within:z-20',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-sm [&:has(>.day-range-start)]:rounded-l-sm first:[&:has([aria-selected])]:rounded-l-sm last:[&:has([aria-selected])]:rounded-r-sm'
            : '[&:has([aria-selected])]:rounded-full'
        ),
        day: cn(
          buttonVariants({ variant: 'ghost', color: 'brown' }),
          'size-8 p-0 text-brown font-normal aria-selected:opacity-100'
        ),
        day_range_start:
          'day-range-start aria-selected:bg-primary aria-selected:text-primary-foreground',
        day_range_end:
          'day-range-end aria-selected:bg-primary aria-selected:text-primary-foreground',
        day_selected:
          'bg-brown text-cornsilk hover:bg-brown hover:text-cornsilk focus:bg-brown focus:text-cornsilk rounded-full !important',
        day_today: 'bg-accent text-brown',
        day_outside:
          'day-outside text-muted-foreground/50 aria-selected:text-cornsilk',
        day_disabled: 'text-muted-foreground opacity-50',
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_hidden: 'invisible',
        ...classNames
      }}
      components={{
        IconLeft: ({
          className,
          ...props
        }: { className?: string } & React.HTMLAttributes<SVGElement>) => (
          <ChevronLeft className={cn('size-6', className)} {...props} />
        ),
        IconRight: ({
          className,
          ...props
        }: { className?: string } & React.HTMLAttributes<SVGElement>) => (
          <ChevronRight className={cn('size-6', className)} {...props} />
        )
      }}
      {...props}
    />
  )
}

export { Calendar }
