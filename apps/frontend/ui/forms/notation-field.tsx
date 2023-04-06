import { Field, FieldHookConfig, useField } from 'formik';

import Combo from '@/components/combo';

type Props = FieldHookConfig<string>;

export default function TkNotationField({ ...props }: Props) {
    const [field, meta] = useField({
        ...props,
        type: 'text',
    });

    return (
        <div className="flex flex-col">
            <label
                htmlFor={props.id || props.name}
                className="mb-1"
            >
                Notation
            </label>
            <Field
                className="mb-2 rounded-md border border-gray-300 p-2"
                {...field}
                {...props}
            />

            <Combo notation={field.value} />

            {meta.touched && meta.error && (
                <div className="mt-1 text-sm text-red-500">{meta.error}</div>
            )}
        </div>
    );
}
