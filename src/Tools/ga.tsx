import ReactGA4 from 'react-ga4';
const InitializeGoogleAnalytics = () => {

    ReactGA4.initialize('G-XF6G85108L');
};

const TrackGoogleAnalyticsEvent = (category: string, action: string, label: string) => {
    if (window.location.hostname !== 'localhost' && window.location.hostname !== 'beta.playair.pro' && ReactGA4.isInitialized) {
        ReactGA4?.event({
            category: category,
            action: action,
            label: label
        });
    }
};

export default InitializeGoogleAnalytics;
export { InitializeGoogleAnalytics, TrackGoogleAnalyticsEvent };