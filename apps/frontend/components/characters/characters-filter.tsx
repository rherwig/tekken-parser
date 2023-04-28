'use client';

import { Form, Formik } from 'formik';

import TkTextField from '@/ui/forms/text-field';

interface CharacterFilterValues {
    name: string;
}

interface Props {
    onNameFilterChange: (value: string) => void;
    onSubmit: (values: CharacterFilterValues) => void;
}

export default function CharactersFilter(props: Props) {
    const initialValues: CharacterFilterValues = {
        name: '',
    };

    const handleValidate = (values: CharacterFilterValues) => {
        if (typeof props.onNameFilterChange === 'function') {
            props.onNameFilterChange(values.name);
        }
    };

    const handleSubmit = (values: CharacterFilterValues) => {
        if (typeof props.onSubmit === 'function') {
            props.onSubmit(values);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            onReset={() => {}}
            validate={handleValidate}
        >
            <Form>
                <TkTextField
                    name={'name'}
                    placeholder={'Search for a character...'}
                    autoComplete={'new-password'}
                    autoCorrect={'off'}
                    data-lpignore={true}
                    autoFocus={true}
                />
            </Form>
        </Formik>
    );
}
