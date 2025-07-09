import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { DragEvent } from 'react';

export const urlB64ToUint8Array = (base64String: string): Uint8Array => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }

    return outputArray;
};

export const isMimeImage = (mimeType: string) => {
    const imageMimeType = [
        'image/jpeg',
        'image/png',
        'image/gif'
    ];

    return imageMimeType.includes(mimeType);
};

export const isMimePdf = (mimeType: string) => {
    return mimeType === 'application/pdf';
};

export const isImage = (type: string) => {
    const imageType = [
        'jpeg',
        'png',
        'gif',
        'jpg'
    ];
    return imageType.includes(type);
};

export const isPdf = (type: string) => {
    const pdfType = [
        'pdf'
    ];
    return pdfType.includes(type);
};

export const delay = (time: number) => new Promise(resolve => {
    setTimeout(resolve, time);
});

export const isFontAwesomeIcon = (ico: IconDefinition): ico is IconDefinition => {
    return ico ? 'iconName' in ico : false;
};

export const moveItemInArray = (arr: any, fromIndex: number, toIndex: number) => {
    arr.splice(toIndex, 0, arr.splice(fromIndex, 1)[0]);
    return arr;
};

export const smoothScrollTo = (top?: number, left?: number) => {
    'scrollBehavior' in document.documentElement.style ? window.scrollTo({
        top,
        left,
        behavior: 'smooth'
    }) : window.scrollTo(top ?? 0, left ?? 0);
};

export const isNumber = (value: number): boolean => {
    return typeof value === 'number' && !(Number?.isNaN?.(value) || isNaN(value)) && isFinite(value);
};

export type Modify<T, R> = Omit<T, keyof R> & R;

export const safeJSONParse = <T = unknown>(json: string, invalidJsonResult?: any): T => {
    try {
        return JSON.parse(json) as T;
    } catch (error) {
        return invalidJsonResult;
    }
};

declare global {
    interface Window {
        msCrypto: Crypto;
    }
}

export const randomSecureNumber = () => {
    const crypto = window.crypto || window.msCrypto;
    const array = new Uint8Array(1);
    return crypto.getRandomValues(array)[0] / (Math.pow(2, 8) - 1);
};

export const typed = <T>(val: T) => val;

export const isValidCssColor = (color: string) => {
    const domElement = document.createElement('div');
    domElement.style.color = color;
    const isValid = !!domElement.style.color;
    domElement.remove();
    return isValid;
};

export const deviceType = () => {
    const ua = window.navigator.userAgent;
    const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const Android = !!ua.match(/Android/i);
    const IE = !!/MSIE|Trident/.test(ua);

    return { iOS, Android, IE };
};

export const stringAsBoolean = (stringValue?: string) => {
    const value = (stringValue || '').toLowerCase();
    if (value === 'true') return true;
    if (value === 'false') return false;
    return undefined;
};

/**
 * Helper function to retrieve a flat list from shallow object structure
 * @params list either T[] or an object for which every value is of type T[]
 * @returns T[]
 */
export function reconcileListShallow<T>(list: T[] | { [key: string]: T[] }): T[] {
    if (Array.isArray(list)) {
        return list;
    } else {
        return Object.values(list).flatMap(array => array);
    }
}

export function highestOccurrenceInArray(arr: any[]) {
    return arr.sort((a, b) =>
        arr.filter(v => v === a).length
        - arr.filter(v => v === b).length
    ).pop();
}