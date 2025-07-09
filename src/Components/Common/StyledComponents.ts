import styled from 'styled-components';

import { fontSizeAndHeight } from '../../Style/fontSizes';
import { colorStack } from '../../Style/colorStack';
import { media } from '../../Style/breakpoints';

export const MainSection = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const SectionTitle = styled.h1`
    max-width: 1440px;
    margin: 0 auto;
    padding: 1rem;
    letter-spacing: .5rem;
    color: ${colorStack.white};
    font-weight: 700;
    width: 100%;
    ${fontSizeAndHeight[31]};
    ${media.desktop`
        ${fontSizeAndHeight[61]};
        padding: 1rem 0;
    `};
`;

export const StarndarText = styled.p`
    color: ${colorStack.white};
    ${fontSizeAndHeight[16]}
    line-height: 1.3;
    ${media.desktop`
        line-height: 2;
        ${fontSizeAndHeight[20]}
    `}
`;

export const Content = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    width: 100%;
`;

export const Socials = styled.div`
    display: flex;
    gap: 2rem;
    a {
        color: ${colorStack.white};
        transition: all 0.3s;
        &:hover {
            color: ${colorStack.green};
        }
    }
`;