import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AlertType } from '../Entities/IAlert';
import { addAlert as addAlertAction } from '../Actions/alertActions';

export const useAlert = () => {
    const dispatch = useDispatch();

    const addAlert = useCallback((content: React.ReactNode, type: AlertType = AlertType.Success) => {
        dispatch(addAlertAction(content, type));
    }, []);

    return addAlert;
};

export function useDebounceEffect(
    fn: () => void,
    waitTime: number,
    deps?: any
) {
    useEffect(() => {
        const t = setTimeout(() => {
            fn.apply(undefined, deps);
        }, waitTime);

        return () => {
            clearTimeout(t);
        };
    }, deps);
}
