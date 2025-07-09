export const removeNulls = (obj: any): any => {
    Object.keys(obj).forEach((key: any) => {
        if (obj[key] === null) {
            delete obj[key];
        }
    });
    return obj;
};