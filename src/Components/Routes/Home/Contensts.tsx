import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Content, MainSection, SectionTitle } from '../../Common/StyledComponents';
import { colorStack } from '../../../Style/colorStack';
import { fontSizeAndHeight } from '../../../Style/fontSizes';
import { ESectionsNames } from '../../Common/Layout';
import { media } from '../../../Style/breakpoints';

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
`;
const SingleContest = styled.div`
    width: 100%;
    flex-direction: column;
    display: flex;
    border-radius: 16px;
    padding: 1rem;
    color: ${colorStack.middleGrey};
    border: 1px solid #505962;
    backdrop-filter: blur(10px);
    background: rgba(20, 18, 24, 0.5);
    box-shadow: -16px -6px 80px 0px rgba(248, 249, 249, 0.03) inset, 36px 12px 64px 0px rgba(2, 3, 3, 0.70), -12px -20px 56px 0px rgba(232, 237, 243, 0.05);
    ${media.desktop`
        width: 31%;
    `}
`;

const Title = styled.h2`
    ${fontSizeAndHeight[31]};
    margin-bottom: 1rem;
    color: ${colorStack.white};
    font-weight: 700;
`;

const Description = styled.ul`
    ${fontSizeAndHeight[16]};
    line-height: 2rem;
    margin-bottom: 1rem;
    strong {
        color: ${colorStack.white};
    }
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

const Contensts: React.FC = () => {
    // tslint:disable-next-line:no-null-keyword
    const testRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (testRef.current) {
            console.log(testRef.current.getBoundingClientRect());
        }
    }, [testRef]);
    return (
        <MainSection data-id={ESectionsNames.CONTESTS}>
            <SectionTitle>ZAWODY</SectionTitle>
            <Content>
                <Wrapper>
                    {/* <SingleContest>
                        <Title>3 vs 3</Title>
                        <Description>
                            <li><strong>Moc:</strong> MAX 3.4 J</li>
                            <li><strong>Dystans:</strong> 100 m</li>
                            <li><strong>Liczba celów:</strong> 7</li>
                            <li><strong>Pozycja gracza:</strong> Niska</li>
                            <li><strong>Czas na strzały próbne:</strong> 40 sekund</li>
                            <li><strong>Czas na strzały punktowane:</strong> 1 minuta</li>
                            <li><strong>Trafienie w cel:</strong> 1 punkt.</li>
                            <li><strong>Drugi strzał w cel:</strong> - 1 punkt</li>
                            <li><strong>Max punktów:</strong> 7</li>
                        </Description>
                        <Button href="https://playair.pro/" target="_blank">Zapisz się</Button>
                    </SingleContest>
                    <SingleContest>
                        <Title>1 vs 1</Title>
                        <Description>
                            <li><strong>Moc:</strong> MAX 3.4 J</li>
                            <li><strong>Dystans:</strong> 100 m</li>
                            <li><strong>Liczba celów:</strong> 7</li>
                            <li><strong>Pozycja gracza:</strong> Niska</li>
                            <li><strong>Czas na strzały próbne:</strong> 40 sekund</li>
                            <li><strong>Czas na strzały punktowane:</strong> 1 minuta</li>
                            <li><strong>Trafienie w cel:</strong> 1 punkt.</li>
                            <li><strong>Drugi strzał w cel:</strong> - 1 punkt</li>
                            <li><strong>Max punktów:</strong> 7</li>
                        </Description>
                        <Button href="https://playair.pro/" target="_blank">Zapisz się</Button>
                    </SingleContest>
                    <SingleContest>
                        <Title>Pistolet</Title>
                        <Description>
                            <li><strong>Moc:</strong> MAX 3.4 J</li>
                            <li><strong>Dystans:</strong> 100 m</li>
                            <li><strong>Liczba celów:</strong> 7</li>
                            <li><strong>Pozycja gracza:</strong> Niska</li>
                            <li><strong>Czas na strzały próbne:</strong> 40 sekund</li>
                            <li><strong>Czas na strzały punktowane:</strong> 1 minuta</li>
                            <li><strong>Trafienie w cel:</strong> 1 punkt.</li>
                            <li><strong>Drugi strzał w cel:</strong> - 1 punkt</li>
                            <li><strong>Max punktów:</strong> 7</li>
                        </Description>
                        <Button href="https://playair.pro/" target="_blank">Zapisz się</Button>
                    </SingleContest>
                    <SingleContest>
                        <Title>Szturmowiec</Title>
                        <Description>
                            <li><strong>Moc:</strong> MAX 3.4 J</li>
                            <li><strong>Dystans:</strong> 100 m</li>
                            <li><strong>Liczba celów:</strong> 7</li>
                            <li><strong>Pozycja gracza:</strong> Niska</li>
                            <li><strong>Czas na strzały próbne:</strong> 40 sekund</li>
                            <li><strong>Czas na strzały punktowane:</strong> 1 minuta</li>
                            <li><strong>Trafienie w cel:</strong> 1 punkt.</li>
                            <li><strong>Drugi strzał w cel:</strong> - 1 punkt</li>
                            <li><strong>Max punktów:</strong> 7</li>
                        </Description>
                        <Button href="https://playair.pro/" target="_blank">Zapisz się</Button>
                    </SingleContest>
                    <SingleContest>
                        <Title>Snajper</Title>
                        <Description>
                            <li><strong>Moc:</strong> MAX 3.4 J</li>
                            <li><strong>Dystans:</strong> 100 m</li>
                            <li><strong>Liczba celów:</strong> 7</li>
                            <li><strong>Pozycja gracza:</strong> Niska</li>
                            <li><strong>Czas na strzały próbne:</strong> 40 sekund</li>
                            <li><strong>Czas na strzały punktowane:</strong> 1 minuta</li>
                            <li><strong>Trafienie w cel:</strong> 1 punkt.</li>
                            <li><strong>Drugi strzał w cel:</strong> - 1 punkt</li>
                            <li><strong>Max punktów:</strong> 7</li>
                        </Description>
                        <Button href="https://playair.pro/" target="_blank">Zapisz się</Button>
                    </SingleContest> */}
                    <Title>Już niebawem ogłosimy wszystkie zawody.</Title>
                </Wrapper>
            </Content>
        </MainSection>
    );
};

export default Contensts;