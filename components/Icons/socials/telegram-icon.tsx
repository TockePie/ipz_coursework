import React, { SVGProps } from 'react'

import Colors from '@/types/enums/colors'

interface Props extends SVGProps<SVGSVGElement> {
  size?: string | number
}

const TelegramIcon = ({
  size = '48',
  color = Colors.CORNSILK,
  className,
  ...props
}: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M24 0C10.752 0 0 10.752 0 24s10.752 24 24 24 24-10.752 24-24S37.248 0 24 0m11.136 16.32c-.36 3.792-1.92 13.008-2.712 17.256-.336 1.8-1.008 2.4-1.632 2.472-1.392.12-2.448-.912-3.792-1.8-2.112-1.392-3.312-2.256-5.352-3.6-2.376-1.56-.84-2.424.528-3.816.36-.36 6.504-5.952 6.624-6.456a.48.48 0 0 0-.12-.432c-.144-.12-.336-.072-.504-.048-.216.048-3.576 2.28-10.128 6.696-.96.648-1.824.984-2.592.96-.864-.024-2.496-.48-3.72-.888-1.512-.48-2.688-.744-2.592-1.584.048-.432.648-.864 1.776-1.32 7.008-3.048 11.664-5.064 13.992-6.024 6.672-2.784 8.04-3.264 8.952-3.264.192 0 .648.048.936.288.24.192.312.456.336.648-.024.144.024.576 0 .912"
      fill={color}
    />
  </svg>
)

export default TelegramIcon
