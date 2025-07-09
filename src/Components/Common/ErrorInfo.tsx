import { FC } from 'react';
import styled from 'styled-components';

import { colorStack } from '../../Style/colorStack';
import { fontSizeAndHeight } from '../../Style/fontSizes';

const Wrapper = styled.div`
    color: ${colorStack.middleRed};
    ${fontSizeAndHeight[10]};
    margin-top: .2rem;
    width: auto!important;
`;

interface IProps {
    children: React.ReactNode;
}

export const ErrorInfo: FC<IProps> = props => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    );
};