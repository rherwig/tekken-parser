import { GetServerSideProps } from 'next';
import { Character, PrismaClient } from '@prisma/client';
import Head from 'next/head';

import ContainerLayout from '@/layouts/container-layout';

interface Props {
    character: Character | null;
}

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async (context) => {
    const props: Props = {
        character: null,
    };

    try {
        props.character = await prisma.character.findUnique({
            where: {
                slug: context.params?.slug?.toString(),
            },
        });
    } catch (error: any) {
        console.error(error);
    }

    return {
        props,
    };
};

export default function CharacterDetailsPage(props: Props) {
    const title = `${props.character?.name || ''} | Tekken Tools`;

    return (
        <ContainerLayout>
            <Head>
                <title>{title}</title>
            </Head>

            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl">{props.character?.name}</h1>
                <button
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => {}}
                >
                    Add Combo
                </button>
            </div>
        </ContainerLayout>
    );
}
