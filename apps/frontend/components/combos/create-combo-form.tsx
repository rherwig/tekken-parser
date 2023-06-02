import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Move as MoveModel } from '@prisma/client';

import TkTextField from '@/ui/forms/text-field';
import TkNotationField from '@/ui/forms/notation-field';
import TsButton from '@/ui/buttons/button';
import TsNumberField from '@/ui/forms/number-field';

interface Props {
    characterId: string;
    initialValues?: ComboValues;
    onSuccess: (move: MoveModel) => void;
    onError?: () => void;
    onClose: () => void;
}

type ComboValues = Partial<MoveModel>;

export default function CreateComboForm(props: Props) {
    const initialValues: any = {
        id: props.initialValues?.id ?? undefined,
        name: props.initialValues?.name ?? '',
        notation: props.initialValues?.notation ?? '',
        damage: props.initialValues?.damage ?? '',
        notes: props.initialValues?.notes ?? '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Please provide a name for the combo.'),
        notation: Yup.string().required(
            'Please provide a notation for the combo.',
        ),
    });

    const onSubmit = async (values: any) => {
        const data = {
            ...values,
        };
        const { damage, hits } = data;

        data.damage =
            damage === undefined || damage === '' || damage === null
                ? null
                : parseInt(damage);
        data.hits =
            hits === undefined || hits === '' || hits === null
                ? null
                : parseInt(hits);

        if (data.id !== undefined) {
            return updateCombo(data);
        }

        return createCombo(data);
    };

    const createCombo = async (values: ComboValues) => {
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

    const updateCombo = async (values: ComboValues) => {
        try {
            const response = await fetch(`/api/combos/${values.id}`, {
                method: 'PUT',
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
                <TkNotationField
                    name={'notation'}
                    placeholder={'Enter the combo notation, i.e.: d/f2,1+2'}
                    autoComplete={'off'}
                    autoCorrect={'off'}
                />

                <TkTextField
                    label="Name"
                    name={'name'}
                    placeholder={'Enter a combo name.'}
                    autoComplete={'off'}
                    autoCorrect={'off'}
                />

                <div className={'grid grid-cols-2 gap-4'}>
                    <TsNumberField
                        label={'Damage'}
                        name={'damage'}
                        placeholder={'Enter the combo damage (optional).'}
                    />
                </div>

                <div className="mt-8">
                    <TsButton type={'submit'}>
                        {props.initialValues?.id !== undefined
                            ? 'Update'
                            : 'Create'}
                    </TsButton>

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
