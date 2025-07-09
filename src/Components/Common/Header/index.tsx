import { FC } from 'react';
import styled from 'styled-components';

import { Logo } from './logo';
import { Menu } from './menu';
import { media } from '../../../Style/breakpoints';

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    background: rgba(0, 53, 0, 0.1);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
    ${media.desktop`
        padding: 0;
        height: 150px;
    `};
`;

const Inner = styled.div`
    align-items: center;
    gap: 2rem;
    display: flex;
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    ${media.desktop`
        padding: 0.5rem 0 0 0;
    `}
`;

export const Header: FC = () => {
    return (
        <Wrapper>
            <Inner>
                <Logo />
                <Menu />
            </Inner>
        </Wrapper>
    );
};
