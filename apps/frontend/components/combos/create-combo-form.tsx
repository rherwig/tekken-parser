import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Combo as ComboModel } from '@prisma/client';

import TkTextField from '@/ui/forms/text-field';
import TkNotationField from '@/ui/forms/notation-field';

interface Props {
    characterId: string;
    onSuccess: (combo: ComboModel) => void;
    onError?: () => void;
    onClose: () => void;
}

type ComboValues = Omit<ComboModel, 'id' | 'moves' | 'characterId'>;

export default function CreateComboForm(props: Props) {
    const initialValues: ComboValues = {
        name: '',
        notation: '',
        damage: null,
        hits: null,
        notes: null,
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Please provide a name for the combo.'),
        notation: Yup.string().required(
            'Please provide a notation for the combo.',
        ),
    });

    const onSubmit = async (values: ComboValues) => {
        try {
            const response = await fetch(`/api/combos`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...values,
                    characterId: props.characterId,
                }),
            });

            const combo = await response.json();

            props.onSuccess(combo.data);
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
                    placeholder={'Enter a combo name.'}
                    autoComplete={'off'}
                    autoCorrect={'off'}
                />

                <TkNotationField
                    name={'notation'}
                    placeholder={'Enter the combo notation, i.e.: d/f2,1+2'}
                    autoComplete={'off'}
                    autoCorrect={'off'}
                />

                <div className="mt-4">
                    <button
                        type={'submit'}
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                        Create
                    </button>

                    <button
                        type={'reset'}
                        className={
                            'ml-2 inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2'
                        }
                    >
                        Cancel
                    </button>
                </div>
            </Form>
        </Formik>
    );
}
