import { useState } from 'react';
import { Character } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

import ContainerLayout from '@/layouts/container-layout';
import AdminOnly from '@/components/auth/admin-only';
import CreateCharacterModal from '@/components/characters/create-character-modal';

const prisma = new PrismaClient();

export async function getServerSideProps() {
    const props: Props = {
        characters: [],
    };

    try {
        props.characters = await prisma.character.findMany();
    } catch (error: any) {
        console.error(error);
    }

    return {
        props,
    };
}

interface Props {
    characters: Character[];
}

export default function CharactersIndex(props: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [characters, setCharacters] = useState<Character[]>(props.characters);

    const handleCharacterCreated = (character: Character) => {
        setCharacters((prevCharacters) => prevCharacters.concat(character));
        setIsOpen(false);
    };

    return (
        <ContainerLayout>
            <Head>
                <title>Characters | Tekken Space</title>
            </Head>

            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl">Characters</h1>
                <AdminOnly>
                    <button
                        type={'button'}
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => setIsOpen(true)}
                    >
                        Create Character
                    </button>
                </AdminOnly>
            </div>

            <div className="grid grid-cols-8 gap-2">
                {characters.map((character) => (
                    <Link
                        href={`/characters/${character.slug}`}
                        className="hover:shadow-xs relative flex aspect-square items-center justify-center bg-black/80 text-white transition-all hover:scale-105"
                        key={character.id}
                    >
                        {character.imageUrl && (
                            <Image
                                src={character.imageUrl}
                                alt={`Picture of ${character.name}`}
                                width={256}
                                height={256}
                                className="absolute"
                                priority={true}
                            />
                        )}

                        <div className="absolute bottom-0 h-6 w-full bg-black/50 text-center text-sm">
                            {character.name}
                        </div>
                    </Link>
                ))}
            </div>

            <AdminOnly>
                <CreateCharacterModal
                    isOpen={isOpen}
                    onSuccess={handleCharacterCreated}
                    onClose={() => setIsOpen(false)}
                />
            </AdminOnly>
        </ContainerLayout>
    );
}
