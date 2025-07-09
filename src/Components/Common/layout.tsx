import { createContext, FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Scrollbar from 'react-scrollbars-custom';

import { Header } from './Header';
import { Footer } from './Footer';
import { media } from '../../Style/breakpoints';

const Wrapper = styled.div`
        padding-top: 71px;
    ${media.desktop`
        padding-top: 150px;
    `}
`;

const TopLeftCorner = styled.div`
    max-width: 1191px;
    width: 100%;
    height: 685px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    background-image: ${`url(${process.env.PUBLIC_URL}/assets/img/left-corner-bg.png)`};
`;

const BottomRightCorner = styled.div`
    max-width: 1461px;
    width: 100%;
    height: 635px;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-image: ${`url(${process.env.PUBLIC_URL}/assets/img/bottom-right-corner.png)`};
`;

const Inner = styled.div`
        height: calc(100vh - 71px);
    ${media.desktop`
        height: calc(100vh - 150px);
    `}
`;

interface IProps {
    children: JSX.Element;
}

export interface ILayoutContext {
    sectionsPoint: {name: ESectionsNames, point: number}[];
    scrollRef: any;
}

export enum ESectionsNames {
    NEWS = 'news',
    GUESTS = 'guests',
    PARTNERS = 'partners',
    MISSION = 'mission',
    CONTESTS = 'contests',
    MAP = 'map'
}

export const LayoutContext = createContext<ILayoutContext>({
    sectionsPoint: [],
    // tslint:disable-next-line:no-null-keyword
    scrollRef: null
});

export const Layout: FC<IProps> = (props) => {
    // tslint:disable-next-line:no-null-keyword
    const scrollRef = useRef<any>(null);
    const [sectionsPoint, setSectionsPoint] = useState<{name: ESectionsNames, point: number}[]>([]);

    useEffect(() => {
        const sections = document.querySelectorAll('[data-id]');
        const sectionsPoint = Array.from(sections).map((section) => ({
            name: section.getAttribute('data-id') as ESectionsNames,
            point: section.getBoundingClientRect().top - 150
        }));
        setSectionsPoint(sectionsPoint);
    }, []);

    const initialState: ILayoutContext = {
        sectionsPoint,
        scrollRef
    };

    return (
        <LayoutContext.Provider value={initialState}>
            <Wrapper>
                <TopLeftCorner />
                <Header />
                <Inner>
                    <Scrollbar ref={scrollRef}>
                        {props.children}
                        <Footer />
                    </Scrollbar>
                </Inner>
                <BottomRightCorner />
            </Wrapper>
        </LayoutContext.Provider>
    );
};
