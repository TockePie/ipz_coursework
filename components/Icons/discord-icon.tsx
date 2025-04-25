import React, { SVGProps } from 'react'

import Colors from '@/types/enums/colors'

interface DiscordIconProps extends SVGProps<SVGSVGElement> {
  size?: string | number
  className?: string
  outerColor?: Colors
  innerColor?: Colors
}

const DiscordIcon = ({
  size = '512',
  innerColor = Colors.LIGHTCORAL,
  outerColor = Colors.CORNSILK,
  className,
  ...props
}: DiscordIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 512 512"
    className={className}
    width={size}
    height={size}
    {...props}
  >
    <path
      fill={outerColor}
      d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0"
    />
    <g data-name="å¾å± 2">
      <g data-name="Discord Logos">
        <path
          fill={innerColor}
          fillRule="nonzero"
          d="M360.932 160.621a250.5 250.5 0 0 0-62.384-19.182 174 174 0 0 0-7.966 16.243 233 233 0 0 0-34.618-2.602c-11.569 0-23.196.879-34.623 2.58-2.334-5.509-5.044-10.972-7.986-16.223a252.6 252.6 0 0 0-62.397 19.222c-39.483 58.408-50.183 115.357-44.833 171.497a251.6 251.6 0 0 0 76.502 38.398c6.169-8.328 11.695-17.193 16.386-26.418a161.7 161.7 0 0 1-25.813-12.318c2.165-1.569 4.281-3.186 6.325-4.756 23.912 11.23 50.039 17.088 76.473 17.088 26.436 0 52.563-5.858 76.475-17.09 2.069 1.689 4.186 3.306 6.325 4.756a162.6 162.6 0 0 1-25.859 12.352 184 184 0 0 0 16.386 26.396 250.5 250.5 0 0 0 76.553-38.391l-.006.006c6.278-65.103-10.724-121.529-44.94-171.558M205.779 297.63c-14.908 0-27.226-13.53-27.226-30.174 0-16.645 11.889-30.294 27.179-30.294s27.511 13.649 27.249 30.294c-.261 16.644-12.007 30.174-27.202 30.174m100.439 0c-14.933 0-27.202-13.53-27.202-30.174 0-16.645 11.889-30.294 27.202-30.294s27.44 13.649 27.178 30.294c-.261 16.644-11.984 30.174-27.178 30.174"
          data-name="Discord Logo - Large - White"
        />
      </g>
    </g>
  </svg>
)

export default DiscordIcon
