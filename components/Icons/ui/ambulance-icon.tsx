import React, { SVGProps } from 'react'

const AmbulanceIcon = ({
  width = 24,
  height = 18,
  className = '',
  strokeWidth = 1.5,
  color = '#FF31BA',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 18"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.185 13.19V2.86c0-.405-.173-.793-.48-1.079a1.7 1.7 0 0 0-1.158-.447H2.97c-.435 0-.851.161-1.158.447s-.48.674-.48 1.079v10.107c0 .405.173.793.48 1.079s.723.446 1.158.446h1.29m17.704-5.94h-6.778"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.245 14.492h1.117c.216 0 .43-.04.63-.118q.302-.117.533-.334a1.5 1.5 0 0 0 .354-.499c.081-.186.122-.386.12-.587l-.039-4.85-2.28-4.348a1.57 1.57 0 0 0-.604-.626 1.73 1.73 0 0 0-.868-.232h-3.046m-10.88 11.64c0 .564.24 1.106.669 1.505.429.4 1.01.624 1.617.624.606 0 1.188-.225 1.616-.624.43-.4.67-.941.67-1.506s-.24-1.106-.67-1.506a2.38 2.38 0 0 0-1.616-.623c-.607 0-1.188.224-1.617.624-.429.399-.67.94-.67 1.505"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.803 7.435h4.912M8.258 5.148v4.574m6.402 4.77H8.854m5.806.045c0 .565.241 1.107.67 1.506.429.4 1.01.624 1.617.624.606 0 1.188-.225 1.617-.624.428-.4.67-.941.67-1.506s-.242-1.106-.67-1.506a2.38 2.38 0 0 0-1.617-.623c-.607 0-1.188.224-1.617.624-.429.399-.67.94-.67 1.505"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default AmbulanceIcon
