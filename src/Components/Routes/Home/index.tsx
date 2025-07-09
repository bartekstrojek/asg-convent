import { FC } from 'react';
import styled from 'styled-components';

import { Partners } from './Partners';
import { News } from './News';
import Mission from './Mission';
import { Guests } from './Guests';
import Contensts from './Contensts';
import Map from './Map';

const Wrapper = styled.div`
    width: 100%;
    > section {
        min-height: calc(100vh - 250px);
        margin-bottom: 2rem;
    }
`;

export const Home: FC = () => {
    return (
        <Wrapper>
            <Partners />
            <Guests />
            <Map />
            <Contensts />
            <News />
            <Mission />
        </Wrapper>
    );
};
