import { getServerSession } from 'next-auth';

import { CharactersService } from '@/server/services/characters-service';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import CombosList from '@/components/combos/combos-list';

interface Params {
    slug: string;
}

interface Props {
    params: Params;
}

export default async function CharacterDetailsPage(props: Props) {
    const session = await getServerSession(authOptions);
    const character = await CharactersService.findBySlug(props.params.slug);

    if (!character) {
        return null;
    }

    const combos = character.moves.filter((move) => move.isCombo);

    return (
        <CombosList
            session={session}
            character={character}
            moves={combos}
        />
    );
}
