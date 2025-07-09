import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import { Content, MainSection, SectionTitle } from '../../Common/StyledComponents';
import { fontSizeAndHeight } from '../../../Style/fontSizes';
import { colorStack } from '../../../Style/colorStack';
import { media } from '../../../Style/breakpoints';

const PersonsBox = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 1rem;
    ${media.desktop`
        margin-top: 2rem;
    `}
`;

const Person = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    ${media.desktop`
        width: 47%;
    `}
    img {
        width: 400px;
        border-radius: 100%;
        max-width: 100%;
    }
`;

const CustomImg = styled.img`
    position: absolute;
    top: 50px;
    right: 1rem;
    width: 100px!important;
    height: 100px;
    border-radius: 0!important;
    ${media.desktop`
        bottom: 25%;
        right: 20%;
        top: auto;
        width: 100px!important;
        height: 100px;
    `}
`;

const Name = styled.div`
    ${fontSizeAndHeight[25]};
    font-weight: 700;
    padding: 1rem 0;
    color: ${colorStack.white};
    text-transform: uppercase;
`;

const Description = styled.div`
    ${fontSizeAndHeight[16]};
    line-height: 2rem;
    color: ${colorStack.white};
    margin-top: 2rem;
`;

const BothInfo = styled.div`
    ${fontSizeAndHeight[16]};
    line-height: 2rem;
    color: ${colorStack.white};
    margin-top: 2rem;
    padding: 1rem;
    ${media.desktop`
        padding: 0;
    `}
`;

const AboutUs: React.FC = () => {
    const intl = useIntl();

    return (
        <MainSection>
            <SectionTitle>{intl.formatMessage({ id: 'aboutUs.title' })}</SectionTitle>
            <Content>
                <PersonsBox>
                    <Person>
                        <Name>PRZEMO</Name>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/Aboutus/przemo.jpg`} />
                        <CustomImg src={`${process.env.PUBLIC_URL}/assets/img/Aboutus/arena.png`} />
                        <Description>
                            <strong>PRZEMO</strong>{intl.formatMessage({ id: 'aboutUs.description1' })} 
                        </Description>
                    </Person>
                    <Person>
                        <Name>SŁOT</Name>
                        <img src={`${process.env.PUBLIC_URL}/assets/img/Aboutus/polej.jpg`} />
                        <CustomImg src={`${process.env.PUBLIC_URL}/assets/img/Aboutus/playair_black.png`} />
                        <Description>
                            <strong>SŁOT</strong>{intl.formatMessage({ id: 'aboutUs.description2' })}
                        </Description>
                    </Person>
                </PersonsBox>
                <br />
                <br />
                <BothInfo>
                    <strong>{intl.formatMessage({ id: 'aboutUs.bothInfo1' })}</strong>{intl.formatMessage({ id: 'aboutUs.bothInfo2' })} 
                </BothInfo>
                <br />
            </Content>
        </MainSection>
    );
};

export default AboutUs;