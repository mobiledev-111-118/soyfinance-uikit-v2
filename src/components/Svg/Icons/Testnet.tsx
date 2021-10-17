import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <path d="M89.8585 92.1719L68.0151 44.1897V15.3523C69.0041 16.277 70.329 16.8471 71.7899 16.8471C74.8466 16.8471 77.3249 14.369 77.3249 11.3121V5.53497C77.3247 2.47778 74.8466 0 71.7898 0H62.4801H37.8048H28.4952C25.4385 0 22.9602 2.47778 22.9602 5.53497V11.3123C22.9602 14.369 25.438 16.8472 28.4952 16.8472C29.9558 16.8472 31.2808 16.277 32.27 15.3525V44.1899L10.426 92.1719C9.64614 93.8851 9.79042 95.8773 10.809 97.4603C11.8277 99.0433 13.5813 100 15.4636 100H84.8216C86.7041 100 88.4572 99.0433 89.4762 97.4603C90.4942 95.8771 90.6386 93.8851 89.8585 92.1719ZM70.3705 88.9302L55.8332 58.2899C55.2224 57.0025 53.9244 56.1817 52.4996 56.1817H38.9739L42.8427 47.6838C43.1705 46.9637 43.3401 46.1817 43.3401 45.3905V11.0698H56.9456V45.3904C56.9456 46.1815 57.1152 46.9636 57.4429 47.6837L76.2201 88.9304H70.3705V88.9302Z"/>
    </Svg>
  );
};

export default Icon;