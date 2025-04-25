import React, { SVGProps } from 'react'

import Colors from '@/types/enums/colors'

interface GmailIconProps extends SVGProps<SVGSVGElement> {
  size?: string | number
  outerColor?: Colors
  innerColor?: Colors
}

const GmailIcon = ({
  size = '48',
  innerColor = Colors.LIGHTCORAL,
  outerColor = Colors.CORNSILK,
  className,
  ...props
}: GmailIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <circle cx="24" cy="24" r="24" fill={outerColor} />
    <path
      d="M38 16.155V32.83c0 1.084-.854 1.962-1.909 1.962h-4.455V23.676L24 29.563l-7.636-5.887v11.118H11.91c-.251 0-.5-.05-.731-.15a1.9 1.9 0 0 1-.62-.425 2 2 0 0 1-.413-.636 2 2 0 0 1-.145-.751V16.154c0-2.426 2.694-3.81 4.582-2.355l1.782 1.375L24 21.06l7.636-5.887 1.783-1.373C35.305 12.345 38 13.73 38 16.155"
      fill={innerColor}
    />
  </svg>
)

export default GmailIcon
