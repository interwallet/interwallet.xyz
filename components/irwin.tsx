"use client";

import { useState } from "react";

interface IrwinProps {
  /**
   * The left color of the gradient
   */
  left: string;
  /**
   * The right color of the gradient
   */
  right: string;

  /**
   * the pixel size of the svg
   */
  size: number;
  /**
   * the height of the embedded Irwin - defaults to 100%
   */
  height: number;

  legs: boolean;
}

function interpolateColor(color1: string, color2: string) {
  if (color1 === color2) {
    return color1;
  }

  if (
    color1.length !== 7 ||
    color2.length !== 7 ||
    color1[0] !== "#" ||
    color2[0] !== "#"
  ) {
    throw new Error("Colors must be in the format #000000");
  }

  console.log(color1, color2);

  const rgb1 = {
    r: parseInt(color1.slice(1, 3), 16),
    g: parseInt(color1.slice(3, 5), 16),
    b: parseInt(color1.slice(5, 7), 16),
  };
  const rgb2 = {
    r: parseInt(color2.slice(1, 3), 16),
    g: parseInt(color2.slice(3, 5), 16),
    b: parseInt(color2.slice(5, 7), 16),
  };
  console.log(JSON.stringify(rgb1), JSON.stringify(rgb2));
  const avg = {
    r: (rgb1.r + rgb2.r) / 2,
    g: (rgb1.g + rgb2.g) / 2,
    b: (rgb1.b + rgb2.b) / 2,
  };
  const hexR = Math.round(avg.r).toString(16).padStart(2, "0");
  const hexG = Math.round(avg.g).toString(16).padStart(2, "0");
  const hexB = Math.round(avg.b).toString(16).padStart(2, "0");

  console.log(`#${hexR}${hexG}${hexB}`);

  return `#${hexR}${hexG}${hexB}`;
}

export default function Irwin(p: IrwinProps) {
  const intermediateColor = interpolateColor(p.left, p.right);
  // console.log(`Intermediate color: ${intermediateColor}`);
  console.log(`legs: ${p.legs}`);

  const guid =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);

  return (
    <>
      <svg
        width={p.size}
        height={p.size}
        viewBox={"0 0 " + p.height.toString() + " " + p.height.toString()}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height="100%" fill="none" />
        <defs>
          <linearGradient
            id={`fullGradient-${guid}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" style={{ stopColor: p.left, stopOpacity: 1 }} />
            <stop
              offset="100%"
              style={{
                stopColor: p.right,
                stopOpacity: 1,
              }}
            />
          </linearGradient>
          <linearGradient
            id={`lGradient-${guid}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" style={{ stopColor: p.left, stopOpacity: 1 }} />
            <stop
              offset="100%"
              style={{ stopColor: intermediateColor, stopOpacity: 1 }}
            />
          </linearGradient>
          <linearGradient
            id={`rGradient-${guid}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop
              offset="0%"
              style={{ stopColor: intermediateColor, stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: p.right, stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        {p.legs &&
          <>
            <path
              d="M50,45 Q45,105 25,175"
              stroke={`url(#rGradient-${guid})`}
              stroke-width="15"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M50,45 Q55,105 75,175"
              stroke={`url(#rGradient-${guid})`}
              stroke-width="15"
              fill="none"
              strokeLinecap="round"
            />
          </>
        }
        else {<></>}
        <path
          d="M10,20 Q25,150 50,45"
          stroke={`url(#lGradient-${guid})`}
          stroke-width="15"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M50,45 Q75,150 90,20"
          stroke={`url(#rGradient-${guid})`}
          stroke-width="15"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="50" cy="17.5" r="13" fill={intermediateColor} />
      </svg>
    </>
  );
}
