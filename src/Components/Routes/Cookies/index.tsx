import { FC } from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import { MainSection, SectionTitle } from '../../Common/StyledComponents';
import { colorStack } from '../../../Style/colorStack';

const Content = styled.div`
    background: ${colorStack.white};
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 2rem 0;
    max-width: 1300px;
    width: 90%;
    margin: 0 auto;
    margin-top: 2rem;
    ul {
        list-style: circle;
    }
    ol {
        list-style: auto;
        ul {
            margin: 1rem 0;
            padding-left: 2rem;
        }
    }
    li {
        margin-bottom: .5rem;
    }
`;

export const Cookies: FC = () => {
    const intl = useIntl();

    return (
        <MainSection>
            <SectionTitle>Polityka Cookies</SectionTitle>
            <Content>
                <ol>
                    <li>
                        {intl.formatMessage({ id: 'cookies.description1' })}
                    </li>
                    <li>
                        {intl.formatMessage({ id: 'cookies.description2' })}
                    </li>
                    <li>
                        {intl.formatMessage({ id: 'cookies.description3' })}
                    </li>
                    <li>
                        {intl.formatMessage({ id: 'cookies.description4' })}
                        <ul>
                            <li>_ga - {intl.formatMessage({ id: 'cookies.gaDuration' })}</li>
                            <li>_ga_XF6G85108L - {intl.formatMessage({ id: 'cookies.gaXDuration' })}</li>
                        </ul>
                    </li>
                    <li>
                        {intl.formatMessage({ id: 'cookies.description5' })}
                    </li>
                    <li>
                        {intl.formatMessage({ id: 'cookies.description6' })}
                    </li>
                    <li>
                        {intl.formatMessage({ id: 'cookies.description7' })}
                    </li>
                    <li>
                        {intl.formatMessage({ id: 'cookies.description9' })}
                    </li>
                    <li>
                        {intl.formatMessage({ id: 'cookies.description10' })}
                    </li>
                    <li>
                        {intl.formatMessage({ id: 'cookies.description11' })}
                        <ul>
                            <li>
                                {intl.formatMessage({ id: 'cookies.description11_2' })}
                            </li>
                            <li>
                                {intl.formatMessage({ id: 'cookies.description11_4' })}
                            </li>
                            <li>
                                {intl.formatMessage({ id: 'cookies.description11_5' })}
                            </li>
                            <li>
                                {intl.formatMessage({ id: 'cookies.description11_6' })}
                            </li>
                        </ul>
                    </li>
                </ol>
            </Content>
        </MainSection>
    );
};

export default Cookies;