import { FC } from 'react';
import styled from 'styled-components';

import { colorStack } from '../../Style/colorStack';
import { fontSizeAndHeight } from '../../Style/fontSizes';

const Wrapper = styled.label`
    color: ${colorStack.black};
    ${fontSizeAndHeight[13]};
    margin-bottom: 4px;
    font-weight: 600;
    text-align: left;
    display: block;
`;

const Required = styled.span`
    color: ${colorStack.middleRed};
    margin-left: 4px;
`;

interface IProps {
    label: string;
    required?: boolean;
}

export const Label: FC<IProps> = props => {
    return (
        <Wrapper>{props.label}{props.required && <Required>*</Required>}</Wrapper>
    );
};