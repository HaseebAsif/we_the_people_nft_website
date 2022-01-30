import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face{
        font-family:"Pixel-Western Regular";
        url(./assets/fonts/Pixel-Western.ttf) format("truetype");
      }
      `}
  />
);

export default Fonts;
