import { FC } from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import news from './news.json';
import { colorStack } from '../../../Style/colorStack';
import { fontSizeAndHeight } from '../../../Style/fontSizes';
import { MainSection } from '../../Common/StyledComponents';
import { ESectionsNames } from '../../Common/Layout';
import { media } from '../../../Style/breakpoints';

const Wrapper = styled.div`
  background: ${colorStack.white};
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 2rem 0;
  max-width: 1300px;
  width: 90%;
  margin: 0 auto;
  margin-top: 2rem;
`;

const Inner = styled.div`
  max-width: 100%;
  margin: 0 auto;
`;

const Title = styled.h2`
  ${fontSizeAndHeight[31]};
  text-transform: uppercase;
  font-weight: 900;
`;

const NewsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 auto;
  border-top: 1px solid ${colorStack.content};
  padding: 1rem;
  justify-content: space-between;
  flex-direction: column-reverse;
  ${media.desktop`
     flex-direction: row;
     align-items: center;
     gap: 3rem;
      `}
`;

const NewsContent = styled.div`
    max-width: 800px;
    p {
        margin: 1.5rem 0;
        color: ${colorStack.content};
    }
`;

const NewsDate = styled.div`
  white-space: nowrap;
  margin: 0;
  text-align: right;
`;

export const News: FC = () => {
    const intl = useIntl();

    return (
        <MainSection  data-id={ESectionsNames.NEWS}>
            <Wrapper>
                <Inner>
                    <Title>{intl.formatMessage({ id: 'news.title' })}</Title>
                    {news.slice(0, 4).map((item, index) => (
                        <NewsWrapper key={index}>
                            <NewsContent>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </NewsContent>
                            <NewsDate>
                                <span>{item.date}</span>
                            </NewsDate>
                        </NewsWrapper>
                    ))}
                </Inner>
            </Wrapper>
        </MainSection>
    );
};
