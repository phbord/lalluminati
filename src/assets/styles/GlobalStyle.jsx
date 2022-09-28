import React from 'react';
import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap');

    :root {
      --dark: #000;
      --light: #fff;
      --articleColor: #C2C2C2;
      --yellow: #FFFFBA;
      --yellowStronger: #FFFF00;
      --orangeStronger: #FFBF00;
      --defaultGutterSizeX: 1.5rem;
      --defaultGutterSizeY: 1rem;
      --articleMargin: 1rem;
      --articleMarginLess: -1rem;
      --articlePadding: 1rem;
      --articlePaddingLess: -1rem;
    }

    * {
        font-family: 'Crimson Text', serif;
    }

    html {
      height: 100%;
      font-size: 62.5%;
    }

    #root {
      height: 100%;
    }
 
    body {
      height: 100%;
      margin: 0;
      display: flex;
      flex-direction: column;
      background-color: var(--light);
    }

    .container {
      width: calc(100% - 2*var(--defaultGutterSizeX));
      min-height: 100%;
      display: flex;
      flex-direction: column;
    }

    .prev-scroll-button,
    .top-scroll-button {
      background-color: var(--articleColor);
      color: var(--dark);

      &:hover {
        background-color: var(--yellow);
      }
    }

    .top-scroll-button {
      position: fixed;
      bottom: 1.25rem;
      right: .5rem;
    }
`;

function GlobalStyle() {
  return <StyledGlobalStyle/>
}

export default GlobalStyle;

