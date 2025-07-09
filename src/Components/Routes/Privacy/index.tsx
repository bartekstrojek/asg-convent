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
    p {
        font-weight: 700;
        margin: 2rem;
        color: ${colorStack.content};
    }
`;

export const Privacy: FC = () => {
    const intl = useIntl();

    return (
        <MainSection>
            <SectionTitle>Polityka prywatności</SectionTitle>
            <Content>
                <ol>
                    <li>
                        {intl.formatMessage({ id: 'privacy.description1' })}
                    </li>
                    <li>
                        {intl.formatMessage({ id: 'privacy.description2' })}
                    </li>
                    <li>
                        {intl.formatMessage({ id: 'privacy.description3' })}
                    </li>
                    <li>
                        {intl.formatMessage({ id: 'privacy.description4' })}
                    </li>
                </ol>
                <p>{intl.formatMessage({ id: 'privacy.adminTitle' })}</p>
                <ol>
                    <li>{intl.formatMessage({ id: 'privacy.description5' })}</li>
                    <li>{intl.formatMessage({ id: 'privacy.description6' })}</li>
                    <li>
                        {intl.formatMessage({ id: 'privacy.description7' })}
                        <ul>
                            <li>{intl.formatMessage({ id: 'privacy.description7_1' })}</li>
                            <li>{intl.formatMessage({ id: 'privacy.description7_2' })}</li>
                            <li>{intl.formatMessage({ id: 'privacy.description7_3' })}</li>
                            <li>{intl.formatMessage({ id: 'privacy.description7_4' })}</li>
                            <li>{intl.formatMessage({ id: 'privacy.description7_5' })}</li>
                            <li>{intl.formatMessage({ id: 'privacy.description7_6' })}</li>
                        </ul>
                    </li>
                    <li>{intl.formatMessage({ id: 'privacy.description8' })}</li>
                    <li>{intl.formatMessage({ id: 'privacy.description9' })}</li>
                </ol>
                <p>{intl.formatMessage({ id: 'privacy.userRightsTitle' })}</p>
                <ol>
                    <li>{intl.formatMessage({ id: 'privacy.description10' })}</li>
                    <li>{intl.formatMessage({ id: 'privacy.description11' })}</li>
                    <li>{intl.formatMessage({ id: 'privacy.description12' })}</li>
                    <li>{intl.formatMessage({ id: 'privacy.description13' })}</li>
                    <li>{intl.formatMessage({ id: 'privacy.description14' })}</li>
                    <li>{intl.formatMessage({ id: 'privacy.description15' })}</li>
                    <li>{intl.formatMessage({ id: 'privacy.description16' })}</li>
                    <li>{intl.formatMessage({ id: 'privacy.description17' })}</li>
                </ol>
                <p>{intl.formatMessage({ id: 'privacy.dataProcessingTitle' })}</p>
                <ol>
                    <li>{intl.formatMessage({ id: 'privacy.description18' })}</li>
                    <li>{intl.formatMessage({ id: 'privacy.description19' })}</li>
                    <li>{intl.formatMessage({ id: 'privacy.description20' })}</li>
                    <li>{intl.formatMessage({ id: 'privacy.description21' })}</li>
                </ol>
            </Content>
        </MainSection>
    );
};

export default Privacy;