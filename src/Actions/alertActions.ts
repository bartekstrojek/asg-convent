import { ReactNode } from 'react';
import { Dispatch } from 'redux';
import { v4 as uuidv4 } from 'uuid';

import { ADD_ALERT, UPDATE_ALERT, REMOVE_ALERT } from './types/alertTypes';
import { IAlert, AlertType } from '../Entities/IAlert';
import { delay } from '../Tools/generalTools';

export const addAlert = (content: ReactNode, type: AlertType) => (async (dispatch: Dispatch) => {
    const alertId = uuidv4();
    const alert: IAlert = {
        id: alertId,
        content,
        type
    };

    dispatch({ type: ADD_ALERT, alert });
    await delay(10);
    dispatch({ type: UPDATE_ALERT, alert: { visible: true }, alertId });
}) as any;

export const hideAndRemoveAlert = (alertId: string | number) => (async (dispatch: Dispatch) => {
    dispatch({ type: UPDATE_ALERT, alert: { visible: false }, alertId });
    await delay(600);
    dispatch({ type: REMOVE_ALERT, alertId });
}) as any;