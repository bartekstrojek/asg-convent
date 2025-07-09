import React from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';
import GoogleMapReact from 'google-map-react';

import { Content, SectionTitle } from '../../Common/StyledComponents';
import { colorStack } from '../../../Style/colorStack';
import { mapStyleDark } from '../../../Tools/map';
import MarkerComponent from '../../Common/Marker';
import { fontSizeAndHeight } from '../../../Style/fontSizes';
import { media } from '../../../Style/breakpoints';

const Wrapper = styled.div`
    color: ${colorStack.white};
    padding: 0 2rem;
    min-height: calc(100vh - 150px - 450px);
    ${media.desktop`
        padding: 2rem 0;
    `}
`;

const Description = styled.div`
    line-height: 2rem;
    ${fontSizeAndHeight[20]};
    margin-bottom: 2rem;
`;

const CustomImg = styled.div`
    position: relative;
    img {
        width: calc(100% - .5rem);
    }
`;

const MapContainer = styled.div`
    height: 390px;
    width: 100%;
    border-radius: 16px;
    z-index: 9999;
    position: relative;
    overflow: hidden;
`;

const ValueText = styled.span`
    color: ${colorStack.green};
    font-weight: 700;
`;

const PastEvents: React.FC = () => {
    const photos = [
        `${process.env.PUBLIC_URL}/assets/img/sliders/1.jpeg`,
        `${process.env.PUBLIC_URL}/assets/img/sliders/2.jpeg`,
        `${process.env.PUBLIC_URL}/assets/img/sliders/3.jpeg`,
        `${process.env.PUBLIC_URL}/assets/img/sliders/4.jpeg`
    ];
    const settingsMain: Settings = {
        autoplay: true,
        arrows: true,
        slidesToScroll: 1,
        slidesToShow: 3,
        infinite: true,
        autoplaySpeed: 5000
    };
    return (
        <Wrapper>
            <Content>
                <SectionTitle>2024</SectionTitle>
                <Description>
                    <strong>Miejsce:</strong> <ValueText>Asg Kraków Arena</ValueText> <br /><br />
                    <MapContainer>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyD2GKJv06CpvoCjhcMSW--s1Du5k4pXXLQ' }}
                            options={{
                                styles: mapStyleDark,
                                zoomControl: false,
                                fullscreenControl: false
                            }}
                            center={{
                                lat: 50.00760818925422,
                                lng: 20.051465404741517
                            }}
                            zoom={11}
                        >
                            <MarkerComponent
                                lat={50.00760818925422}
                                lng={20.051465404741517}
                                imgUrl={`${process.env.PUBLIC_URL}/assets/img/logo/arena.png`}
                            />
                        </GoogleMapReact>
                    </MapContainer>
                    <br /><br />
                    <strong>Liczba wystawców:</strong> <ValueText>30</ValueText> <br /><br />
                    <Slider {...settingsMain}>
                        {photos?.map((elem, index) => (
                            <CustomImg key={index}>
                                <img src={elem} />
                            </CustomImg>
                        ))}
                    </Slider>
                    <br /><br />
                    <strong>Liczba gości specjalnych:</strong> <ValueText>5</ValueText> <br /><br />
                    <Slider {...settingsMain}>
                        {photos?.map((elem, index) => (
                            <CustomImg key={index}>
                                <img src={elem} />
                            </CustomImg>
                        ))}
                    </Slider>
                    <br /><br />
                    <strong>Liczba uczestników:</strong> <ValueText>500</ValueText> <br /><br />
                    <Slider {...settingsMain}>
                        {photos?.map((elem, index) => (
                            <CustomImg key={index}>
                                <img src={elem} />
                            </CustomImg>
                        ))}
                    </Slider>
                </Description>
                <SectionTitle>2023</SectionTitle>
                <Description>
                    <strong>Miejsce:</strong> <ValueText>Asg Kraków Arena</ValueText> <br /><br />
                    <MapContainer>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyD2GKJv06CpvoCjhcMSW--s1Du5k4pXXLQ' }}
                            options={{
                                styles: mapStyleDark,
                                zoomControl: false,
                                fullscreenControl: false
                            }}
                            center={{
                                lat: 50.00760818925422,
                                lng: 20.051465404741517
                            }}
                            zoom={11}
                        >
                            <MarkerComponent
                                lat={50.00760818925422}
                                lng={20.051465404741517}
                                imgUrl={`${process.env.PUBLIC_URL}/assets/img/logo/arena.png`}
                            />
                        </GoogleMapReact>
                    </MapContainer>
                    <br /><br />
                    <strong>Liczba wystawców:</strong> <ValueText>30</ValueText> <br /><br />
                    <Slider {...settingsMain}>
                        {photos?.map((elem, index) => (
                            <CustomImg key={index}>
                                <img src={elem} />
                            </CustomImg>
                        ))}
                    </Slider>
                    <br /><br />
                    <strong>Liczba gości specjalnych:</strong> <ValueText>5</ValueText> <br /><br />
                    <Slider {...settingsMain}>
                        {photos?.map((elem, index) => (
                            <CustomImg key={index}>
                                <img src={elem} />
                            </CustomImg>
                        ))}
                    </Slider>
                    <br /><br />
                    <strong>Liczba uczestników:</strong> <ValueText>500</ValueText> <br /><br />
                    <Slider {...settingsMain}>
                        {photos?.map((elem, index) => (
                            <CustomImg key={index}>
                                <img src={elem} />
                            </CustomImg>
                        ))}
                    </Slider>
                </Description>
                <SectionTitle>2022</SectionTitle>
                <Description>
                    <strong>Miejsce:</strong> <ValueText>Asg Kraków Arena</ValueText> <br /><br />
                    <MapContainer>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyD2GKJv06CpvoCjhcMSW--s1Du5k4pXXLQ' }}
                            options={{
                                styles: mapStyleDark,
                                zoomControl: false,
                                fullscreenControl: false
                            }}
                            center={{
                                lat: 50.00760818925422,
                                lng: 20.051465404741517
                            }}
                            zoom={11}
                        >
                            <MarkerComponent
                                lat={50.00760818925422}
                                lng={20.051465404741517}
                                imgUrl={`${process.env.PUBLIC_URL}/assets/img/logo/arena.png`}
                            />
                        </GoogleMapReact>
                    </MapContainer>
                    <br /><br />
                    <strong>Liczba wystawców:</strong> <ValueText>30</ValueText> <br /><br />
                    <Slider {...settingsMain}>
                        {photos?.map((elem, index) => (
                            <CustomImg key={index}>
                                <img src={elem} />
                            </CustomImg>
                        ))}
                    </Slider>
                    <br /><br />
                    <strong>Liczba gości specjalnych:</strong> <ValueText>5</ValueText> <br /><br />
                    <Slider {...settingsMain}>
                        {photos?.map((elem, index) => (
                            <CustomImg key={index}>
                                <img src={elem} />
                            </CustomImg>
                        ))}
                    </Slider>
                    <br /><br />
                    <strong>Liczba uczestników:</strong> <ValueText>500</ValueText> <br /><br />
                    <Slider {...settingsMain}>
                        {photos?.map((elem, index) => (
                            <CustomImg key={index}>
                                <img src={elem} />
                            </CustomImg>
                        ))}
                    </Slider>
                </Description>
                <SectionTitle>2021</SectionTitle>
                <Description>
                    <strong>Miejsce:</strong> <ValueText>Asg Kraków Arena</ValueText> <br /><br />
                    <MapContainer>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyD2GKJv06CpvoCjhcMSW--s1Du5k4pXXLQ' }}
                            options={{
                                styles: mapStyleDark,
                                zoomControl: false,
                                fullscreenControl: false
                            }}
                            center={{
                                lat: 50.00760818925422,
                                lng: 20.051465404741517
                            }}
                            zoom={11}
                        >
                            <MarkerComponent
                                lat={50.00760818925422}
                                lng={20.051465404741517}
                                imgUrl={`${process.env.PUBLIC_URL}/assets/img/logo/arena.png`}
                            />
                        </GoogleMapReact>
                    </MapContainer>
                    <br /><br />
                    <strong>Liczba wystawców:</strong> <ValueText>30</ValueText> <br /><br />
                    <Slider {...settingsMain}>
                        {photos?.map((elem, index) => (
                            <CustomImg key={index}>
                                <img src={elem} />
                            </CustomImg>
                        ))}
                    </Slider>
                    <br /><br />
                    <strong>Liczba gości specjalnych:</strong> <ValueText>5</ValueText> <br /><br />
                    <Slider {...settingsMain}>
                        {photos?.map((elem, index) => (
                            <CustomImg key={index}>
                                <img src={elem} />
                            </CustomImg>
                        ))}
                    </Slider>
                    <br /><br />
                    <strong>Liczba uczestników:</strong> <ValueText>500</ValueText> <br /><br />
                    <Slider {...settingsMain}>
                        {photos?.map((elem, index) => (
                            <CustomImg key={index}>
                                <img src={elem} />
                            </CustomImg>
                        ))}
                    </Slider>
                </Description>
            </Content>
        </Wrapper>
    );
};

export default PastEvents;