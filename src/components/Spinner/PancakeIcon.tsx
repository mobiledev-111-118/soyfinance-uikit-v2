import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32.19 31.45" {...props} width="60px">
      <polygon points="14.81 13.7 14.81 16.46 16.13 17.84 17.45 16.46 17.45 13.7 16.13 12.33 14.81 13.7" fill="url(#linear-gradient)"/>
      <polygon points="15.51 14.53 15.51 15.71 16.12 16.3 16.74 15.71 16.74 14.53 16.12 13.94 15.51 14.53" fill="url(#linear-gradient-2)"/>
      <polygon points="16.48 17.81 17.75 16.6 18.15 18.31 16.48 17.81" fill="#8aace2"/>
      <polygon points="14.17 18.31 14.57 16.61 15.83 17.82 14.17 18.31" fill="#8aabe1"/>
      <polygon points="16.13 17.87 15.54 18.27 16.14 20.07 16.74 18.27 16.13 17.87" fill="#8cb9e3"/>
      <path d="M593.86,159.63l-.62,2.79L587.93,166a10.16,10.16,0,0,0,4.62,8.77l-2,.9s-4.58-2.48-4.69-10.6Z" transform="translate(-577.98 -152.43)" fill="url(#linear-gradient-3)"/>
      <path d="M594.42,159.63l.62,2.79,5.48,3.58a8.74,8.74,0,0,1-1.27,5.14s-1.6,3.45-6.9,5.32c0,0-5.84,2.2-8.87-.4,0,0-1.82-1.08-3.06-4.66l.66-.73-.08-1.48-1-.71s-.29-5.94,3.8-9.81l1.78.09.77,1.49-1,1.46-1.73-.08-.42-.56-.69.84.36.69,2.71.29,2-2.31-1.25-2.87-1.46-.17a14.49,14.49,0,0,1,10.91-3.19,14.19,14.19,0,0,1,11.34,8.12l.45,1.11v.16l-.41,1.13-1.68.29-1.27-1.4.75-1.67,1.09-.18-.69-.95-1.11.13-1.22,2.73,1.84,2.41,2.7-.27.5-.44a13,13,0,0,1-2.93,11S598.42,185,585,180.92a7.41,7.41,0,0,1-1.56-.75,7.75,7.75,0,0,0,1.26,1.07s4.67,3.72,12.26,2.32a16.36,16.36,0,0,0,9.41-5.19,16.81,16.81,0,0,0,3.76-12s0-9-10.75-13.13c0,0-7.93-2.9-15,2.26A15.56,15.56,0,0,0,578,167.69s.36,5.62,2.13,7.73c0,0,3.18,4.19,7.44,4a13,13,0,0,0,6.11-1.26,15.5,15.5,0,0,0,6.91-5.38,11.73,11.73,0,0,0,2-6.76v-.88Z" transform="translate(-577.98 -152.43)" fill="url(#linear-gradient-4)"/>
      <polygon points="23.41 21.35 25.12 21.24 26.03 22.51 25.45 24.09 23.61 24.27 22.65 22.95 23.41 21.35" fill="url(#linear-gradient-5)"/>
      <polygon points="23.8 21.94 24.8 21.88 25.32 22.61 24.99 23.53 23.92 23.64 23.36 22.87 23.8 21.94" fill="#fff"/>
      <defs>
        <linearGradient id="linear-gradient" x1="16.13" y1="17.84" x2="16.13" y2="12.33" gradientUnits="userSpaceOnUse">
            <stop offset="0.1" stop-color="#88c4df"/>
            <stop offset="0.64" stop-color="#8780dc"/><stop offset="1" stop-color="#8465d9"/>
        </linearGradient>
        <linearGradient id="linear-gradient-2" x1="16.12" y1="16.3" x2="16.12" y2="13.94" gradientUnits="userSpaceOnUse">
            <stop offset="0.1" stop-color="#8267fc"/>
            <stop offset="1" stop-color="#a33bf4"/>
            <stop offset="1" stop-color="#7a2bd5"/>
        </linearGradient>
        <linearGradient id="linear-gradient-3" x1="589.85" y1="175.67" x2="589.85" y2="159.63" gradientUnits="userSpaceOnUse">
            <stop offset="0.1" stop-color="#4ebceb"/>
            <stop offset="0.64" stop-color="#5ea2e1"/>
            <stop offset="1" stop-color="#6a8fd9"/>
        </linearGradient>
        <linearGradient id="linear-gradient-4" x1="594.07" y1="183.88" x2="594.07" y2="152.43" gradientUnits="userSpaceOnUse">
            <stop offset="0.1" stop-color="#e3c4f1"/>
            <stop offset="0.64" stop-color="#a56ae1"/>
            <stop offset="1" stop-color="#7a2bd5"/>
        </linearGradient>
        <linearGradient id="linear-gradient-5" x1="24.34" y1="24.27" x2="24.34" y2="21.24" gradientUnits="userSpaceOnUse">
            <stop offset="0.1" stop-color="#e3c4f1"/>
            <stop offset="1" stop-color="#a56ae1"/>
            <stop offset="1" stop-color="#7a2bd5"/>
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
