import React from 'react';
import { createGlobalStyle } from 'styled-components';

const StyledGlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap');

    :root {
      --dark: #000;
      --light: #fff;
    }

    * {
        font-family: 'Crimson Text', serif;
    }
 
    body {
        background-color: var(--light);
        margin: 0;  
    }
`;

function GlobalStyle() {
  return <StyledGlobalStyle/>
}

export default GlobalStyle;

