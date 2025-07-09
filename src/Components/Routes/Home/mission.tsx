import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider, { Settings } from 'react-slick';
import React, { FC, Fragment } from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import { Content, MainSection, SectionTitle, StarndarText } from '../../Common/StyledComponents';
import { ESectionsNames } from '../../Common/Layout';

const CustomImg = styled.div`
    position: relative;
    img {
        width: calc(100% - .5rem);
    }
`;

const CustomStanardText = styled(StarndarText)`
    padding: 1rem;
`;

const Mission: FC = () => {
    const intl = useIntl();

    const photos = [
        `${process.env.PUBLIC_URL}/assets/img/sliders/1.png`,
        `${process.env.PUBLIC_URL}/assets/img/sliders/2.png`,
        `${process.env.PUBLIC_URL}/assets/img/sliders/3.png`,
        `${process.env.PUBLIC_URL}/assets/img/sliders/4.png`,
        `${process.env.PUBLIC_URL}/assets/img/sliders/5.png`,
        `${process.env.PUBLIC_URL}/assets/img/sliders/6.png`
    ];
    const settingsMain: Settings = {
        autoplay: true,
        arrows: false,
        slidesToScroll: 1,
        slidesToShow: 3,
        infinite: true,
        autoplaySpeed: 3000
    };
    return (
        <MainSection data-id={ESectionsNames.MISSION}>
            <SectionTitle>{intl.formatMessage({ id: 'mission.title' })}</SectionTitle>
            <Content>
                <CustomStanardText>{intl.formatMessage({ id: 'mission.description' })}
                    
                </CustomStanardText>
                <br />
                <br />
                <Slider {...settingsMain}>
                    {photos?.map((elem, index) => (
                        <CustomImg key={index}>
                            <img src={elem} />
                        </CustomImg>
                    ))}
                </Slider>
            </Content>
        </MainSection>
    );
};

export default Mission;
