import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Character } from '@prisma/client';

import TkTextField from '@/ui/forms/text-field';
import TsButton from '@/ui/buttons/button';

interface Props {
    onSuccess: (character: Character) => void;
    onError?: () => void;
    onClose: () => void;
}

interface CharacterValues {
    name: string;
}

export default function CreateCharacterForm(props: Props) {
    const initialValues: CharacterValues = {
        name: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Please provide the character name.'),
    });

    const onSubmit = async (values: CharacterValues) => {
        try {
            const response = await fetch(`/api/characters`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            const character = await response.json();

            props.onSuccess(character.data);
        } catch (error: any) {
            console.error(error);

            if (typeof props.onError === 'function') {
                props.onError();
            }
        }
    };

    const handleReset = () => {
        props.onClose();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            onReset={handleReset}
            validationSchema={validationSchema}
        >
            <Form>
                <TkTextField
                    label="Name"
                    name={'name'}
                    placeholder={'Enter the character name.'}
                    autoComplete={'off'}
                    autoCorrect={'off'}
                />

                <div className="mt-8">
                    <TsButton type={'submit'}>Add</TsButton>

                    <button
                        type={'reset'}
                        className={
                            'ml-2 inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:bg-black/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2'
                        }
                    >
                        Cancel
                    </button>
                </div>
            </Form>
        </Formik>
    );
}
