import { FC, useState } from 'react';
import { Option } from 'react-dropdown';
import styled from 'styled-components';

import { DropDown } from '../DropDown';

const languages = [
    { value: 'pl', label: 'Polski' },
    { value: 'en', label: 'English (US)' },
    { value: 'uk', label: 'English (UK)' },
    { value: 'cs', label: 'Czech' },
    { value: 'de', label: 'German' },
    { value: 'fr', label: 'French' },
    { value: 'ua', label: 'Ukrainian' },
    { value: 'lt', label: 'Lithuanian' },
    { value: 'sk', label: 'Slovak' },
    { value: 'it', label: 'Italian' },
    { value: 'sv', label: 'Swedish' },
    { value: 'fi', label: 'Finnish' },
    { value: 'es', label: 'Spanish' }
];

const Wrapper = styled.div`
    margin: 0 0 0 auto;
    width: 200px;
`;

const Languages: FC = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const handleLanguageChange = (selectedLanguage: string) => {
        /** TODO */
    };

    return (
        <Wrapper>
            <DropDown
                options={languages}
                disabled={loading}
                loading={loading}
                value={'1045'}
                onChange={(arg: Option) => handleLanguageChange(arg.value)}
            />
        </Wrapper>
    );
};

export default Languages;