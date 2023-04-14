'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Character } from '@prisma/client';
import { useState } from 'react';

import CreateCharacter from '@/components/characters/create-character';

interface Props {
    characters: Character[];
}

export default function CharactersGrid(props: Props) {
    const [characters, setCharacters] = useState<Character[]>(props.characters);

    const handleCharacterCreated = (character: Character) => {
        setCharacters((prevCharacters) => prevCharacters.concat(character));
    };

    return (
        <>
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-2xl">Characters</h1>
                <CreateCharacter onSuccess={handleCharacterCreated} />
            </div>

            <div className="grid grid-cols-8 gap-2">
                {characters.map((character) => (
                    <Link
                        href={`/characters/${character.slug}`}
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
