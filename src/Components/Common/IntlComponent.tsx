import React, { FC, useMemo } from 'react';
import { IntlProvider } from 'react-intl';
import browserLanguage from 'in-browser-language';

import en from '../../Translations/en.json';
import pl from '../../Translations/pl.json';
import uk from '../../Translations/uk.json';
import cz from '../../Translations/cz.json';
import de from '../../Translations/de.json';
import fr from '../../Translations/fr.json';
import ua from '../../Translations/ua.json';
import lt from '../../Translations/lt.json';
import sk from '../../Translations/sk.json';
import it from '../../Translations/it.json';
import se from '../../Translations/se.json';
import fi from '../../Translations/fi.json';
import es from '../../Translations/es.json';
import { ELcid, LangList, LanguagesList } from '../../Entities/IGlobal';

interface IProps {
    children: React.ReactNode;
}

export const IntlComponent: FC<IProps> = props => {
    const translations: Record<string, Record<string, string>> = {en, pl, uk, cz, de, fr, ua, lt, sk, it, se, fi, es};

    const browserUserLanguage = useMemo(() => {
        const pickedLang = browserLanguage.pick(LangList, 'pl');
        return translations[pickedLang] ? pickedLang : 'pl';
    }, []);

    const messages = useMemo(() => translations[LanguagesList[ELcid.pl] || browserUserLanguage], []);
    const locale = useMemo(() => LanguagesList[ELcid.pl], []);

    return (
        <IntlProvider locale={locale || browserUserLanguage} messages={messages} defaultRichTextElements={{
            br: () => '<br />',
            span: (...chunks) => `<span>${chunks}</span>`,
            em: (...chunks) => `<em>${chunks}</em>`,
            li: (...chunks) => `<li>${chunks}</li>`,
            b: (...chunks) => `<b>${chunks}</b>`,
            i: (...chunks) => `<i>${chunks}</i>`,
            ul: (...chunks) => `<ul>${chunks}</ul>`,
            strong: (...chunks) => `<strong>${chunks}</strong>`
        }}>
            <>{props.children}</>
        </IntlProvider>
    );
};