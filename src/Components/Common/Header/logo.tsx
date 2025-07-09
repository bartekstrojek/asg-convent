import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

import { media } from '../../../Style/breakpoints';

const Wrapper = styled.div`
    img {
        width: 50px;
        ${media.desktop`
            width: 100px;
        `}
    }
`;

export const Logo: FC = () => {
    return (
        <Wrapper>
            <Link to="/">
                <img src={`${process.env.PUBLIC_URL}/assets//img/logo.png`} alt="Logo" loading="lazy" />
            </Link>
        </Wrapper>
    );
};