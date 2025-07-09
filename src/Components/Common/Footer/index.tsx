import { FC } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import { colorStack } from '../../../Style/colorStack';
import { media } from '../../../Style/breakpoints';

const Wrapper = styled.div`
    padding: 2rem 2rem 0 2rem;
    a {
        transition: all 0.3s;
        &:hover {
            color: ${colorStack.green};
        }
    }
`;

const Top = styled.div`
  border-top: 1px solid ${colorStack.white};
  padding-top: 2rem;
`;

const TopTop = styled.div`
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    flex-direction: column;
    ${media.desktop`
        flex-direction: row;
    `}
    img {
        width: 50px;
        ${media.desktop`
            width: 130px;
        `}
    }
    gap: 2rem;
`;

const TopBottom = styled.div`
    display: flex;
    color: ${colorStack.white};
    padding-top: 2rem;
    max-width: 1440px;
    margin: 0 auto;
    flex-direction: column;
    ${media.desktop`
        flex-direction: row;
    `}
`;

const Bottom = styled.div`
    display: flex;
    border-top: 1px solid ${colorStack.white};
    margin-top: 2rem;
    padding: 2rem 0;
    justify-content: space-between;
    flex-direction: column;
    ${media.desktop`
        flex-direction: row;
    `}
`;

const Inner = styled.div`
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    gap: 2rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    ${media.desktop`
        flex-direction: row;
    `}
`;

const Left = styled.div`
    display: flex;
    gap: 1rem;
`;

const Right = styled.div`
    span {
        color: ${colorStack.white};
    }

`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Footer: FC = () => {
    const intl = useIntl();
    return (
        <Wrapper>
            <Top>
                <TopTop>
                    <div><img src={`${process.env.PUBLIC_URL}/assets//img/logo.png`} alt="Logo" loading="lazy" /></div>
                    <Column>
                        {/* <Link to="/past-events">{intl.formatMessage({ id: 'footerTop.previousEditions' })}</Link> */}
                        {/* <Link to="/awards">{intl.formatMessage({ id: 'global.prizes' })}</Link> */}
                        <Link to="/about-us">{intl.formatMessage({ id: 'footerTop.aboutUs' })}</Link>
                        <Link to="/contact">{intl.formatMessage({ id: 'global.contact' })}</Link>
                    </Column>
                    <Column>
                        <a href="https://www.facebook.com/KrakowskiKonwentAsg" target="_blank">Facebook</a>
                    </Column>
                    <Column>
                        <Link to="/for-expositors">{intl.formatMessage({ id: 'footerTop.forExpositors' })}</Link>
                        <Link to="/for-sponsors">{intl.formatMessage({ id: 'footerTop.forSponsors' })}</Link>
                    </Column>
                </TopTop>
                <TopBottom>
                    <div>{intl.formatMessage({ id: 'footerTop.largeText1' })}</div>
                </TopBottom>
            </Top>
            <Bottom>
                <Inner>
                    <Left>
                        <Link to="/cookies">{intl.formatMessage({ id: 'footerBottom.cookiesPolicy' })}</Link>
                        <Link to="/privacy">{intl.formatMessage({ id: 'footerBottom.privacy' })}</Link>
                        <Link to="/contact">{intl.formatMessage({ id: 'global.contact' })}</Link>
                    </Left>
                </Inner>
            </Bottom>
        </Wrapper>
    );
};
