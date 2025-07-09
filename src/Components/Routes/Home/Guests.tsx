import { FC } from 'react';
import styled from 'styled-components';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIntl } from 'react-intl';

import { ElemSlider } from '../../Common/Slider';
import guests from '../Guests/guests.json';
import { MainSection, SectionTitle, Socials } from '../../Common/StyledComponents';
import { colorStack } from '../../../Style/colorStack';
import { ESectionsNames } from '../../Common/Layout';
import { media } from '../../../Style/breakpoints';

const PartnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    ${media.desktop`
        padding: 2rem;
        flex-direction: row;
    `}
`;

const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        height: 250px;
        ${media.desktop`
            height: 50vh;
        `}
    }
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
`;

const Name = styled.div`
    font-size: 2rem;
    font-weight: 700;
    padding: 1rem 0;
    color: ${colorStack.white};
    text-transform: uppercase;
    ${media.desktop`
        font-size: 4rem;
    `}
`;

const Description = styled.div`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;
    color: ${colorStack.white};
    padding: 1rem 0;
    width: 100%;
    ${media.desktop`
        max-width: calc(1440px - 650px);
    `}
`;

export const Guests: FC = () => {
    const intl = useIntl();

    return (
        <MainSection  data-id={ESectionsNames.GUESTS}>
            <SectionTitle>{intl.formatMessage({ id: 'guest.title' })}</SectionTitle>
            <ElemSlider
                data={guests?.map((elem: any, index) => (
                    <PartnerWrapper key={index}>
                        <Left>
                            <img src={`${process.env.PUBLIC_URL}/assets/img/Guests/${elem.image}`} />
                        </Left>
                        <Right>
                            <Name>{elem.name}</Name>
                            <Description>{elem.description}</Description>
                            <br />
                            <br />
                            <Socials>
                                {elem.facebook?.length > 0 &&
                                    <a href={elem.facebook} target="_blank">
                                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                                    </a>
                                }
                                {elem.link?.length > 0 &&
                                    <a href={elem.link} target="_blank">
                                        <FontAwesomeIcon icon={faGlobe} size="2x" />
                                    </a>
                                }
                                {elem.instagram?.length > 0 &&
                                    <a href={elem.instagram} target="_blank">
                                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                                    </a>
                                }
                                {elem.youtube?.length > 0 &&
                                    <a href={elem.youtube} target="_blank">
                                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                                    </a>
                                }
                            </Socials>
                        </Right>
                    </PartnerWrapper>
                ))}
            />
        </MainSection>
    );
};