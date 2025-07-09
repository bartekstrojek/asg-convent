import { ReactNode } from 'react';

export enum AlertType {
    Success,
    Error,
    Warning,
    Info
}

export interface IAlert {
    id: string;
    type: AlertType;
    content: ReactNode;
    visible?: boolean;
}
