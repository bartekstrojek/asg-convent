import moment from 'moment';

export const dateFormatter = (date: Date) => moment.utc(new Date(date)).local().format('DD MMM YYYY, HH:mm');