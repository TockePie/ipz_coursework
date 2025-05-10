import React, { SVGProps } from 'react'

const SteakIcon = ({
  width = 23,
  height = 21,
  className = '',
  strokeWidth = 1.5,
  color = '#8E4848',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 23 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M15.75 14.798a4.45 4.45 0 0 0 2.415-.716 4.73 4.73 0 0 0 1.694-1.936 4.98 4.98 0 0 0-.434-5.026c-1.952-2.716-4.594-3.839-8.269-3.839S1.97 6.031 1.97 9.52c0 .636.242 1.246.672 1.696s1.015.703 1.625.703H7.48c1.217-.032 3.675.48 5.73 2.08.752.521 1.636.8 2.539.8"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.969 9.52V10c0 2.714 0 4.072.807 4.915s2.107.843 4.705.843c1.217-.03 3.675.48 5.73 2.08a4.46 4.46 0 0 0 2.325.795c.83.04 1.655-.155 2.386-.566a4.7 4.7 0 0 0 1.77-1.765 4.96 4.96 0 0 0 .652-2.463v-3.84"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.128 10c0 .381-.145.748-.403 1.018-.259.27-.61.421-.975.421s-.716-.151-.974-.421A1.47 1.47 0 0 1 14.372 10c0-.382.145-.748.404-1.018.258-.27.609-.422.974-.422.366 0 .716.152.975.422.258.27.403.636.403 1.018"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SteakIcon
