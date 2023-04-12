import Head from 'next/head';
import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';

import ContainerLayout from '@/layouts/container-layout';
import TkNotationField from '@/ui/forms/notation-field';
import TsButton from '@/ui/buttons/button';
import { useGamepad } from '@/hooks/gamepad';

interface ShareComboValues {
    notation: string;
}

export default function Share() {
    const gamepad = useGamepad();
    const router = useRouter();

    console.log(gamepad);

    const initialValues: ShareComboValues = {
        notation: decodeURIComponent((router.query.notation as string) || ''),
    };

    const handleInput = async (event: any) => {
        const encodedNotation = encodeURIComponent(event.target.value);

        await router.replace({
            query: {
                notation: encodedNotation,
            },
        });
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
            <Head>
                <title>Share Combo | Tekken Space</title>
            </Head>

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
