import { FC } from 'react';
import styled, { css } from 'styled-components';
import Dropdown, { ReactDropdownProps } from 'react-dropdown';
import 'react-dropdown/style.css';

import { Label } from './Label';
import { colorStack } from '../../Style/colorStack';
import { ErrorInfo } from './ErrorInfo';
import { Spinner } from './Spinner/Spinner';

const Wrapper = styled.div<{ err: boolean }>`
    ${props => props.err && css`
        margin-bottom: .3rem;
    `}
    .Dropdown-control {
        border-radius: 8px;
        border: 1px solid ${colorStack.middleGrey};
        ${props => props.err && css`
            border: 2px solid ${colorStack.middleRed};
        `}
    }
    .Dropdown-disabled {
        opacity: .5;
    }
    .Dropdown-placeholder {
        white-space: nowrap;
    }
    .Dropdown-root {
        .Dropdown-menu {
            border-radius: 0 0 8px 8px;
            border: 1px solid ${colorStack.middleGrey};
            margin-top: 0;
            .Dropdown-option {
                color: ${colorStack.content};
                &:hover {
                    background: ${colorStack.middleBlue};
                }
            }
            .is-selected {
                font-weight: 600;
                background: ${colorStack.middleBlue};
            }
        }
        .Dropdown-arrow {
            border-color: ${colorStack.middleOrange} transparent transparent;
        }
        &.is-open {
            .Dropdown-arrow {
                border-color: transparent transparent ${colorStack.middleOrange};
            }
            .Dropdown-control {
                border-radius: 8px 8px 0 0;
            }
        }
    }
`;

const Inner = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    > div:last-child {
        width: 32px;
    }
    > div:first-child {
        width: calc(100%);
    }
`;

type IProps = ReactDropdownProps & {
    label?: string;
    required?: boolean;
    value?: string;
    errorMsg?: string;
    loading?: boolean;
};

export const DropDown: FC<IProps> = props => {
    return (
        <Wrapper err={!!props.errorMsg}>
            {props.label && <Label required={props.required} label={props.label} />}
            <Inner>
                <Dropdown {...props} />
                {props.loading && <Spinner size="small" />}
            </Inner>
            {props.errorMsg &&
                <ErrorInfo>{props.errorMsg}</ErrorInfo>
            }
        </Wrapper>
    );
};