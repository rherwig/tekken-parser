import { GetServerSideProps } from 'next';
import { Character, Combo, PrismaClient } from '@prisma/client';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

import ContainerLayout from '@/layouts/container-layout';
import AdminOnly from '@/components/auth/admin-only';
import CreateComboModal from '@/components/combos/create-combo-modal';
import DeleteConfirmationDialog from '@/ui/dialogs/delete-confirmation-dialog';

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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const router = useRouter();

    if (!props.character) {
        return null;
    }

    const title = `${props.character.name} | Tekken Tools`;

    const handleComboCreated = (combo: Combo) => {};

    const handleCharacterDeleteConfirm = async () => {
        if (!props.character) {
            return;
        }

        try {
            await fetch(`/api/characters/${props.character.id}`, {
                method: 'DELETE',
            });

            await router.push('/characters');
        } catch (error: any) {
            console.error(error);
        }
    };

    return (
        <ContainerLayout>
            <Head>
                <title>{title}</title>
            </Head>

            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl">{props.character?.name}</h1>

                <div className={'flex gap-2'}>
                    <button
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Add Combo
                    </button>

                    <button
                        type={'button'}
                        onClick={() => setShowDeleteConfirmation(true)}
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    >
                        Delete Character
                    </button>
                </div>
            </div>

            <AdminOnly>
                <CreateComboModal
                    characterId={props.character.id}
                    isOpen={isModalOpen}
                    onSuccess={handleComboCreated}
                    onClose={() => setIsModalOpen(false)}
                />

                <DeleteConfirmationDialog
                    content={`Are you sure you want to delete ${props.character.name}? This action cannot be undone.`}
                    isOpen={showDeleteConfirmation}
                    onConfirm={handleCharacterDeleteConfirm}
                    onCancel={() => setShowDeleteConfirmation(false)}
                />
            </AdminOnly>
        </ContainerLayout>
    );
}
