import { keyframes } from 'styled-components';

export const shinening = keyframes`
    from {
        top: -110%;
        left: -210%;
    }
    to {
        top: 60%;
        left: 100%;
    }
`;

export const spinner = keyframes`
    0% {transform:rotate(0deg);}
    100% {transform:rotate(360deg);}
`;