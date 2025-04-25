import React, { SVGProps } from 'react'

import Colors from '@/types/enums/colors'

interface MapPinIconProps extends SVGProps<SVGSVGElement> {
  size?: string | number
}

const MapPinIcon = ({
  size = '26',
  color = Colors.CORNSILK,
  className,
  ...props
}: MapPinIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M13 26s9.75-9.24 9.75-16.25a9.75 9.75 0 1 0-19.5 0C3.25 16.76 13 26 13 26m0-11.375a4.875 4.875 0 1 1 0-9.75 4.875 4.875 0 0 1 0 9.75"
      fill={color}
    />
  </svg>
)

export default MapPinIcon
