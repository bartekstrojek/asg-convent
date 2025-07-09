import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { spinner } from '../../../Style/keyframes';
import { colorStack } from '../../../Style/colorStack';

interface CssProps {
    size: number;
    darkMode: boolean;
}

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Circle = styled.div<CssProps>`
    box-sizing: border-box;
    animation-name: ${spinner};
    animation-duration: 1.3s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67);
    width: ${props => `calc(${props.size} * 12px)`};
    height: ${props => `calc(${props.size} * 12px)`};
    border-radius: 50%;
    border-width: ${props => `calc(${props.size} * 0.5px)`};
    border-style: solid;
    border-color: ${colorStack.content} ${colorStack.middleGrey} ${colorStack.middleGrey};
    border-image: initial;
`;

const Label = styled.span<CssProps>`
    color: ${colorStack.white};
    margin: 5px 0 0 0;
    font-size: ${props => `calc(${props.size} * 0.45rem)`};
    ${({ darkMode }) => darkMode && css`
        color: ${colorStack.white};
    `}
`;

const sizeNum = {
    buttonSize: 1.15,
    xSmall: 1,
    small: 1.3,
    medium: 1.6,
    large: 2
};

interface IProps {
    className?: string;
    label?: string | React.ReactNode;
    darkMode?: boolean;
    size: 'buttonSize' | 'xSmall' | 'small' | 'medium' | 'large';
}

export const Spinner: FC<IProps> = props => (
    <Wrapper className={props.className || ''}>
        <Circle size={sizeNum[props.size]} darkMode={props.darkMode || false}></Circle>
        {props.label &&
            <Label size={sizeNum[props.size]} darkMode={props.darkMode || false}>{props.label}</Label>
        }
    </Wrapper>
);
