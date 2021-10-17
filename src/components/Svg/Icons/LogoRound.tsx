import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <circle cx="50.1423" cy="50" r="45" fill="url(#paint0_linear)" stroke="url(#paint1_linear)" stroke-width="4"/>
      <circle cx="41.3713" cy="42.4673" r="9.28016" transform="rotate(13.5456 41.3713 42.4673)" fill="#97B629"/>
      <ellipse cx="37.4258" cy="54.8805" rx="10.2082" ry="9.28016" transform="rotate(13.5456 37.4258 54.8805)" fill="#97B629"/>
      <ellipse cx="35.4344" cy="63.6502" rx="7.76971" ry="11.0996" transform="rotate(28.2072 35.4344 63.6502)" fill="#97B629"/>
      <circle cx="56.6198" cy="45.4929" r="12.2138" fill="#B1D237"/>
      <ellipse cx="55.3982" cy="62.592" rx="13.4352" ry="12.2138" fill="#B1D237"/>
      <ellipse cx="55.5537" cy="74.4281" rx="10.2259" ry="14.6084" transform="rotate(14.6616 55.5537 74.4281)" fill="#B1D237"/>
      <ellipse cx="55.9216" cy="19.2824" rx="3.66415" ry="9.77107" transform="rotate(18.8887 55.9216 19.2824)" fill="#88D949"/>
      <ellipse cx="68.9682" cy="29.3929" rx="2.41698" ry="7.44737" transform="rotate(73.8516 68.9682 29.3929)" fill="#88D949"/>
      <ellipse cx="41.993" cy="27.5519" rx="2.41698" ry="7.44737" transform="rotate(127.97 41.993 27.5519)" fill="#88D949"/>
      <defs>
      <linearGradient id="paint0_linear" x1="50.1423" y1="3" x2="50.1423" y2="97" gradientUnits="userSpaceOnUse">
      <stop stop-color="#475222"/>
      <stop offset="1" stop-color="#3C4323"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="50.1423" y1="3" x2="50.1423" y2="97" gradientUnits="userSpaceOnUse">
      <stop stop-color="#475222"/>
      <stop offset="1" stop-color="#3C4323"/>
      </linearGradient>
      <clipPath id="clip0">
      <rect width="100" height="100" fill="white" transform="translate(100.142 100) rotate(-180)"/>
      </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
