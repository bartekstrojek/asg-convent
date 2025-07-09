import { FC } from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

import { Content, MainSection, SectionTitle } from '../../Common/StyledComponents';
import { colorStack } from '../../../Style/colorStack';

const Paragraph = styled.p`
    color: ${colorStack.white};
    min-height: calc(100vh - 450px - 250px);
    padding: 1rem;
    a {
        color: ${colorStack.green};
        text-decoration: none;
        transition: all 0.3s;
        &:hover {
            color: ${colorStack.middleBlue};
        }
    }
`;

export const Expositors: FC = () => {
    const intl = useIntl();

    return(
        <MainSection>
            <SectionTitle>{intl.formatMessage({ id: 'expositors.title' })}</SectionTitle>
            <Content>
                <Paragraph>
                    {intl.formatMessage({ id: 'expositors.information1' })}
                    <br/>
                    <br/>
                    <a href="mailto:kontakt@konwentasg.pl">kontakt[at]konwentasg.pl</a>
                    <br/>
                    <br/>
                    {intl.formatMessage({ id: 'expositors.information2' })}J.
                    <br/>
                    <br/>
                    {intl.formatMessage({ id: 'expositors.information3' })}
                    <br/>
                    <br/>
                    {intl.formatMessage({ id: 'expositors.information4' })}
                    <br/>
                    <br/>
                    {intl.formatMessage({ id: 'expositors.information5' })}
                    <br/>
                    <br/>
                    {intl.formatMessage({ id: 'expositors.information6' })}
                    <br/>
                    <br/>
                    <strong>{intl.formatMessage({ id: 'expositors.information7' })}</strong>
                </Paragraph>
            </Content>
        </MainSection>
    );
};