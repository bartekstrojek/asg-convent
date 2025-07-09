import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import { Navigation } from './Components/Routes';
import { Layout } from './Components/Common/Layout';
import { GlobalStyle } from './Style/global';
import { IntlComponent } from './Components/Common/IntlComponent';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <IntlComponent>
            <GlobalStyle />
            <Layout>
                <Navigation />
            </Layout>
        </IntlComponent>
    </BrowserRouter>
);