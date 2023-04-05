import { Field, FieldHookConfig, useField } from 'formik';

interface CustomProps {
    label: string;
}

type Props = CustomProps & FieldHookConfig<string>;

export default function TkTextField({ label, ...props }: Props) {
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
                {label}
            </label>
            <Field
                className="rounded-md border border-gray-300 p-2"
                {...field}
                {...props}
            />

            {meta.touched && meta.error && (
                <div className="mt-1 text-sm text-red-500">{meta.error}</div>
            )}
        </div>
    );
}
