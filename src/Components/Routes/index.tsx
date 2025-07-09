import { FC } from 'react';
import { Route, Routes } from 'react-router';

import { Home } from './Home';
import { Contact } from './Contact';
import { Contests } from './Contests';
import { Cookies } from './Cookies';
import { Privacy } from './Privacy';
import { Awards } from './Awards';
import PastEvents from './PastEvents';
import AboutUs from './AboutUs';
import { Expositors } from './Expositors';
import { Sponsors } from './Sponsors';

export const Navigation: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="contests" element={<Contests />} />
      <Route path="cookies" element={<Cookies />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="awards" element={<Awards />} />
      <Route path="past-events" element={<PastEvents />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="for-expositors" element={<Expositors />} />
      <Route path="for-sponsors" element={<Sponsors />} />
    </Routes>
  );
};
