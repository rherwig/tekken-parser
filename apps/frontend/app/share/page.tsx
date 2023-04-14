'use client';

import { Form, Formik } from 'formik';
import { useRouter, useSearchParams } from 'next/navigation';

import ContainerLayout from '@/layouts/container-layout';
import TkNotationField from '@/ui/forms/notation-field';
import TsButton from '@/ui/buttons/button';

interface ShareComboValues {
    notation: string;
}

export default function Share() {
    const router = useRouter();
    const params = useSearchParams();

    const initialValues: ShareComboValues = {
        notation: decodeURIComponent((params?.get('notation') as string) || ''),
    };

    const handleInput = async (event: any) => {
        const encodedNotation = encodeURIComponent(event.target.value);

        await router.replace(`/share?notation=${encodedNotation}`);
    };

    const handleSubmit = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
        } catch (error: any) {
            console.error(error);
        }
    };

    return (
        <ContainerLayout>
            <div className="prose prose-teal prose-invert mb-8">
                <h1>Share Combo</h1>
                <p>
                    Enter the notation for the combo you want to share and click
                    the &quot;Copy Share Link&quot; button. The link to your
                    combo will be copied to the clipboard.
                </p>
            </div>

            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                <Form>
                    <TkNotationField
                        name={'notation'}
                        placeholder={'Enter the combo notation, i.e.: d/f2,1+2'}
                        autoComplete={'off'}
                        autoCorrect={'off'}
                        onInput={handleInput}
                    />

                    <TsButton type={'submit'}>Copy Share Link</TsButton>
                </Form>
            </Formik>
        </ContainerLayout>
    );
}
