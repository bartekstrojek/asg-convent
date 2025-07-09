import { FC } from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl'
 
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

export const Sponsors: FC = () => {
    const intl = useIntl();
    return (
        <MainSection>
            <SectionTitle>{intl.formatMessage({ id: 'sponsors.title' })}</SectionTitle>
            <Content>
                <Paragraph>
                    {intl.formatMessage({ id: 'sponsors.information1' })}
                    <br />
                    <br />
                    <a href="mailto:kontakt@konwentasg.pl">kontakt[at]konwentasg.pl</a>
                    <br />
                    <br />
                    {intl.formatMessage({ id: 'sponsors.information2' })}
                    <br />
                    <br />
                    {intl.formatMessage({ id: 'sponsors.information3' })}
                    <br />
                    <br />
                    {intl.formatMessage({ id: 'sponsors.information4' })}
                    <br />
                    <br />
                    {intl.formatMessage({ id: 'sponsors.information5' })}
                    <br />
                    <br />
                    {intl.formatMessage({ id: 'sponsors.information6' })}
                    <br />
                    <br />

                </Paragraph>
            </Content>
        </MainSection>
    );
};