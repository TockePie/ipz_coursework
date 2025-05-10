import React, { SVGProps } from 'react'

const ShrimpIcon = ({
  width = 22,
  height = 22,
  className = '',
  strokeWidth = 1.5,
  color = '#CD7B4F',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.31 20.276a7.241 7.241 0 0 0 0-14.483H5.345v1.448c0 3.2 2.593 5.794 5.793 5.794h2.172a2.897 2.897 0 1 1 0 5.793"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.31 5.793s1.449.724 1.449 3.62-1.449 3.621-1.449 3.621m-3.862 7.242h3.862V19.19c0-1.4-1.135-2.535-2.534-2.535h-.121a2.414 2.414 0 0 0-2.414 2.414c0 .666.54 1.207 1.207 1.207M5.345 5.793H3.897a2.172 2.172 0 1 1 0-4.345h6.517m-.362 7.966a.362.362 0 0 1 0-.724m0 .724a.362.362 0 0 0 0-.724m6.155 6.517c2.172-.724 3.62-2.173 3.62-5.07"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ShrimpIcon
