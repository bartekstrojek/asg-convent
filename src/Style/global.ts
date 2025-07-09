import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

import { colorStack } from './colorStack';
import { fontSizeAndHeight } from './fontSizes';
import { media } from './breakpoints';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    html {
        ${fontSizeAndHeight[16]};
        overscroll-behavior: none;
        scroll-behavior: smooth;
        background: #040404;
        height: 100vh;
        overflow: hidden;
        scroll-behavior: smooth;
    }

    body {
        font-family: 'Poppins', sans-serif;
        color: ${colorStack.black};
        height: 100vh;
        overflow: hidden;
    }
    a, p {
        ${fontSizeAndHeight[16]};
        text-decoration: none;
        color: ${colorStack.white};
    }
    strong {
        font-weight: 700;
    }
    button {
        border: none;
        background: none;
        outline: none;
        padding: 0;
        margin: 0;
    }
    h1 {
        margin: 1rem 0;
        ${fontSizeAndHeight[31]};
    }
    h2 {
        margin: .5rem 0;
        ${fontSizeAndHeight[25]};
    }
    h3 {
        margin: .5rem 0;
        ${fontSizeAndHeight[20]};
    }
    p {
        ${fontSizeAndHeight[16]};
        margin: .3rem 0;
    }
    .rdrCalendarWrapper {
        border-radius: 8px;
    }
    ol {
        list-style: decimal;
        padding-left: 1.5rem;
    }
    ul {
        list-style: square;
        padding-left: 1.5rem;
    }
    .yarl__slide {
        cursor: pointer;
    }
    .yarl__navigation_prev, .yarl__navigation_next {
        svg {
            width: 56px;
            height: 56px;
            z-index: 9;
            color: ${colorStack.middleOrange};
            font-size: 56px;
        }
    }
`;