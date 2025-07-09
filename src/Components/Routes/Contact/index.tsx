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

export const Contact: FC = () => {
    const intl = useIntl();

    return(
        <MainSection>
            <SectionTitle>{intl.formatMessage({ id: 'global.contact' })}</SectionTitle>
            <Content>
                <Paragraph>
                {intl.formatMessage({ id: 'contact.information1' })} <a href="mailto:kontakt@konwentasg.pl">kontakt[at]konwentasg.pl</a> {intl.formatMessage({ id: 'contact.information2' })}
                </Paragraph>
            </Content>
        </MainSection>
    );
};