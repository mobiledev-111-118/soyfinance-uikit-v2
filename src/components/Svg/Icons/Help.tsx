import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 101 100" {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M50.1423 9.0912C44.7701 9.0912 39.4504 10.1493 34.4871 12.2051C29.5238 14.2608 25.014 17.274 21.2152 21.0726C17.4165 24.8712 14.4031 29.3808 12.3473 34.3438C10.2914 39.3069 9.23324 44.6263 9.23324 49.9983C9.23324 55.3703 10.2914 60.6897 12.3473 65.6528C14.4031 70.6159 17.4165 75.1254 21.2152 78.924C25.014 82.7226 29.5238 85.7358 34.4871 87.7916C39.4504 89.8473 44.7701 90.9054 50.1423 90.9054C60.9921 90.9054 71.3975 86.5956 79.0694 78.924C86.7414 71.2524 91.0514 60.8475 91.0514 49.9983C91.0514 39.1491 86.7414 28.7442 79.0694 21.0726C71.3975 13.401 60.9921 9.0912 50.1423 9.0912V9.0912ZM0.142334 49.9983C0.142334 22.386 22.5287 0.000732422 50.1423 0.000732422C77.756 0.000732422 100.142 22.386 100.142 49.9983C100.142 77.6106 77.756 99.9959 50.1423 99.9959C22.5287 99.9959 0.142334 77.6106 0.142334 49.9983ZM55.8242 71.5882C55.8242 73.095 55.2255 74.5401 54.16 75.6056C53.0944 76.6711 51.6492 77.2697 50.1423 77.2697C48.6354 77.2697 47.1902 76.6711 46.1247 75.6056C45.0591 74.5401 44.4605 73.095 44.4605 71.5882C44.4605 70.0813 45.0591 68.6362 46.1247 67.5707C47.1902 66.5052 48.6354 65.9066 50.1423 65.9066C51.6492 65.9066 53.0944 66.5052 54.16 67.5707C55.2255 68.6362 55.8242 70.0813 55.8242 71.5882V71.5882ZM41.6651 36.199C42.8696 33.9082 45.9742 31.8174 50.1423 31.8174C55.9742 31.8174 59.2332 35.6126 59.2332 38.6352C59.2332 41.6578 55.9742 45.4531 50.1423 45.4531C48.9368 45.4531 47.7807 45.9319 46.9282 46.7843C46.0758 47.6367 45.5969 48.7928 45.5969 49.9983V54.5435C45.5969 55.749 46.0758 56.9051 46.9282 57.7575C47.7807 58.6099 48.9368 59.0888 50.1423 59.0888C51.3479 59.0888 52.504 58.6099 53.3565 57.7575C54.2089 56.9051 54.6878 55.749 54.6878 54.5435V54.0299C62.106 52.3346 68.3242 46.5757 68.3242 38.6352C68.3242 29.1084 59.3696 22.7269 50.1423 22.7269C43.1287 22.7269 36.6196 26.2495 33.6151 31.981C33.3207 32.5109 33.1353 33.0944 33.0698 33.6971C33.0043 34.2997 33.06 34.9094 33.2337 35.4902C33.4074 36.071 33.6955 36.6112 34.0811 37.079C34.4667 37.5468 34.942 37.9327 35.4789 38.2141C36.0159 38.4955 36.6038 38.6666 37.2079 38.7173C37.812 38.7681 38.4201 38.6976 38.9966 38.5098C39.573 38.322 40.106 38.0208 40.5643 37.624C41.0226 37.2271 41.3969 36.7426 41.6651 36.199V36.199Z"/>
    </Svg>
  );
};

export default Icon;