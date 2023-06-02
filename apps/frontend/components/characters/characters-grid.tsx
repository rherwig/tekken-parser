'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Character } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import { selectCharacters } from '@/store/slices/characters-slice';
import CreateCharacter from '@/components/characters/create-character';
import CharactersFilter from '@/components/characters/characters-filter';
import { store } from '@/store';
import AdminOnly from '@/components/auth/admin-only';

export default function CharactersGrid() {
    const router = useRouter();

    const [searchTerm, setSearchTerm] = useState('');
    const [characters, setCharacters] = useState(
        Array.from(selectCharacters(store.getState())),
    );

    const sortedCharacters = useMemo(() => {
        return characters.sort((a, b) => a.name.localeCompare(b.name));
    }, [characters]);

    const filteredCharacters = useMemo(() => {
        return sortedCharacters.filter((character) => {
            return character.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
        });
    }, [sortedCharacters, searchTerm]);

    const handleCharacterCreated = (character: Character) => {
        setCharacters((prevCharacters) => prevCharacters.concat(character));
    };

    const handleNameFilterChange = (name: string) => {
        setSearchTerm(name);
    };

    const handleFilterSubmit = () => {
        if (!filteredCharacters.length) {
            return;
        }

        const firstCharacter = filteredCharacters.at(0);
        if (!firstCharacter) {
            return;
        }

        router.push(`/characters/${firstCharacter.slug}`);
    };

    return (
        <>
            <div className="mb-4 flex items-center justify-between">
                <h1 className="text-2xl">Characters</h1>

                <AdminOnly>
                    <CreateCharacter onSuccess={handleCharacterCreated} />
                </AdminOnly>
            </div>

            <div className="mb-6">
                <CharactersFilter
                    onNameFilterChange={handleNameFilterChange}
                    onSubmit={handleFilterSubmit}
                />
            </div>

            <div className="grid grid-cols-8 gap-2">
                {filteredCharacters.map((character) => (
                    <Link
                        href={`/characters/${character.slug}/combos`}
                        className="hover:shadow-xs relative flex aspect-square items-center justify-center bg-black/40 text-white transition-all hover:scale-105"
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
        </>
    );
}
