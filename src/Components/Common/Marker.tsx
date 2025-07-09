import React from 'react';
import styled from 'styled-components';

const Marker = styled.div`
    position: absolute;
    cursor: pointer;
    transform: translate(-50%, -50%);
    img {
        width: 60px;
    }
`;

interface IProps {
    lat: number;
    lng: number;
    imgUrl?: string;
}

const MarkerComponent: React.FC<IProps> = props => {
    return (
        <Marker>
            <img src={props.imgUrl || `${process.env.PUBLIC_URL}/assets/img/logo.png`} alt="Logo" loading="lazy" />
        </Marker>
    );
};

export default MarkerComponent;