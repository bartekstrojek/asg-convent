import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import React, { FC, Fragment } from 'react';
import styled from 'styled-components';

import { media } from '../../Style/breakpoints';
import { colorStack } from '../../Style/colorStack';

const SliderWrapper = styled.div`
    width: 100%;
    .slick-prev {
        left: auto;
        right: 20%;
        bottom: -30px;
        top: auto;
        &:before {
            color: ${colorStack.white};
            font-size: 2.5rem;
        }
        ${media.desktop`
            bottom: -50px;
        `}
    }
    .slick-next {
        left: auto;
        right: calc(20% - 40px);
        bottom: -30px;
        top: auto;
        &:before {
            color: ${colorStack.white};
            font-size: 2.5rem;
        }
        ${media.desktop`
        bottom: -50px;
        `}
    }
    .slick-track {
        display: flex;
        align-items: center;
    }
    .slick-dots {
        li {
            margin-right: 5px;
            width: 25px;
            height: 25px;
        }
        img {
            width: auto;
            height: 25px;
        }
    }
    .photo-component {
        img {
            height: 254px;
            margin: 0 auto;
            width: auto;
        }
    }
`;

interface IProps {
    data: any[];
}

export const ElemSlider: FC<IProps> = props => {

    const settingsMain = {
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1
    };

    return (
        <SliderWrapper>
            <Slider {...settingsMain}>
                {props.data?.map((elem, index) => (
                    <Fragment key={index}>
                        {elem}
                    </Fragment>
                ))}
            </Slider>
        </SliderWrapper>
    );
};