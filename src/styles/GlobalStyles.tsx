import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --bg: #FDF4F5;
        --main: #202124;
        --sub: grey;
        --primary: #32B2E5;
        --error: red;
        --blue: #C0DBEA;

        --section-spacing: 8rem;
        --header-footer-padding: 2.5rem 6rem;
    }

    @font-face {
        font-family: 'magic-retro';
        src: local('magic-retro'), url(./fonts/magic-retro.ttf) format('truetype');
    }

    @font-face {
        font-family: 'cute';
        src: local('cute'), url(./fonts/cute.ttf) format('truetype');
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: 10px;
        color: var(--main);
        font-family: 'Roboto', sans-serif;
    }

    button {
        background: none;
        border: none;
        outline: none;
    }
    
    input {
        border: none;
        outline: none;
    }

    a {
        text-decoration: none;
    }
`;

const GlobalStyles = (): JSX.Element => {
  return <GlobalStyle />;
};

export default GlobalStyles;
