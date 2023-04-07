import { GetServerSideProps } from 'next';
import { Combo as ComboModel } from '@prisma/client';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

import ContainerLayout from '@/layouts/container-layout';
import AdminOnly from '@/components/auth/admin-only';
import CreateComboModal from '@/components/combos/create-combo-modal';
import DeleteConfirmationDialog from '@/ui/dialogs/delete-confirmation-dialog';
import {
    CharactersService,
    CharacterWithCombos,
} from '@/services/characters-service';
import Combo from '@/components/combo';
import TsButton from '@/ui/buttons/button';

interface Props {
    character: CharacterWithCombos | null;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const props: Props = {
        character: null,
    };

    try {
        const slug = context.params?.slug?.toString();
        if (!slug) {
            return {
                props,
                redirect: {
                    basePath: '/characters',
                    permanent: false,
                },
            };
        }

        props.character = await CharactersService.findBySlug(slug);

        if (!props.character) {
            return {
                props,
                redirect: {
                    basePath: '/characters',
                    permanent: false,
                },
            };
        }
    } catch (error: any) {
        console.error(error);
    }

    return {
        props,
    };
};

export default function CharacterDetailsPage(props: Props) {
    const [combos, setCombos] = useState(props.character?.combos ?? []);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const router = useRouter();

    if (!props.character) {
        return null;
    }

    const title = `${props.character.name} | Tekken Space`;

    const handleComboCreated = async (comboDto: ComboModel) => {
        setCombos((prevCombos) => [...prevCombos, comboDto]);
        setIsModalOpen(false);
    };

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

    const handleComboDeleteConfirm = async (combo: ComboModel) => {
        try {
            await fetch(`/api/combos/${combo.id}`, {
                method: 'DELETE',
            });

            setCombos((prevCombos) =>
                prevCombos.filter((c) => c.id !== combo.id),
            );
        } catch (error: any) {
            console.error(error);
        }
    };

    const handleComboEdited = async (combo: ComboModel) => {
        setCombos((prevCombos) =>
            prevCombos.map((c) => (c.id === combo.id ? combo : c)),
        );
    };

    return (
        <ContainerLayout>
            <Head>
                <title>{title}</title>
            </Head>

            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl text-zinc-200">
                    {props.character?.name}
                </h1>

                <AdminOnly>
                    <div className={'flex gap-2'}>
                        <TsButton onClick={() => setIsModalOpen(true)}>
                            Add Combo
                        </TsButton>

                        <button
                            type={'button'}
                            onClick={() => setShowDeleteConfirmation(true)}
                            className="inline-flex justify-center rounded-md border border-transparent bg-red-400 px-4 py-2 text-sm font-medium text-red-900 transition-colors hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        >
                            Delete Character
                        </button>
                    </div>
                </AdminOnly>
            </div>

            <div>
                {combos.map((combo) => (
                    <div key={combo.id}>
                        <Combo
                            notation={combo.notation}
                            combo={combo}
                            onDelete={handleComboDeleteConfirm}
                            onEdit={handleComboEdited}
                        />
                    </div>
                ))}
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
