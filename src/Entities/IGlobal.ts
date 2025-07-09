export enum ELcid {
    en = 1033,
    uk = 1058,
    fr = 1036,
    de = 1031,
    pl = 1045,
    cz = 1029,
    ua = 4096,
    lt = 1063,
    sk = 1051,
    it = 1040,
    se = 1053,
    fi = 1035,
    es = 3082
}

export const LangList = ['en', 'fr', 'uk', 'de', 'pl', 'cz', 'ua', 'lt', 'sk', 'it', 'se', 'fi', 'es'];

export const LanguagesList = {
    1033: 'en',
    1036: 'fr',
    1058: 'uk',
    1031: 'de',
    1045: 'pl',
    1029: 'cz',
    4096: 'ua',
    1063: 'lt',
    1051: 'sk',
    1040: 'it',
    1053: 'se',
    1035: 'fi',
    3082: 'es'
};

export interface ISlide {
    src: string;
    width: number;
    height: number;
    srcSet?: any
}