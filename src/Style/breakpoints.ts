import { css } from 'styled-components';

interface Sizes {
    giantXl: number;
    giant: number;
    desktop: number;
    desktopLegacy: number;
    tablet: number;
    tabletLegacy: number;
    tabletSm: number;
    phone: number;
}

enum ESizes {
    giantXl = 'giantXl',
    giant = 'giant',
    desktop = 'desktop',
    desktopLegacy = 'desktopLegacy',
    tablet = 'tablet',
    tabletLegacy = 'tabletLegacy',
    tabletSm = 'tabletSm',
    phone = 'phone'
}

export const sizes: Sizes = {
    giantXl: 1440,
    giant: 1366,
    desktop: 1024,
    desktopLegacy: 1240,
    tablet: 768,
    tabletLegacy: 801, // remove after mergin all styles from UI repo
    tabletSm: 480,
    phone: 320
};

export const media = Object.keys(sizes).reduce((acc: any, label: any) => {

    acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) => css`
    @media(min-width: ${sizes[label as ESizes]}px) {
        ${css(literals, ...placeholders)}
    }`;
    return acc;
}, {} as Record<keyof typeof sizes, (l: TemplateStringsArray, ...p: any[]) => string>);
