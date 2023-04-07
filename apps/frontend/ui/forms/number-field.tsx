import { Field, FieldHookConfig, useField } from 'formik';

interface CustomProps {
    label: string;
}

type Props = CustomProps & FieldHookConfig<string>;

export default function TsNumberField({ label, ...props }: Props) {
    const [field, meta] = useField({
        ...props,
    });

    return (
        <div className="mb-4 flex flex-col">
            <label
                htmlFor={props.id || props.name}
                className="mb-1 text-zinc-200"
            >
                {label}
            </label>
            <Field
                className="rounded-md border border-black/30 bg-black/20 p-2 text-zinc-50 focus:border-teal-900 focus:outline-none"
                type="number"
                {...field}
                {...props}
            />

            {meta.touched && meta.error && (
                <div className="mt-1 text-sm text-red-500">{meta.error}</div>
            )}
        </div>
    );
}
