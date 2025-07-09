import { FC, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import styled from 'styled-components';
import useDropdown from 'react-dropdown-hook';
import { useIntl } from 'react-intl';
import Scrollbars from 'react-custom-scrollbars';

import Languages from './language';
import { colorStack } from '../../../Style/colorStack';
import { fontSizeAndHeight } from '../../../Style/fontSizes';
import { ESectionsNames, ILayoutContext, LayoutContext } from '../Layout';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Top = styled.div`
    display: flex;
    border-bottom: 1px solid ${colorStack.white};
    padding: 0 0 1rem 0;
    margin: 0 0 1rem 0;
    gap: 2rem;
    align-items: center;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    a, span {
        ${fontSizeAndHeight[25]};
        text-transform: uppercase;
        font-weight: 900;
        color: ${colorStack.white};
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
            color: ${colorStack.green};
        }
    }
`;

const CustomLink = styled.a`
    font-weight: 600;
    ${fontSizeAndHeight[16]};
    display: flex;
    gap: 0.5rem;
    align-items: center;
    img {
        width: 25px;
    }
`;

const Orgs = styled.span`
    color: ${colorStack.middleGrey};
`;

const WrapperMobile = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    > div > div > div > ul {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-end;
        padding: 2rem;
        height: calc(100vh - 64px);
        li {
            font-weight: 500;
            text-align: right;
            a {
                ${fontSizeAndHeight[20]};
                color: ${colorStack.middleGrey};
                border-bottom: 1px solid transparent;
            &:hover {
                border-color: #8746EB;
            }
            }
        }
    }
`;

const Hamburger = styled.div`
    span {
        display: block;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        position: relative;
        background: #cdcdcd;
        border-radius: 3px;
        z-index: 1;
        transform-origin: 4px 0px;
        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0), background 0.5s cubic-bezier(0.77,0.2,0.05,1.0), opacity 0.55s ease;
    }
`;

const MobileMenu = styled.div`
    width: 90%;
    position: fixed;
    height: calc(100vh - 71px);
    top: 71px;
    right: 0;
    backdrop-filter: blur(10px);
    background: rgba(20, 18, 24, 0.99);
    box-shadow: -16px -6px 80px 0px rgba(248, 249, 249, 0.03) inset, 36px 12px 64px 0px rgba(2, 3, 3, 0.70), -12px -20px 56px 0px rgba(232, 237, 243, 0.05);
    padding:2rem 0 0 0;
`;

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    > span {
        ${fontSizeAndHeight[20]};
        text-transform: uppercase;
        color: ${colorStack.white};
        text-align: center;
    }
`;

export const Menu: FC = () => {
    const intl = useIntl();
    const location = useLocation();
    const history = useNavigate();
    const [wrapperMobileRef, dropdownMobileOpen, toggleMobileDropdown, closeMobileDropdown] = useDropdown();
    const { sectionsPoint, scrollRef } = useContext<ILayoutContext>(LayoutContext);

    const clickHandler = (name: ESectionsNames) => {
        console.log('location', location);
        if (location.pathname !== '/') {
            history('/');
            scrollRef.current?.scrollTo(0, sectionsPoint.find(elem => elem.name === name)?.point);
            closeMobileDropdown();
        } else {
            scrollRef.current?.scrollTo(0, sectionsPoint.find(elem => elem.name === name)?.point);
            closeMobileDropdown();
        }
    };
    return (
        <Wrapper>
            {window.innerWidth > 1024 ? (
                <>
                    <Top>
                        <Orgs>{intl.formatMessage({ id: 'menu.organisers' })}</Orgs>
                        <CustomLink href="https://playair.pro" target="_blank">
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/img/logo/playair.png`}
                                alt="Logo"
                                loading="lazy"
                            />
                            PLAYAIR.PRO
                        </CustomLink>
                        <CustomLink
                            href="https://https://www.asgkrakowarena.com/"
                            target="_blank"
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/img/logo/arena.png`}
                                alt="Logo"
                                loading="lazy"
                            />
                            ASG Kraków Arena
                        </CustomLink>
                        {/* <Languages /> */}
                    </Top>
                    <Bottom>
                        <span onClick={() => clickHandler(ESectionsNames.PARTNERS)}>{intl.formatMessage({ id: 'menu.partners' })}</span>
                        <span onClick={() => clickHandler(ESectionsNames.GUESTS)}>{intl.formatMessage({ id: 'menu.guests' })}</span>
                        <span onClick={() => clickHandler(ESectionsNames.CONTESTS)}>{intl.formatMessage({ id: 'menu.contensts' })}</span>
                        <span onClick={() => clickHandler(ESectionsNames.NEWS)}>{intl.formatMessage({ id: 'menu.news' })}</span>
                        <span onClick={() => clickHandler(ESectionsNames.MISSION)}>{intl.formatMessage({ id: 'menu.mission' })}</span>
                        <span onClick={() => clickHandler(ESectionsNames.MAP)}>{intl.formatMessage({ id: 'menu.location' })}</span>
                    </Bottom>
                </>
            ) : (
                <WrapperMobile ref={wrapperMobileRef}>
                    <Hamburger onClick={toggleMobileDropdown}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Hamburger>
                    {dropdownMobileOpen && (
                        <MobileMenu>
                            <Scrollbars>
                                <Inner>
                                    <span onClick={() => clickHandler(ESectionsNames.PARTNERS)}>{intl.formatMessage({ id: 'menu.partners' })}</span>
                                    <span onClick={() => clickHandler(ESectionsNames.GUESTS)}>{intl.formatMessage({ id: 'menu.guests' })}</span>
                                    <span onClick={() => clickHandler(ESectionsNames.CONTESTS)}>{intl.formatMessage({ id: 'menu.contensts' })}</span>
                                    <span onClick={() => clickHandler(ESectionsNames.NEWS)}>{intl.formatMessage({ id: 'menu.news' })}</span>
                                    <span onClick={() => clickHandler(ESectionsNames.MISSION)}>{intl.formatMessage({ id: 'menu.mission' })}</span>
                                    <span onClick={() => clickHandler(ESectionsNames.MAP)}>{intl.formatMessage({ id: 'menu.location' })}</span>
                                </Inner>
                            </Scrollbars>
                        </MobileMenu>
                    )}
                </WrapperMobile>
            )}
        </Wrapper>
    );
};
