import React, { SVGProps } from 'react'

const PepperIcon = ({
  width = 23,
  height = 20,
  className = '',
  strokeWidth = 1.5,
  color = '#C52828',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    className={className}
    viewBox="0 0 23 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.067 9.429c0 2.525-2.446 4.571-5.462 4.571s-5.462-2.046-5.462-4.571c0 2.424.92 4.75 2.56 6.465 1.638 1.714 3.861 2.677 6.18 2.677 2.317 0 4.54-.963 6.179-2.677 1.639-1.715 2.56-4.04 2.56-6.465a3.5 3.5 0 0 0-.96-2.425A3.2 3.2 0 0 0 16.344 6c-.869 0-1.703.361-2.317 1.004a3.5 3.5 0 0 0-.96 2.425M16.345 6c0-2.286 2.185-4.571 4.37-4.571"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default PepperIcon
