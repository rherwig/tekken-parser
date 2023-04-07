import { Field, FieldHookConfig, useField } from 'formik';

import Combo from '@/components/combo';

type Props = FieldHookConfig<string>;

export default function TkNotationField({ ...props }: Props) {
    const [field, meta] = useField({
        ...props,
        type: 'text',
    });

    return (
        <div className="mb-4 flex flex-col">
            <label
                htmlFor={props.id || props.name}
                className="mb-1 text-zinc-200"
            >
                Notation
            </label>
            <Field
                className="rounded-md rounded-b-none border border-black/30 bg-black/20 p-2 text-zinc-50 focus:border-teal-900 focus:outline-none"
                autoComplete={'off'}
                autoCorrect={'off'}
                spellCheck={'false'}
                {...field}
                {...props}
            />

            <Combo notation={field.value} />

            {meta.touched && meta.error && (
                <div className="-mt-3 text-sm text-red-500">{meta.error}</div>
            )}
        </div>
    );
}
