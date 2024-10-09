import React from "react";

type Props = {
  size?: number;
};

export const Telegram: React.FC<Props> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 512 512">
    <g>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        x1="256"
        x2="256"
        y1="0"
        y2="510.1322"
      >
        <stop offset="0" stopColor="#41BCE7" />
        <stop offset="1" stopColor="#22A6DC" />
      </linearGradient>
      <circle cx="256" cy="256" r="256" />
      <g>
        <path
          fill="#FFFFFF"
          d="M380.6,147.3l-45.7,230.5c0,0-6.4,16-24,8.3l-105.5-80.9L167,286.7l-64.6-21.7c0,0-9.9-3.5-10.9-11.2    c-1-7.7,11.2-11.8,11.2-11.8l256.8-100.7C359.5,141.2,380.6,131.9,380.6,147.3z"
        />
        <path
          fill="#D2E4F0"
          d="M197.2,375.2c0,0-3.1-0.3-6.9-12.4c-3.8-12.1-23.3-76.1-23.3-76.1l155.1-98.5c0,0,9-5.4,8.6,0    c0,0,1.6,1-3.2,5.4c-4.8,4.5-121.8,109.7-121.8,109.7"
        />
        <path
          fill="#B5CFE4"
          d="M245.8,336.2l-41.7,38.1c0,0-3.3,2.5-6.8,0.9l8-70.7"
        />
      </g>
    </g>
  </svg>
);
