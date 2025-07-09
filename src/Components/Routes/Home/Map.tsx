import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { useIntl } from 'react-intl';

import { ESectionsNames } from '../../Common/Layout';
import { MainSection, SectionTitle, Content } from '../../Common/StyledComponents';
import { mapStyleDark } from '../../../Tools/map';
import MarkerComponent from '../../Common/Marker';
import { colorStack } from '../../../Style/colorStack';
import { fontSizeAndHeight } from '../../../Style/fontSizes';

const MapContainer = styled.div`
    height: 70vh;
    width: 100%;
    border-radius: 16px;
    z-index: 9999;
    position: relative;
    overflow: hidden;
`;

const InfoBox = styled.div<{ right: number }>`
    backdrop-filter: blur(5px);
    height: 100%;
    position: absolute;
    top: 0;
    right: 2rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 350px;
    background: rgba(0, 0, 0, 0.9);
    box-shadow: -16px -6px 80px 0px rgba(248, 249, 249, 0.03) inset, 36px 12px 64px 0px rgba(2, 3, 3, 0.70), -12px -20px 56px 0px rgba(232, 237, 243, 0.05);
    ${(props) => props.right && `right: ${props.right}px;`}
    color: ${colorStack.white};
`;

const Button = styled.a`
    border-radius: 8px;
    padding: .5rem;
    width: 90%;
    text-align: center;
    text-transform: uppercase;
    background: ${colorStack.middleBlue};
    ${fontSizeAndHeight[16]};
    font-weight: 600;
    align-self: center;
`;

const Map: React.FC = () => {
    const intl = useIntl();

    return (
        <MainSection data-id={ESectionsNames.MAP}>
            <SectionTitle>{intl.formatMessage({ id: 'map.title' })}</SectionTitle>
            <MapContainer>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyD2GKJv06CpvoCjhcMSW--s1Du5k4pXXLQ' }}
                    options={{
                        styles: mapStyleDark,
                        zoomControl: false,
                        fullscreenControl: false
                    }}
                    center={{
                        lat: 52.11280,
                        lng: 19.21195
                    }}
                    zoom={window.innerWidth > 1024 ? 6.5 : 5.5}
                >
                    <MarkerComponent
                        lat={50.00760818925422}
                        lng={20.051465404741517}
                    />
                </GoogleMapReact>
                <InfoBox right={(window.innerWidth - 1440 - (4 * 16)) / 2}>
                    {intl.formatMessage({ id: 'map.location1' })}
                    <br />
                    <br />
                    <strong>ASG Kraków Arena</strong>
                    <br />
                    <br />
                    {intl.formatMessage({ id: 'map.location2' })}
                    <br />
                    <br />
                    <strong>50.00760818925422, 20.051465404741517</strong>
                    <br />
                    {intl.formatMessage({ id: 'map.location3' })}
                    <br />
                    <strong>ul. Bogucicka</strong>
                    {/* <br />
                    <br />
                    <Button>Wyznacz trasę</Button> */}
                </InfoBox>
            </MapContainer>
        </MainSection>
    );
};

export default Map;