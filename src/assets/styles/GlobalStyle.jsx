import React from 'react';
import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap');

    :root {
      --dark: #292E27;
      --light: #FFFCFA;
      --lightest: #fff;
      --articleColor: #847E64;
      --articleHoverColor: #78725B;
      --yellow: #F2EFEE;
      --yellowStronger: #FFFF00;
      --orangeStronger: #FFBF00;
      --borderColor: #7C9A7E;
      --defaultGutterSizeX: 1.5rem;
      --defaultGutterSizeY: 1rem;
      --articleMargin: 2rem;
      --articleMarginLess: -2rem;
      --articlePadding: 1rem;
      --articlePaddingLess: -1rem;
      --containerColumnWidth: 55rem;
    }

    * {
        font-family: 'Crimson Text', serif;
    }

    html {
      width: 100%;
      height: 100%;
      font-size: 62.5%;
    }

    #root {
      height: 100%;
    }
 
    body {
      width: 100%;
      height: 100%;
      margin: 0;
      display: flex;
      flex-direction: column;
      background-color: var(--light);
    }

    .container {
      width: 100%;
      min-height: 100%;
      display: flex;
      flex-direction: column;
    }

    .prev-scroll-button,
    .top-scroll-button {
      background-color: transparent;
      border: 2px solid var(--dark);
      border-radius: 50%;

      &:hover {
        background-color: var(--yellowStronger);
      }
    }

    .top-scroll-button {
      position: fixed;
      bottom: 1.25rem;
      right: 1.5rem;
    }

    .right-panel {
      right: 0!important;
    }

    .default-article {
      &:hover {
        background-color: var(--yellow);
      }

      button {
        color: var(--dark);
      }
    }

    .important-article {
      border-bottom: var(--light) solid 1px;
      background-color: var(--articleColor);

      &:hover {
        background-color: var(--articleHoverColor);
      }

      button {
        color: var(--light);
      }
    }
`;

function GlobalStyle() {
  return <StyledGlobalStyle/>
}

export default GlobalStyle;

