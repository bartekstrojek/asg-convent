import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import styled, { css } from 'styled-components';

import { colorStack } from '../../../Style/colorStack';
import { fontSizeAndHeight } from '../../../Style/fontSizes';
import { Spinner } from '../Spinner/Spinner';

const Wrapper = styled.button<{ schemmaType: 'NORMAL' | 'ALERT' | 'CANCEL'; noMargin: boolean; }>`
    border-radius: 8px;
    padding: 1rem;
    white-space: nowrap;
    display: flex;
    align-items: center;
    background: #211F26;
    color: ${colorStack.white};
    font-weight: 700;
    border: none;
    outline: none;
    text-align: center;
    justify-content: center;
    cursor: pointer;
    ${fontSizeAndHeight[25]};
    text-transform: uppercase;
    transition: all .3s;
    border: 1px solid #505962;
    box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);
    &:hover {
        background: ${colorStack.middleBlue};
    };
    ${props => props.schemmaType === 'ALERT' && css`
        background: ${colorStack.middleRed};
        &:hover {
            background: ${colorStack.middleRed};
        };
    `}
    ${props => props.schemmaType === 'CANCEL' && css`
        background: ${colorStack.middleGrey};
        &:hover {
            background: ${colorStack.content};
        };
    `}
    ${props => props.disabled && css`
        background: ${colorStack.middleGrey};
        &:hover {
            background: ${colorStack.middleGrey};
        };
    `};
    svg {
        margin-left: .5rem;
        ${props => props.noMargin && css`
            margin: 0;
        `}
    };
    > div {
        width: 10px;
        margin-left: .5rem;
    }
`;

interface IProps {
    children?: React.ReactNode | string;
    disabled?: boolean;
    icon?: IconDefinition;
    loading?: boolean;
    schemmaType?: 'NORMAL' | 'ALERT' | 'CANCEL'
    onClick(): void;
}

export const Button: FC<IProps> = props => {
    return (
        <Wrapper noMargin={!props.children} schemmaType={props.schemmaType || 'NORMAL'} type="button" onClick={props.disabled ? undefined : props.onClick} disabled={props.disabled}>
            {props.children}
            {props.icon && <FontAwesomeIcon icon={props.icon} />}
            {props.loading && <Spinner size="buttonSize" />}
        </Wrapper>
    );
};